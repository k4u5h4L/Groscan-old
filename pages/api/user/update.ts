import { uploadImage } from "@/utils/imageUtils";
import { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm } from "formidable";
import os from "os";
import checkAuth from "@/middlewares/auth";
import prisma from "@/prisma/client";
import { UploadApiResponse } from "cloudinary";
import { User } from "@prisma/client";

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
            }

            const { username, phone, email, imageUrl, oldUsername, oldEmail } =
                JSON.parse(`${fields.fields}`);

            let image: UploadApiResponse;

            if (!imageUrl) {
                console.log("file path: ", files.file.filepath);
                image = await uploadImage(files.file.filepath);
                console.log(
                    `Image uploaded for email ${session.user.email}, ${image.secure_url}`
                );
            }

            let updateUser: User;

            if (!imageUrl) {
                updateUser = await prisma.user.update({
                    where: {
                        email: session.user.email,
                    },
                    data: {
                        name: username,
                        phone: phone,
                        image: image?.secure_url,
                        email: email,
                    },
                });
            } else {
                updateUser = await prisma.user.update({
                    where: {
                        email: session.user.email,
                    },
                    data: {
                        name: username ?? oldUsername,
                        phone: phone ?? "**********",
                        email: email ?? oldEmail,
                        image: imageUrl ?? "/images/user-profile.svg",
                    },
                });
            }

            console.log(`Updated user data: `, updateUser);

            res.status(200).json({
                message: "User successfully created and updated with new data.",
            });
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
