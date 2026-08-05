import { Product } from "../moduls/product.js"
import apiError from "../utility/apiError.js";
import apiResponse from "../utility/apiResponse.js";
import { asyncHandler } from "../utility/asyncHandler.js";

export const searchData = asyncHandler(async (req, res) => {
    const { search } = req.query

    if (!search) throw new apiError(401, "query is empty.")

    const data = await Product.find({
        category: { $regex: search, $options: "i" }
    })

    if (!search) throw new apiError(401, "Invalid query.")

    return res.status(200).json(new apiResponse(
        200,
        "Products fetch successtully.",
        data
    ));
})