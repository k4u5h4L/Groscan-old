import checkAuth from "@/middlewares/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { ServiceType } from "../@types";

const authController = async (
    req: NextApiRequest,
    res: NextApiResponse,
    service: ServiceType
) => {
    const session = await checkAuth(req);

    if (!session) {
        res.status(401).json({
            message: "Unauthenticated. Please go to '/login' URI and sign in.",
        });
    } else {
        await service(req, res, session);
    }
};

export default authController;
