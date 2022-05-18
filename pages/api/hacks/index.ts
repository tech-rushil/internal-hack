// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Hacks } from "./data";

type Data = {
    status: number;
    data: any;
    msg: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method, body } = req;

    res.setHeader("Allow", ["GET"]);

    if (method === "GET") {
        // Get the emp_id from body
        return res.status(200).send({ status: 1, msg: "Hacks Fetched", data: Hacks });
    }

    return res.status(405).end(`Method ${method} Not Allowed`);
}
