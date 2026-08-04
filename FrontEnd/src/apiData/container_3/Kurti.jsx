import axios from 'axios'
import { useDispatch } from 'react-redux'
import { kurtiCollection } from '../../reduxStore/container_3/kurti_slicer.js'
import { useEffect } from 'react'

const Kurti = () => {
    const dispatch = useDispatch()

    const data = async() => {
        try {
            const response = await axios.get(`http://localhost:4000/ecommerce/v1/kurti`)
            // console.log('kurti: ',response.data);

            dispatch(kurtiCollection(response.data.data))                        
        } catch (error) {
            console.log('kurti data is not fetch', error);
        }
    }

    useEffect(() => {
        data();
    },[])

  return (
    <div></div>
  )
}

export default Kurti