import axios from 'axios'
import { useDispatch } from 'react-redux'
import { shirtCollection } from '../../reduxStore/container_1/shirt_slicer.js'
import { useEffect } from 'react'

const Shirt = () => {
    const dispatch = useDispatch()

    const data = async() => {
        try {
            const response = await axios.get(`http://localhost:4000/ecommerce/v1/shirt`)
            // console.log('shirt: ',response.data);

            dispatch(shirtCollection(response.data.data))                        
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

export default Shirt