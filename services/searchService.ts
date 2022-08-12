import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-auth";

export default function searchService(
    req: NextApiRequest,
    res: NextApiResponse,
    session: Session
) {
    console.log("Hit search");

    const result = ["hello", "there"];

    res.status(200).json(result);
}
