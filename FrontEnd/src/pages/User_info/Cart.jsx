import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { successtoast } from '../../utils/toast.js';

const Cart = () => {
    const navigate = useNavigate();
    const [carts, setCarts] = useState([]);

    // Fetch cart-Data
    const cartData = async () => {
        try {
            const response = await axios.get(`https://e-commerce-project-2-72zj.onrender.com/ecommerce/v1/cart_item`, { withCredentials: true })
            // console.log("res is: ", response);
            setCarts(response.data.data)
        } catch (error) {
            console.log("error: ", error.response)
            if (error.response.status === 401) navigate('/')
        }
    }

    // Remove Cart form Cart collection.
    const removeCart = async (id) => {
        try {
            const response = await axios.put(`https://e-commerce-project-2-72zj.onrender.com/ecommerce/v1/remove_cart`, { id }, { withCredentials: true })
            successtoast(response.data.message)

        } catch (error) {
            console.log("error: ", error.response.data)
        }
    }

    useEffect(() => {
        cartData();
    }, [removeCart])

    return (
        <div className='min-h-screen w-full py-4 px-7 gap-4 flex flex-col bg-gray-200'>

            <h1>
                {
                    carts.length === 0
                        ? <h1 className='text-xl font-stretch-50% font-medium'> Cart is empty </h1>
                        : <h1 className='text-xl font-stretch-50% font-medium'> Your Cart Products </h1>
                }
            </h1>

            <div className='h-full w-full py-2 flex flex-wrap gap-7'>

                {
                    carts.map((items) => (
                        <div key={items._id}
                            className='relative w-1/5 py-4 px-2 gap-2 flex flex-col rounded-lg bg-white hover:shadow-xl'>

                            <button onClick={() => removeCart(items._id)}
                                className='absolute right-2 top-3 w-fit h-fit py-0.5 px-1 rounded bg-red-500 text-white font-medium active:scale-95 '>
                                Remove
                            </button>

                            <Link key={items._id} to={`/app/${items.category}/${items.category}_card/${items._id}`}>
                                <div className='h-62 w-full'>
                                    <img src={items.image} alt=""
                                        className='h-full w-full object-contain' />
                                </div>
                            </Link>

                            <h1 className='text-lg font-medium'> {items.brand} </h1>
                            <h1 className='font-medium'> {items.model_name} </h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cart