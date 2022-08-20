import prisma from "@/prisma/client";
import { Status } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-auth";

export default async function searchService(
    req: NextApiRequest,
    res: NextApiResponse,
    session: Session
) {
    console.log("Hit item search");

    try {
        const searchQuery = `${req.query.q}`;

        if (!req.query.q) {
            throw new Error(
                "No Search query sent. Please send a search query like '?q=<search-query>'"
            );
        }

        const user = await prisma.user.findUnique({
            where: {
                email: session.user.email,
            },
        });

        const items = await prisma.grocery.findMany({
            where: {
                AND: [
                    {
                        userId: user.id,
                    },
                    {
                        OR: [
                            {
                                name: {
                                    contains: searchQuery,
                                    mode: "insensitive",
                                },
                            },
                            {
                                desc: {
                                    contains: searchQuery,
                                    mode: "insensitive",
                                },
                            },
                            {
                                status: Status[searchQuery.toUpperCase()],
                            },
                            {
                                categories: {
                                    some: {
                                        name: {
                                            contains: searchQuery,
                                            mode: "insensitive",
                                        },
                                        desc: {
                                            contains: searchQuery,
                                            mode: "insensitive",
                                        },
                                    },
                                },
                            },
                        ],
                    },
                ],
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
