import { uploadImage } from "@/utils/imageUtils";
import { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm } from "formidable";
import os from "os";
import checkAuth from "@/middlewares/auth";
import prisma from "@/prisma/client";
import { UploadApiResponse } from "cloudinary";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await checkAuth(req);

    if (!session) {
        res.status(401).json({
            message: "Unauthenticated. Please go to '/login' URI and sign in.",
        });
    }

    if (req.method === "POST") {
        // Process a POST request
        console.log("Image uploading...");

        const form = new IncomingForm({
            keepExtensions: true,
            uploadDir: os.tmpdir(),
            // filename(name, ext, part, form) {
            //     return ``
            // },
        });

        form.parse(req, async (err, fields, files: any) => {
            if (err) {
                console.error(err);

                res.status(500).json({
                    error: `Something went wrong on our end!`,
                });

                return;
            }

            const { username, phone } = JSON.parse(`${fields.fields}`);

            const p = files?.file?.filepath ?? "NONE";

            if (p == "NONE") {
                const updateUser = await prisma.user.update({
                    where: {
                        email: session.user.email,
                    },
                    data: {
                        name: username,
                        phone: phone,
                    },
                });

                console.log(`Updated user data: `, updateUser);

                res.status(200).json({
                    message:
                        "User successfully created and updated with new data.",
                });
            } else {
                console.log("file path: ", files.file.filepath);

                const image = await uploadImage(files.file.filepath);

                console.log(
                    `Image uploaded for email ${session.user.email}, ${image.secure_url}`
                );

                const updateUser = await prisma.user.update({
                    where: {
                        email: session.user.email,
                    },
                    data: {
                        name: username,
                        phone: phone,
                        image: image.secure_url,
                    },
                });

                console.log(`Updated user data: `, updateUser);

                res.status(200).json({
                    message:
                        "User successfully created and updated with new data with new image.",
                });
            }
        });
    } else {
        // Handle any other HTTP method
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    }
};

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};
