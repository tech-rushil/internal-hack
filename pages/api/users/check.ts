// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Users } from "./data";

type Data = {
    status: number;
    data: any;
    msg: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method, body } = req;

    res.setHeader("Allow", ["POST"]);

    if (method === "POST") {
        // Get the emp_id from body
        if (body.empId) {
            let empIdToCheck = parseInt(body.empId);
            let user = Users.find((u) => u.emp_id === empIdToCheck);

            if (user) return res.status(200).send({ status: 1, msg: "User verified", data: user });
            else return res.status(200).send({ status: 0, msg: "User not found", data: null });
        }
    }

    return res.status(405).end(`Method ${method} Not Allowed`);
}
