import axios from 'axios'
import { useDispatch } from 'react-redux'
import { perfumeCollection } from '../../reduxStore/container_1/perfume_slicer.js'
import { useEffect } from 'react'

const Perfume = () => {
    const dispatch = useDispatch()

    const data = async() => {
        try {
            const response = await axios.get(`http://localhost:4000/ecommerce/v1/perfume`)
            // console.log(response.data);

            dispatch(perfumeCollection(response.data.data))                        
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

export default Perfume