import { Shoes } from '../moduls/container_1_moduls/shoes_list.js';
import { Belt } from '../moduls/container_1_moduls/belt_list.js';
import { Watch } from '../moduls/container_1_moduls/watch_list.js';
import { Book } from '../moduls/container_1_moduls/book_list.js';
import { Perfume } from '../moduls/container_1_moduls/perfume_list.js';
import { Men_shirts } from '../moduls/container_1_moduls/shirt_list.js';

const shoe_product = async (req, res) => {
    try {
        const { id } = req.params

        const shose = await Shoes.findById(id);

        if (!shose) {
            return res.status(200).json({
                message: "shose data is empty.",
            })
        }

        return res.status(200).json({
            message: "shose is find.",
            data: shose
        })
    } catch (error) {
        return res.status(500).json({
            message: "shoe details is not found.",
            error
        })
    }
}

const belt_product = async (req, res) => {
    try {
        const { id } = req.params

        const data = await Belt.findById(id)

        if (!data) {
            return res.status(200).json({
                message: "data is empty",
            })
        }

        return res.status(200).json({
            message: "data is fetch successfully.",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: "data is not fetch successfully.",
            error
        })
    }
}

const watch_product = async (req, res) => {
    try {
        const { id } = req.params

        const data = await Watch.findById(id)

        if (!data) {
            return res.status(200).json({
                message: "data is empty",
            })
        }

        return res.status(200).json({
            message: "data is fetch successfully.",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: "data is not fetch successfully.",
            error
        })
    }
}

const book_product = async (req, res) => {
    try {
        const { id } = req.params

        const data = await Book.findById(id)

        if (!data) {
            return res.status(200).json({
                message: "data is empty",
            })
        }

        return res.status(200).json({
            message: "data is fetch successfully.",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: "data is not fetch successfully.",
            error
        })
    }
}

const perfume_product = async (req, res) => {
    try {
        const { id } = req.params        

        const data = await Perfume.findById(id)

        if (!data) {
            return res.status(200).json({
                message: "data is empty",
            })
        }

        return res.status(200).json({
            message: "data is fetch successfully.",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: "data is not fetch successfully.",
            error
        })
    }
}

const shirt_product = async (req, res) => {
    try {
        const { id } = req.params

        const data = await Men_shirts.findById(id)

        if (!data) {
            return res.status(200).json({
                message: "data is empty",
            })
        }

        return res.status(200).json({
            message: "data is fetch successfully.",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: "data is not fetch successfully.",
            error
        })
    }
}

export {
    shoe_product,
    belt_product,
    watch_product,
    book_product,
    perfume_product,
    shirt_product
}