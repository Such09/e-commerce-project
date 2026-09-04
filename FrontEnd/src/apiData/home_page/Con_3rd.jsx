import { useDispatch } from "react-redux"
import { collection_3 } from "../../reduxStore/home_page/con_3rd_slicer.js"
import axios from 'axios'
import { useEffect } from "react"

const Con_3rd = () => {
    const dispatch = useDispatch();

    const data = async () => {
        try {
            const res = await axios.get(`https://e-commerce-project-2-72zj.onrender.com/ecommerce/v1/third_con`);
            dispatch(collection_3(res.data.data))
            
        } catch (error) {
            console.log('error is: ', error.response.data);
            
        }
    }

    useEffect(() => {
        data()
    }, [])

  return (
    <div></div>
  )
}

export default Con_3rd