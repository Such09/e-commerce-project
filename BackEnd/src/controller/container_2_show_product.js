import { Mobile } from "../moduls/container_2_moduls/mobile_list.js";
import { Laptop } from "../moduls/container_2_moduls/laptop_list.js";
import { Tablet } from "../moduls/container_2_moduls/tablet_list.js";

const mobileProduct = async (req, res) => {
    try {
        const { id } = req.params

        const data = await Mobile.findById(id);

        if (!data) {
            return res.status(200).json({
                message: "data is empty fetch.",
            })
        }

        return res.status(200).json({
            message: "data is fetch successfully.",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: "data is not fetch.",
            error
        })
    }
}

const laptopProduct = async (req, res) => {
    try {
        const { id } = req.params

        const data = await Laptop.findById(id);

        if (!data) {
            return res.status(200).json({
                message: "data is empty fetch.",
            })
        }

        return res.status(200).json({
            message: "data is fetch successfully.",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: "data is not fetch.",
            error
        })
    }
}

const tabletProduct = async (req, res) => {
    try {
        const { id } = req.params

        const data = await Tablet.findById(id);

        if (!data) {
            return res.status(200).json({
                message: "data is empty fetch.",
            })
        }

        return res.status(200).json({
            message: "data is fetch successfully.",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: "data is not fetch.",
            error
        })
    }
}

export {
    mobileProduct,
    laptopProduct,
    tabletProduct
}