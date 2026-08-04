import { asyncHandler } from "../utility/asyncHandler.js";
import apiResponse from "../utility/apiResponse.js";
import apiError from "../utility/apiError.js";
import { Kurti } from "../moduls/container_3_moduls/kurti_list.js";

const kurtiCon = asyncHandler(async (req, res) => {
    const data = await Kurti.find();

    if (!data || data.length === 0) throw new apiError(404, "data is not found.")

    return res.status(200).json(
        new apiResponse(
            200, 
            "data fetch successfully.",
            data
        )
    )
})

export {
    kurtiCon
}