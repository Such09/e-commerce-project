import { useDispatch } from 'react-redux'
import { watchCollection } from '../../reduxStore/container_1/con_1_watch_slicer.js'
import axios from 'axios'
import { useEffect } from 'react'

const Watch = () => {
    const dispatch = useDispatch()
    const data = async (req, res) => {
        try {
            const res = await axios.get(`http://localhost:4000/ecommerce/v1/watch`)
            // console.log(res.data.data);

            dispatch(watchCollection(res.data.data))
        } catch (error) {
            console.log('error is: ', error);    
        }
    }

    useEffect(() => {
        data();
    }, [])
  return (
    <div></div>
  )
}

export default Watch