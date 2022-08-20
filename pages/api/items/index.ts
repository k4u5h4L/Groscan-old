import itemListingService from "@/services/itemListingService";
import authController from "controllers/authController";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    authController(req, res, itemListingService);
};
