import { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { successtoast } from "../../utils/toast.js"
import { useNavigate } from 'react-router-dom';

const Laptop_card = () => {
    const navigate = useNavigate()
    const [getData, setGetData] = useState({});
    const [quntity, setQuntity] = useState(1);
    const [loading, setLoading] = useState(true);
    const [isAddCart, setIsAddCart] = useState(true);
    const { id } = useParams()

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/ecommerce/v1/product_id/${id}`)
            setGetData(response.data.data)
            // console.log(response.data);
        } catch (error) {
            console.log("data is not fetch:", error);
        } finally {
            setLoading(false)
        }
    }

    const totalPrice = (Number(getData.discountedPrice || 0) * quntity)

    useEffect(() => {
        fetchProduct();
    }, [id])

    // add & removeProduct in Cart
    const addToCart = async (id) => {
        try {
            if (isAddCart) {
                const response = await axios.post(`http://localhost:4000/ecommerce/v1/add_cart`, { id }, { withCredentials: true })
                successtoast(response.data.message)

            } else {
                const response = await axios.put(`http://localhost:4000/ecommerce/v1/remove_cart`, { id }, { withCredentials: true })
                successtoast(response.data.message)
            }
        } catch (error) {
            console.log("error: ", error.response.data)
        } finally {
            setIsAddCart(!isAddCart)
        }
    }

    // plase order 
    const Order = async (product_id) => {
        try {
            let data = { product_id }

            await axios.patch(`http://localhost:4000/ecommerce/v1/order`, data, { withCredentials: true })

            navigate(`/order/${product_id}`);
        } catch (error) {
            console.log("order error: ", error)
        }
    }

    return (
        <div className='h-screen w-full p-16'>
            {loading
                ? <h1>Loading.....</h1>
                :
                <div key={getData._id} className='h-full w-full flex gap-10'>
                    {/* Image container... */}
                    <div className='h-4/5 w-1/3 border-2 border-gray-400/35 rounded'>
                        <img src={getData.image} alt=""
                            className='h-full w-full object-contain rounded' />
                    </div>

                    {/* Product information */}
                    <div className='h-full w-1/2 px-4 flex flex-col gap-5'>
                        <div className='w-full p-3 flex flex-col gap-2 border-2 border-gray-400/35 rounded'>
                            <h1 className='text-lg font-medium'> {getData.brand} </h1>
                            <h1 className='font-medium'> {getData.name} </h1>

                            <p className='font-medium text-gray-500'>{getData.description} </p>
                            {/* <p className='font-medium text-gray-500'>Display: {getData.display} </p>
                            <p className='font-medium text-gray-500'>Battery: {getData.battery} </p>
                            <p className='font-medium text-gray-500'>storage: {getData.storage} </p> */}

                            <div className='flex gap-3 items-center'>
                                <h1 className='text-2xl font-medium'> ₹{getData.discountedPrice} </h1>
                                <h1 className='line-through text-gray-500'> ₹{getData.price} </h1>
                                <h1 className='font-medium text-green-800'> {getData.todayOff} </h1>
                            </div>

                            <h1> {getData.tag} </h1>
                        </div>

                        <div className='w-full px-3 py-4 flex flex-col gap-3 border-2 border-gray-400/35 rounded'>
                            {/* Select the quntity of product */}
                            <div className='pr-28 flex flex-col gap-2'>
                                <h1 className='text-lg font-bold'>Select quntity:</h1>
                                <div className='py-1 px-5 w-full border border-gray-500 rounded-lg flex justify-between items-center gap-2'>
                                    <h1 className='font-medium'> Quantity: {quntity}</h1>

                                    <div className='flex gap-1.5 items-center'>
                                        <button onClick={() => (quntity > 1 ? setQuntity(quntity - 1) : setQuntity(1))}
                                            className='bg-gray-100 border-2 border-gray-500 px-2.5 text-center py-0 rounded font-medium text-2xl'> - </button>

                                        <h1 className='text-xl font-medium'> | </h1>

                                        <button onClick={() => setQuntity(quntity + 1)}
                                            className='bg-gray-100 border-2 border-gray-500 px-2 py-0 rounded font-medium text-2xl'> + </button>
                                    </div>
                                </div>

                                <h1 className='text-lg font-bold'> Total price: {totalPrice} </h1>
                            </div>

                            <button onClick={() => addToCart(getData._id)}
                                className='h-12 w-full text-gray-600 text-lg font-medium rounded-xl bg-yellow-300 active:scale-95'>
                                {isAddCart ? <h1> Add to cart </h1> : <h1> Remove to cart </h1>}
                            </button>

                            <button onClick={() => Order(getData._id)}
                                className='h-12 w-full text-gray-600 text-lg font-medium rounded-xl bg-amber-500 active:scale-95'>
                                Buy Now
                            </button>
                        </div >
                    </div>
                </div>
            }
        </div>
    )
}

export default Laptop_card