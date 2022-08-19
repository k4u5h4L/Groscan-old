import prisma from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-auth";

export default async function categoryListingService(
    req: NextApiRequest,
    res: NextApiResponse,
    session: Session
) {
    console.log("Hit category listing");

    try {
        const user = await prisma.user.findUnique({
            where: {
                email: session.user.email,
            },
        });
        const categories = await prisma.category.findMany({
            where: {
                userId: user.id,
            },
            select: {
                user: {
                    select: {
                        email: true,
                        name: true,
                    },
                },
                groceryIDs: true,
                id: true,
                name: true,
                icon: true,
                desc: true,
            },
        });

        console.log(
            `Found ${categories.length} categories for user ${session.user.email}`
        );

        res.status(200).json(categories);
    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: "Error in fetching categories",
            error: err.message,
        });
    }
}
