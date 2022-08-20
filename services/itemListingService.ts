import prisma from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-auth";

export default async function itemListingService(
    req: NextApiRequest,
    res: NextApiResponse,
    session: Session
) {
    console.log("Hit items listing");

    try {
        const user = await prisma.user.findUnique({
            where: {
                email: session.user.email,
            },
        });
        const items = await prisma.grocery.findMany({
            where: {
                userId: user.id,
            },
            select: {
                id: true,
                barcode: true,
                name: true,
                desc: true,
                status: true,
                image: true,
                manufactured: true,
                expiry: true,
            },
        });

        console.log(
            `Found ${items.length} groceries for user ${session.user.email}`
        );

        res.status(200).json(items);
    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: "Error in fetching groceries",
            error: err.message,
        });
    }
}
