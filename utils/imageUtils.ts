import { UploadApiResponse, v2 as cloudinary } from "cloudinary";

const uploadImage = async (imagePath: string): Promise<UploadApiResponse> => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
        secure: true,
    });
    // Use the uploaded file's name as the asset's public ID and
    // allow overwriting the asset with new versions
    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
    };

    try {
        // Upload the image
        const result = await cloudinary.uploader.upload(imagePath, options);
        console.log(result);

        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export { uploadImage };
