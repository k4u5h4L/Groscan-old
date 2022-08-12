import { uploadImage } from "@/utils/imageUtils";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    console.log("Image uploading...");

    const image = await uploadImage("");

    console.log("Image uploaded");

    res.status(200).json({ message: image });
};
