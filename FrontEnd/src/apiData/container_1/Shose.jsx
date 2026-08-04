import { useDispatch } from 'react-redux'
import { shoseCollection } from '../../reduxStore/container_1/con_1_shose_slicer.js'
import axios from 'axios'
import { useEffect } from 'react'

const Shose = () => {
    const dispatch = useDispatch()

    const data = async () => {
        try {
            const res = await axios.get(`http://localhost:4000/ecommerce/v1/shoes`)
            // console.log('shes data is: ', res.data);
            
            dispatch(shoseCollection(res.data.data))
        } catch (error) {
            console.log('error is: ', error.response.data.message);  
        }
    }

    useEffect(() => {
        data();
    }, [])

  return (
    <div></div>
  )
}

export default Shose