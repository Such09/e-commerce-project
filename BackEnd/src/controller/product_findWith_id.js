import { Product } from "../moduls/product.js";

export const findProduct = async (req, res) => {
    try {
        const { id } = req.params        

        if (!id) {
            return res.status(401).json({
                message: "Id is undefined or empty."
            });
        }

        const item = await Product.findById({ _id: id })

        if (!item) {
            return res.status(401).json({
                message: "product is not fetch."
            });
        }

        return res.status(200).json({
            message: "product is fetch successfully.",
            data: item
        });

    } catch (error) {
        return res.status(500).json({
            message: "product is not fetch",
            error
        })
    }
}