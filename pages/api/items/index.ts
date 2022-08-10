import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });
    console.log(session);

    console.log(req);

    res.status(200).json({ message: "Hey, you have reached Groscan!" });
};
