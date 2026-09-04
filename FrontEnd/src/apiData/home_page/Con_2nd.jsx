import { useDispatch } from 'react-redux'
import { collection_2 } from '../../reduxStore/home_page/con_2nd_slicer'
import axios from 'axios'
import { useEffect } from 'react'

const Con_2nd = () => {
    const dispatch = useDispatch()

    const data = async () => {
        try {
            const res = await axios.get(`https://e-commerce-project-2-72zj.onrender.com/ecommerce/v1/second_con`)
            dispatch(collection_2(res.data.data))

        } catch (error) {
           console.log('error is: ', error.response.data);            
        }
    }

    useEffect(() => {
        data()
    })

  return (
    <div></div>
  )
}

export default Con_2nd