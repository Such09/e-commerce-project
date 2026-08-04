import { asyncHandler } from "../../utility/asyncHandler.js";
import apiError from "../../utility/apiError.js";
import apiResponse from "../../utility/apiResponse.js";
import { User } from "../../moduls/user_modul.js";

export const profile = asyncHandler(async (req, res) => {
    const { id } = req.user

    const user = await User.findById({ _id: id }).select("-password -refreshToken -createdAt -updatedAt")

    if (!user) throw new apiError(401, "user is not exists.")

    return res.status(200).json(new apiResponse(
        200,
        "data is fetch successfully.",
        user
    ))
})