import prisma from "@/prisma/client";
import { checkMongoID } from "@/utils/commonUtils";
import { NotFoundError } from "@prisma/client/runtime";
import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-auth";

export default async function detailService(
    req: NextApiRequest,
    res: NextApiResponse,
    session: Session
) {
    console.log("Hit detail");

    try {
        const id = `${req.query.id}`;

        if (!req.query.id) {
            throw new Error("ID pathname empty");
        } else if (!checkMongoID(id)) {
            throw new Error("ID is not valid. Please input a correct ID.");
        }

        const item = await prisma.grocery.findFirstOrThrow({
            where: {
                id: id,
            },
        });

        console.log(
            `Found item with ID ${item.id} for user ${session.user.email}`
        );

        res.status(200).json(item);
    } catch (err) {
        console.error(err);

        if (err instanceof NotFoundError) {
            res.status(404).json({
                message: "No item found with that ID",
                error: err.message,
            });
        } else {
            res.status(500).json({
                message: "Error in fetching details of item",
                error: err.message,
            });
        }
    }
}
