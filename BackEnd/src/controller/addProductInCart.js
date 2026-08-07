import { User } from "../moduls/user_modul.js";
import jwt from "jsonwebtoken";
import { asyncHandler } from "../utility/asyncHandler.js";
import apiError from "../utility/apiError.js";
import apiResponse from "../utility/apiResponse.js";

export const addProductInCart = asyncHandler(async (req, res) => {
    const { id } = req.body

    const refreshToken = req.cookies.refreshToken

    if (!id || !refreshToken) throw new apiError(400, "something went wrong.")

    const info = jwt.verify(refreshToken, `${process.env.JWT_REFRESH_SCREATE}`)

    const user = await User.findById({ _id: info.id })

    if (!user) throw new apiError(401, "user is not found.")

    // To check product (id) is exist or not
    user.cart.forEach((item) => {
        if (item === id) {
            return res.status(200).json(new apiResponse(
                200,
                "Product already exist in cart",
                user.cart
            ));
        }
    })

    // add Pruduct in user cart
    user.cart.push(id);
    await user.save();

    return res.status(200).json(new apiResponse(
        200,
        "Product added in Cart.",
        user.cart
    ));
})

export const removeCart = asyncHandler(async (req, res) => {
    const { id } = req.body

    const refreshToken = req.cookies.refreshToken

    if (!id || !refreshToken) throw new apiError(400, "something went wrong.")

    const info = jwt.verify(refreshToken, `${process.env.JWT_REFRESH_SCREATE}`)

    const user = await User.findById({ _id: info.id })

    if (!user) throw new apiError(401, "user is not found.")

    // Remove product in cart
    user.cart = user.cart.filter((item) => item !== id)
    user.save();

    return res.status(200).json(new apiResponse(
        200,
        "Product Removed in Cart.",
        user.cart
    ));
})