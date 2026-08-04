import { asyncHandler } from "../utility/asyncHandler.js";
import apiResponse from "../utility/apiResponse.js";
import apiError from "../utility/apiError.js";
import { Mobile } from "../moduls/container_2_moduls/mobile_list.js";
import { Laptop } from "../moduls/container_2_moduls/laptop_list.js";
import { Tablet } from "../moduls/container_2_moduls/tablet_list.js";

const mobileCon = asyncHandler(async (req, res) => {
    const data = await Mobile.find();

    if (!data || data.length === 0) throw new apiError(404, "data is not found.")

    return res.status(200).json(
        new apiResponse(
            200,
            "data is fetch successfully.",
            data
        )
    )
})

const laptopCon = asyncHandler(async (req, res) => {
    const data = await Laptop.find();

    if (!data || data.length === 0) throw new apiError(404, "data is not found.")

    return res.status(200).json(
        new apiResponse(
            200,
            "data is fetch successfully.",
            data
        )
    )
})

const tabletCon = asyncHandler(async (req, res) => {
    const data = await Tablet.find();

    if (!data || data.length === 0) throw new apiError(404, "data is not found.")

    return res.status(200).json(
        new apiResponse(
            200,
            "data is fetch successfully.",
            data
        )
    )
})

export {
    mobileCon,
    laptopCon,
    tabletCon
}