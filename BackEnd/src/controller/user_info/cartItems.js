import { User } from "../../moduls/user_modul.js";
import { Product } from "../../moduls/product.js";
import jwt from 'jsonwebtoken'
import { asyncHandler } from "../../utility/asyncHandler.js";
import apiError from "../../utility/apiError.js";
import apiResponse from "../../utility/apiResponse.js";

export const cartItems = asyncHandler(async (req, res) => {
    // access token in browser side cookie
    const refreshToken = req.cookies.refreshToken    

    if(!refreshToken) throw new apiError(401, "cookie are expire.")

    // Verify Token is valid or not
    const info = jwt.verify(refreshToken, `${process.env.JWT_REFRESH_SCREATE}`)

    // Find user on token detail
    const user = await User.findById({_id: info.id});

    if(!user) throw new apiError(400, "user is not found.")

    // Find all Cart product
    let items = await Product.find({
       _id: { $in : user.cart }
    })

    return res.status(200).json(new apiResponse(
        200,
        "get data successfully.",
        items
    ))
})