// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";
import { Users } from "../users/data";
import { Hacks } from "./data";

type Data = {
    status: number;
    data: any;
    msg: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method, body } = req;

    res.setHeader("Allow", ["GET", "PUT", "POST"]);

    if (method === "POST") {
        if (body?.title && body?.desc && body?.tags) {
            let lastHackId = Hacks.length + 1;
            Hacks.unshift({
                hack_id: lastHackId,
                title: body.title,
                desc: body.desc,
                tags: body.tags,
                votes_ids: [],
                total_votes: 0,
                created_by: {
                    emp_id: body.emp_id,
                    date: Number(moment.now() / 1000),
                },
            });

            return res.status(200).send({ status: 1, msg: "Hack created", data: null });
        }
    }

    if (method === "PUT") {
        if (body?.hack_id && body?.vote_id) {
            let hack_id = parseInt(body.hack_id);
            let vote_id = parseInt(body.vote_id);

            Hacks.forEach((hack) => {
                if (hack.hack_id === hack_id) {
                    if (hack.votes_ids.includes(vote_id)) {
                        let index = hack.votes_ids.indexOf(vote_id);
                        hack.votes_ids.splice(index, 1);
                        hack.total_votes -= 1;
                    } else {
                        hack.votes_ids = [...hack.votes_ids, vote_id];
                        hack.total_votes += 1;
                    }
                }
            });

            return res.status(200).send({ status: 1, msg: "Updated Votes", data: null });
        }
    }

    if (method === "GET") {
        // Get the emp_id from body
        let vote_ids: number[] = [];
        Hacks.forEach((hack) => {
            // adding the user created to vote id + votes_id
            vote_ids = [...vote_ids, ...hack.votes_ids, hack.created_by.emp_id];
        });

        let unique_vote_ids: any = new Set(vote_ids);
        unique_vote_ids = [...unique_vote_ids];

        // Get the employee data from Users
        let employee_data: any = {};

        unique_vote_ids.forEach((vote_id: number) => {
            let user = Users.find((u) => u.emp_id === vote_id);
            if (user?.profile_pic) {
                employee_data[vote_id] = {
                    profile_pic: user.profile_pic,
                    name: user.name,
                };
            }
        });

        return res
            .status(200)
            .send({ status: 1, msg: "Hacks Fetched", data: { employee_data, hacks: Hacks } });
    }

    return res.status(405).end(`Method ${method} Not Allowed`);
}
