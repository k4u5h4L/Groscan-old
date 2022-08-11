import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import requestIp from "request-ip";

export default async function checkAuth(
    req: NextApiRequest,
    res: NextApiResponse,
    next: Function
) {
    const session = await getSession({ req });

    if (!session) {
        console.log(
            `User with IP ${requestIp.getClientIp(req)} is not authenticated`
        );

        res.status(401).json({
            message: "Unauthenticated. Please go to '/login' URI and sign in.",
        });
    } else {
        console.log(`User with email ${session.user.email} is authenticated`);

        next(req, res, session);
    }
}
