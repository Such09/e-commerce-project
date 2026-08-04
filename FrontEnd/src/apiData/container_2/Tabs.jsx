import axios from 'axios'
import { useDispatch } from 'react-redux'
import { tabletCollection } from '../../reduxStore/container_2/tablet_slicer.js'
import { useEffect } from 'react'

const Tabs = () => {
    const dispatch = useDispatch()

    const data = async() => {
        try {
            const response = await axios.get(`http://localhost:4000/ecommerce/v1/tablet`)
            // console.log(response.data);

            dispatch(tabletCollection(response.data.data))                        
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

export default Tabs