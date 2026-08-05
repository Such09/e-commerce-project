import axios from 'axios'
import { useDispatch } from 'react-redux'
import { bookCollection } from '../../reduxStore/container_1/book_slicer.js'
import { useEffect } from 'react'

const Book = () => {
    const dispatch = useDispatch()

    const data = async() => {
        try {
            const response = await axios.get(`http://localhost:4000/ecommerce/v1/book`)
            // console.log(response.data);

            dispatch(bookCollection(response.data.data))                        
        } catch (error) {
            console.log('data is not fetch', error);
        }
    }

    useEffect(() => {
        // data();
    },[])
  return (
    <div></div>
  )
}

export default Book