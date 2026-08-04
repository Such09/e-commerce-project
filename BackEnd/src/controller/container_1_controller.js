import { asyncHandler } from "../utility/asyncHandler.js";
import apiResponse from "../utility/apiResponse.js";
import apiError from "../utility/apiError.js";
import { Shoes } from "../moduls/container_1_moduls/shoes_list.js";
import { Watch } from "../moduls/container_1_moduls/watch_list.js";
import { Belt } from "../moduls/container_1_moduls/belt_list.js";
import { Book } from "../moduls/container_1_moduls/book_list.js";
import { Men_shirts } from "../moduls/container_1_moduls/shirt_list.js";
import { Perfume } from "../moduls/container_1_moduls/perfume_list.js";

const shoseCon = asyncHandler(async (req, res) => {
    const data = await Shoes.find();

    if (!data || data.length === 0) {
        throw new apiError(404, "data is not fetch successfully.");
    }

    return res.status(200).json(new apiResponse(
        200,
        "data fetch successfully.",
        data
    ))
});

const watchCon = asyncHandler(async (req, res) => {
    const data = await Watch.find();

    if (!data || data.length === 0) {
        throw new apiError(404, "data is not fetch successfully.");
    }

    return res.status(200).json(new apiResponse(
        200,
        "data fetch successfully.",
        data
    ))
});

const beltCon = asyncHandler(async (req, res) => {
    const data = await Belt.find();

    if (!data || data.length === 0) {
        throw new apiError(404, "data is not fetch successfully.");
    }

    return res.status(200).json(new apiResponse(
        200,
        "data fetch successfully.",
        data
    ))
});

const bookCon = asyncHandler(async (req, res) => {
    const data = await Book.find();

    if (!data || data.length === 0) {
        throw new apiError(404, "data is not fetch successfully.");
    }

    return res.status(200).json(new apiResponse(
        200,
        "data fetch successfully.",
        data
    ))
});

const men_shirtCon = asyncHandler(async (req, res) => {
    const data = await Men_shirts.find();

    if (!data || data.length === 0) {
        throw new apiError(404, "data is not fetch successfully.");
    }

    return res.status(200).json(new apiResponse(
        200,
        "data fetch successfully.",
        data
    ))
});

const perfumeCon = asyncHandler(async (req, res) => {
    const data = await Perfume.find();

    if (!data || data.length === 0) {
        throw new apiError(404, "data is not fetch successfully.");
    }

    return res.status(200).json(new apiResponse(
        200,
        "data fetch successfully.",
        data
    ))
});

export {
    shoseCon,
    watchCon,
    beltCon,
    bookCon,
    men_shirtCon,
    perfumeCon
}