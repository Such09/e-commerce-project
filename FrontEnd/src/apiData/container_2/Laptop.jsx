import axios from 'axios'
import { useDispatch } from 'react-redux'
import { laptopCollection } from '../../reduxStore/container_2/laptop_slicer.js'
import { useEffect } from 'react'

const Laptop = () => {
    const dispatch = useDispatch()

    const data = async() => {
        try {
            const response = await axios.get(`http://localhost:4000/ecommerce/v1/laptop`)
            // console.log('laptops: ', response.data);

            dispatch(laptopCollection(response.data.data))                        
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

export default Laptop