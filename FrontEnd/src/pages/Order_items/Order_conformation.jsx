import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Order_conformation = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState();
  const [loading, setLoading] = useState(true);
  const id = useParams();

  const orderInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/ecommerce/v1/order_detail/${id.id}`, { withCredentials: true })
      setInfo(response.data)

    } catch (error) {
      console.log("order confermation: ", error.response);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    orderInfo();
  }, [])

  return (
    <div className=' w-full flex flex-col md:flex-row justify-center gap-5 bg-zinc-200'>
      {/* Address & product detail secssion */}
      {
        loading ? <p> Loading.... </p>
          :
          <>
            <div className='h-fit md:h-screen w-full md:w-1/2 px-3 py-4 flex flex-col gap-4 bg-white'>
              {/* address section */}
              <div className='w-full py-2 flex flex-col gap-3'>
                <h1 className="text-lg font-semibold">Deliver To: </h1>
                <p className="font-medium"> {info.user_data.name} </p>
                <p> {info.user_data.house + ", " + info.user_data.road + ", " + info.user_data.city + ", " + info.user_data.dist + ", " + info.user_data.state + "-" + info.user_data.pincode} </p>
                <p> {info.user_data.phone} </p>
              </div>

              <hr className='text-gray-400' />

              {/* product section */}
              <div className='w-full py-2 flex flex-col gap-7'>
                <div className='w-full flex gap-4'>
                  {/* Product Image */}
                  <div className='h-24 w-24'>
                    <img src={info.product.image} alt=""
                      className="h-full w-full object-contain" />
                  </div>

                  {/* Product detail */}
                  <div className='flex flex-col gap-2'>
                    <div className="w-full flex gap-2.5">
                      <p className='font-medium'> {info.product.brand} </p>
                      <p> <p className='font-semibold'> {info.product.model_name} </p> </p>
                    </div>
                    <p className="text-gray-400 line-through"> ₹{info.product.price} </p>

                    <div className="w-full flex gap-3">
                      <p className="font-bold"> ₹{info.product.discountedPrice} </p>
                      <p className="font-medium text-amber-950"> {info.product.todayOff} </p>
                    </div>
                  </div>
                </div>

                <p>Delivery by Tomarrow</p>

                <div className='w-full flex justify-between'>
                  <p className='font-semibold text-zinc-500'>Email Id required for Delivery.</p>
                  <p className='text-blue-600'>+add email</p>
                </div>
              </div>
            </div>

            {/* Price detail section */}
            <div className='h-fit py-2 w-full md:w-1/4 md:mt-5 flex flex-col gap-3'>
              <h1 className='text-xl font-medium text-gray-700'> Price Details </h1>

              <div className='w-full py-3.5 flex flex-col gap-2 bg-white'>
                <div className='w-full px-3 py-2 flex justify-between items-center'>
                  <h1 className='font-medium'>MRP:</h1>
                  <p className='text-lg font-medium'>₹{info.product.price} </p>
                </div>

                <div className='w-full px-3 py-2 flex justify-between items-center'>
                  <h1 className='font-medium'>Charges:</h1>
                  <p className='text-lg font-medium'>₹50.00</p>
                </div>

                <div className='w-full px-3 py-2 flex justify-between items-center'>
                  <h1 className='font-medium'>Discount:</h1>
                  <p className='text-lg font-medium'> 10% </p>
                </div>

                <div className='w-full px-3 flex flex-col'>
                  <div className='w-full py-2 flex justify-between items-center'>
                    <h1 className='font-medium'>Total Amount:</h1>
                    <p className='text-lg font-medium'>₹ {info.product.discountedPrice} </p>
                  </div>

                  <div className='h-10 w-full rounded-lg bg-gray-200 flex justify-center items-center'>
                    <h1 className='text-rose-900 font-semibold'>You have'll save {Number(info.product.discountedPrice) < 1000 ? "50" : "500"} on this order</h1>
                  </div>
                </div>
              </div>

              <div className='w-full px-3 py-2 flex justify-between items-center bg-white'>
                <div className='h-fit flex flex-col'>
                  <h1 className='text-gray-400 line-through'> {info.product.price} </h1>
                  <h1 className='font-semibold'>₹ {info.product.discountedPrice} </h1>
                </div>

                <button onClick={() => navigate(`/order/order_con/payment/${info.product._id}`)}
                  className='h-9 w-1/2 py-1 bg-amber-500 active:scale-95'>
                  Continue
                </button>
              </div>
            </div>
          </>
      }
    </div>
  )
}

export default Order_conformation