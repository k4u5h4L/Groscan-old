import { uploadImage } from "@/utils/imageUtils";
import { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";
import { IncomingForm } from "formidable";

// const upload = multer({
//     storage: multer.diskStorage({
//         destination: "./public/uploads",
//         filename: (req, file, cb) => cb(null, file.originalname),
//     }),
// });

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        // Process a POST request
        console.log("Image uploading...");

        // const image = await uploadImage("");

        console.log("Image uploaded");

        const form = new IncomingForm({
            keepExtensions: true,
            // uploadDir: "/tmp",
            // filename(name, ext, part, form) {
            //     return ``
            // },
        });

        form.parse(req, (err, fields, files: any) => {
            if (err) {
                console.error(err);
            }
            console.log(files);
            // console.log(files.file.filepath);

            res.status(200).json(files);
        });

        // res.status(200).json({ message: "Uploading" });
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
