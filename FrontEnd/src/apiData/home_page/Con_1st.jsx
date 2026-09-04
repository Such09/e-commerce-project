import { useDispatch } from "react-redux"
import { collection_1 } from "../../reduxStore/home_page/con_1st_slicer.js"
import axios from 'axios'
import { useEffect } from "react"

const Con_1st = () => {
    const dispatch = useDispatch()

    const getData = async () => {
        try {
            const response = await axios.get(`https://e-commerce-project-2-72zj.onrender.com/ecommerce/v1/firstcon`)
            dispatch(collection_1(response.data.data))
        } catch (error) {
            console.log('error is: ', error.response.data);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div></div>
    )
}

export default Con_1st