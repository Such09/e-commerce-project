import axios from 'axios'
import { useDispatch } from 'react-redux'
import { beltCollection } from '../../reduxStore/container_1/belt_slicer.js'
import { useEffect } from 'react'

const Belt = () => {
    const dispatch = useDispatch()

    const data = async() => {
        try {
            const response = await axios.get(`http://localhost:4000/ecommerce/v1/belt`)
            // console.log(response.data);

            dispatch(beltCollection(response.data.data))                        
        } catch (error) {
            console.log('data is not fetch', error);
        }
    }

    useEffect(() => {
        data();
    },[])
  return (
    <div></div>
  )
}

export default Belt