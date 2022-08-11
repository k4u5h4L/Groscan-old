import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-auth";

export default function listing(
    req: NextApiRequest,
    res: NextApiResponse,
    session: Session
) {
    console.log("Hit listing");

    res.status(200).json({
        message: "Items",
    });
}
