import axios from 'axios'
import { useEffect, useState } from 'react'

const Orders = () => {
    const [orders, setOrders] = useState();
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/ecommerce/v1/user_orders`, { withCredentials: true })
            setOrders(response.data.data)

        } catch (error) {
            console.log("error: ", error.response)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <div className='h-screen w-full flex '>
            <div className='md:w-2/3 h-full w-full px-3 py-4 flex flex-col gap-3'>
                {
                    loading
                        ? <p>Loading....</p>
                        :
                        orders.length === 0
                            ? <h1 className='text-lg font-medium text-zinc-600'> Place your order </h1>
                            :
                            orders.map((product) => (
                                <div key={product._id} className='w-full py-3 flex border-2 border-gray-400/70 gap-2.5 rounded-lg'>
                                    {/* image */}
                                    <div className='md:h-32 md:w-32 h-24 w-24'>
                                        <img src={product.image} alt=""
                                            className='h-full w-full object-contain' />
                                    </div>

                                    {/* product ditail */}
                                    <div className='flex flex-col gap-2'>
                                        <div className='w-full flex gap-2'>
                                            <p className='text-lg font-semibold'> {product.brand} </p>
                                            <p className='font-medium'> {product.model_name} </p>
                                        </div>
                                        <p> {product.description} </p>
                                        <p className='text-gray-400 line-through'> ₹{product.price} </p>
                                        <div className='flex gap-3'>
                                            <p className='font-medium'> ₹{product.discountedPrice} </p>
                                            <p> {product.todayOff} </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                }
            </div>
        </div>
    )
}

export default Orders