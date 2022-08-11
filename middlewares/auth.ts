import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";
import requestIp from "request-ip";

export default async function checkAuth(req: NextApiRequest) {
    const session = await getSession({ req });

    if (!session) {
        console.log(
            `User with IP ${requestIp.getClientIp(req)} is not authenticated`
        );

        return null;
    } else {
        // console.log(`User with email ${session.user.email} is authenticated`);

        return session;
    }
}
