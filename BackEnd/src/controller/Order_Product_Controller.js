import { User } from "../moduls/user_modul.js";
import { Product } from "../moduls/product.js";
import jwt from "jsonwebtoken";
import apiError from "../utility/apiError.js";
import { asyncHandler } from "../utility/asyncHandler.js";

export const orderInfo = asyncHandler(async (req, res) => {
    const { product_id } = req.body
    const refreshToken = req.cookies?.refreshToken

    // Cheach Product id and Refresh token
    if (!product_id) throw new apiError(400, "Plese select product.")
    if (!refreshToken) throw new apiError(401, "refresh token is expire")

    // Verify refreshToken
    const info = jwt.verify(refreshToken, `${process.env.JWT_REFRESH_SCREATE}`);

    // Find user on refresh token detail
    const user = await User.findById({ _id: info.id })

    if (!user) throw new apiError(400, "user is not found")

    // add order  &  save user
    user.order.push(product_id);
    await user.save();

    return res.status(200).json({
        message: "product add in list"
    })
});

export const saveAddress = asyncHandler(async (req, res) => {
    const { name, phone, pincode, state, city, dist, house, road } = req.body
    const refreshToken = req.cookies?.refreshToken

    // Cheach Product id and Refresh token
    if (!name || !phone || !city) throw new apiError(400, "all feild required.")
    if (!refreshToken) throw new apiError(401, "refresh token is expire")

    // Verify refreshToken
    const info = jwt.verify(refreshToken, `${process.env.JWT_REFRESH_SCREATE}`);

    // Find user on refresh token detail
    const user = await User.findById({ _id: info.id })

    if (!user) throw new apiError(400, "user is not found")

    // add address  &  save user
    user.address.name = name
    user.address.phone = phone
    user.address.pincode = pincode
    user.address.state = state
    user.address.city = city
    user.address.dist = dist
    user.address.house = house
    user.address.road = road

    await user.save();

    return res.status(200).json({
        message: "address is add succussfully"
    })

});

export const getData = asyncHandler(async (req, res) => {
    const { id } = req.params
    const refreshToken = req.cookies?.refreshToken

    // Cheach Product id and Refresh token
    if (!id) throw new apiError(400, "provide product details")
    if (!refreshToken) throw new apiError(401, "refresh token is expire")

    // Verify refreshToken
    const info = jwt.verify(refreshToken, `${process.env.JWT_REFRESH_SCREATE}`);

    // Find user on refresh token detail
    const user = await User.findById({ _id: info.id })

    if (!user) throw new apiError(400, "user is not found")

    // find product
    const product = await Product.findById({ _id: id })

    if (!product) throw new apiError(400, "Product is not find")

    return res.status(200).json({
        message: "data is fectch successfully",
        product: product,
        user_data: user.address,
    })
});

export const userOrders = asyncHandler(async (req, res) => {
    const refreshToken = req.cookies?.refreshToken

    // Cheach Product id and Refresh token
    if (!refreshToken) throw new apiError(401, "refresh token is expire")

    // Verify refreshToken
    const info = jwt.verify(refreshToken, `${process.env.JWT_REFRESH_SCREATE}`);

    // Find user on refresh token detail
    const user = await User.findById({ _id: info.id })

    if (!user) throw new apiError(400, "user is not found")
    
    // User order product
    let orders = await Product.find({
        _id: { $in: user.order }
    })

    return res.status(200).json({
        message: "data is fectch successfully",
        data: orders
    })
});