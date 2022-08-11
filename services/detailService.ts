import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-auth";

export default function detailService(
    req: NextApiRequest,
    res: NextApiResponse,
    session: Session
) {
    console.log("Hit detail");

    res.status(200).json({
        message: "Items",
    });
}
