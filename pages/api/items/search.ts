import searchService from "@/services/searchService";
import authController from "controllers/authController";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    authController(req, res, searchService);
};
