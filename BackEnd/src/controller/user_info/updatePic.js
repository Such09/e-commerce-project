import { User } from "../../moduls/user_modul.js";
import { uploadOnCloudinary } from "../../config/cloudinary.js";
import jwt from "jsonwebtoken";

export const updatePic = async (req, res) => {
    try {
        const pic = req.file?.path

        if (!pic) {
            return res.status(401).json({
                message: "picture is not find."
            });
        }

        const refreshToken = req.cookies.refreshToken

        if (!refreshToken) {
            return res.status(401).json({
                message: "cookie is expire."
            });
        }
        
        // Verify refreshToke.
        const info = jwt.verify(refreshToken, `${process.env.JWT_REFRESH_SCREATE}`)

        const user = await User.findById({ _id: info.id })

        // If user is not found in DB.
        if (!user) {
            return res.status(401).json({
                message: "user not find."
            });
        }

        // Upload picture on cloudinary.
        const result = await uploadOnCloudinary(pic);

        // If photo is not Upload or some error
        if (!result) {
            return res.status(401).json({
                message: "picture is not upload on cloudinary."
            });
        }

        console.log("cloudinary result: ", result)
        console.log("user1: ", user);
        // Picture is save successfully on cloudinary and Save picture in database
        user.picture = result.secure_url;
        await user.save();

        console.log("user: ", user);

        return res.status(200).json({
            message: "profile picture updated successfully.",
            picture: user.picture
        })

    } catch (error) {
        return res.status(500).json({
            message: "picture is not updated.",
            error
        })
    }
}
