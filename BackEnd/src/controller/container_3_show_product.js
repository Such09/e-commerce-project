import { Kurti } from "../moduls/container_3_moduls/kurti_list.js";

const kurtiProduct = async (req, res) => {
    try {
        const { id } = req.params

        const data = await Kurti.findById(id);

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
    kurtiProduct
}