import { asyncHandler } from "../utility/asyncHandler.js";
import apiResponse from "../utility/apiResponse.js";
import apiError from "../utility/apiError.js";
import { First } from "../moduls/home_page_modul/1st_list.js";
import { Second } from "../moduls/home_page_modul/2nd_con.js";
import { Third } from "../moduls/home_page_modul/3rd_con.js";

// first container
const createFirst = async (req, res) => {
    const { id, url, title } = req.body;

    const data = await First.create({
        id,
        url,
        title
    })

    return res.status(200)
        .json({
            "message": 'data add successfully.',
            data
        })
}

const firstCon = asyncHandler(async (req, res) => {
    const data = await First.find();

    if (!data || data.length === 0) throw new apiError(401, "data is not found.")

    return res.status(200).json(
        new apiResponse(
            200,
            "data is fetch successfull.",
            data
        )
    )
});

// second container
const secondCon = asyncHandler(async (req, res) => {
    const data = await Second.find();

    if (!data || data.length === 0) throw new apiError(404, "data is not found.")

    return res.status(200).json(
        new apiResponse(
            200,
            "data is fetch successfull.",
            data
        )
    )
});

//third container
const thirdCon = asyncHandler(async (req, res) => {
    const data = await Third.find();

    if (!data || data.length === 0) throw new apiError(404, "data is not found.")

    return res.status(200).json(
        new apiResponse(
            200,
            "data is fetch successfull.",
            data
        )
    )
});

export {
    createFirst,
    firstCon,
    secondCon,
    thirdCon
}