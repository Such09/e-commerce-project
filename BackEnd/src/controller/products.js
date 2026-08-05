import { Product } from "../moduls/product.js";

export const productData = async (req, res) => {
    try {
        const { items } = req.query
        
        const data = await Product.find({category: items});

        if (!data) {
            return res.status(400).json({
                message: "data is not fetch",
            })
        }
        
        return res.status(200).json({
            message: "data is fetch successfully.",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: "data is not fetch",
            error
        })
    }
}