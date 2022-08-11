import listing from "@/services/listing";
import checkAuth from "middlewares/auth";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    checkAuth(req, res, listing);
};
