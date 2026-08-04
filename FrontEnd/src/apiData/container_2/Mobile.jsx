import axios from 'axios'
import { useDispatch } from 'react-redux'
import { mobileCollection } from'../../reduxStore/container_2/mobile_slicer.js'
import { useEffect } from 'react'

const Mobile = () => {
    const dispatch = useDispatch()

    const data = async() => {
        try {
            const response = await axios.get(`http://localhost:4000/ecommerce/v1/mobile`)
            // console.log(response.data);

            dispatch(mobileCollection(response.data.data))                        
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

export default Mobile