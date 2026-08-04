import { Shoes } from "../moduls/container_1_moduls/shoes_list.js";
import { Watch } from "../moduls/container_1_moduls/watch_list.js";
import { Belt } from "../moduls/container_1_moduls/belt_list.js";
import { Book } from "../moduls/container_1_moduls/book_list.js";
import { Men_shirts } from "../moduls/container_1_moduls/shirt_list.js";
import { Perfume } from "../moduls/container_1_moduls/perfume_list.js";
import { Mobile } from "../moduls/container_2_moduls/mobile_list.js";
import { Laptop } from "../moduls/container_2_moduls/laptop_list.js";
import { Tablet } from "../moduls/container_2_moduls/tablet_list.js";
import { Kurti } from "../moduls/container_3_moduls/kurti_list.js";

const searchData = async (req, res) => {
    try {
        const { search } = req.query

        if (!search) {
            return res.status(500).json({
                message: "Please enter product name."
            });
        }

        if (search === "shoes" || search === "Shoes") {
            const data = await Shoes.find()

            return res.status(200).json({
                message: "products is finds.",
                data
            });
        } else if (search === "watch" || search === "Watch") {
            const data = await Watch.find()

            return res.status(200).json({
                message: "products is finds.",
                data
            });
        }else if (search === "belt" || search === "Belt") {
            const data = await Belt.find()

            return res.status(200).json({
                message: "products is finds.",
                data
            });
        }else if (search === "book" || search === "Book") {
            const data = await Book.find()

            return res.status(200).json({
                message: "products is finds.",
                data
            });
        }else if (search === "shirt" || search === "Shirt") {
            const data = await Men_shirts.find()

            return res.status(200).json({
                message: "products is finds.",
                data
            });
        }else if (search === "perfume" || search === "Perfume") {
            const data = await Perfume.find()

            return res.status(200).json({
                message: "products is finds.",
                data
            });
        }else if (search === "mobile" || search === "Mobile") {
            const data = await Mobile.find()

            return res.status(200).json({
                message: "products is finds.",
                data
            });
        }else if (search === "laptop" || search === "Laptop") {
            const data = await Laptop.find()

            return res.status(200).json({
                message: "products is finds.",
                data
            });
        }else if (search === "tablet" || search === "tablet") {
            const data = await Tablet.find()

            return res.status(200).json({
                message: "products is finds.",
                data
            });
        }else if (search === "kurti" || search === "kurti") {
            const data = await Kurti.find()

            return res.status(200).json({
                message: "products is finds.",
                data
            });
        }else{
            return res.status(200).json({
                message: "Please enter valid product name."
            });
        }

    } catch (error) {
        return res.status(500).json({
            message: "product is not search, something went wrong.",
            error
        })
    }
}

export {
    searchData
}