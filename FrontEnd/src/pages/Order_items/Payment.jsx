import axios from "axios";
import { LockKeyhole, ArrowLeft, ChevronRight, TicketPercent, ChevronDown, CreditCard, Wallet, Landmark } from "lucide-react"
import { useEffect } from "react";
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

const Payment = () => {
    const navigate = useNavigate();
    const [upi, setUpi] = useState(false);
    const [cash, setCash] = useState(false);
    const [info, setInfo] = useState();
    const [loading, setLoading] = useState(true);
    const [isShow, setIsShow] = useState(true);
    const id = useParams();

    const getData = async () => {
        try {
            const response = await axios.get(`https://e-commerce-project-2-72zj.onrender.com/ecommerce/v1/product_id/${id.id}`)
            setInfo(response.data.data)

        } catch (error) {
            console.log("error: ", error.response);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='relative min-h-screen w-full flex flex-col gap-4'>
            {/* Nav */}
            <div className="sticky top-0 w-full flex flex-col">
                <div className='w-full h-18 px-3 flex justify-between items-center bg-white'>
                    <button onClick={() => navigate(-1)}
                        className="text-lg font-semibold flex gap-1 items-center">
                        <ArrowLeft size={24} color="#171616" strokeWidth={1.5} />
                        Payments
                    </button>

                    <button className="h-fit py-0.5 px-0.5 rounded text-sm font-semibold flex gap-1 items-center text-gray-600 bg-gray-200">
                        <LockKeyhole size={16} strokeWidth={2} />
                        100% Secure
                    </button>
                </div>

                <div className="md:hidden h-12 w-full px-1.5 flex items-center justify-between bg-sky-200">
                    <p className="text-blue-600">Total Amount: </p>
                    <p className="text-blue-600">₹10000</p>
                </div>
            </div>

            {
                loading
                    ? <h1> Loading..... </h1>
                    :
                    <div className="h-screen w-full md:flex justify-center gap-4 bg-zinc-100">
                        <div className="md:w-2/4 w-full flex flex-col gap-4 md:flex-row bg-white">
                            {/* offer container */}
                            <div className="md:hidden w-full px-3 bg-white">
                                <div className="w-full py-1 bg-red-500/15 flex rounded-lg">
                                    <div className="flex flex-col px-2">
                                        <p className="text-amber-900 font-medium">10% instant discount</p>
                                        <p className="text-sm text-amber-800">Claim now with payment offer</p>
                                    </div>

                                </div>
                            </div>

                            {/* Payment methods */}
                            <div className="w-full px-1 flex flex-col">
                                <hr className="text-gray-300" />
                                {/* UPI method */}
                                <div className="w-full px-2 flex justify-between bg-white">
                                    <div className="flex py-2 gap-2">
                                        <div
                                            className="h-fit w-fit mt-1 px-0.5 text-xs font-medium border-2 rounded flex justify-center items-center ">
                                            upi
                                        </div>

                                        <div className="h-fit flex flex-col">
                                            <p className="text-base font-semibold">UPI</p>
                                            <p className="text-gray-700 text-sm font-sans">Pay by any upi App</p>
                                        </div>
                                    </div>

                                    <button onClick={() => setUpi(!upi)}>
                                        {upi ? <ChevronDown size={24} strokeWidth={1.5} /> : <ChevronRight size={24} strokeWidth={1.5} />}
                                    </button>
                                </div>

                                {
                                    upi
                                        ?
                                        <div className="relative w-full h-64 flex justify-center items-center bg-white">
                                            <div className="h-32 w-32">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9yU7W2P0t-4ANcjlJcTxK1zcobRKF5oJm4CXdH5UIRA&s=10" alt=""
                                                    className="h-full w-full" />
                                            </div>

                                            {
                                                isShow
                                                    ?
                                                    <div className="absolute top-9 h-44 w-full flex justify-center items-center bg-white-20 backdrop-blur-xs">
                                                        <button onClick={() => setIsShow(!isShow)}
                                                            className="px-1 bg-white rounded text-base font-medium">
                                                            Show QR
                                                        </button>
                                                    </div>
                                                    : <div className="hidden"></div>
                                            }
                                        </div>

                                        : <div className="hidden"></div>
                                }

                                <hr className="text-gray-300" />

                                {/* Card method */}
                                <div className="w-full px-2 flex justify-between bg-white">
                                    <div className="flex py-2 gap-2">
                                        <CreditCard size={24} strokeWidth={1.25} />

                                        <div className="h-fit flex flex-col">
                                            <p className="text-base font-semibold">Creadit / Debit / ATM Card</p>
                                            <p className="text-gray-700 text-sm font-sans">Add ans secure cards as per RBI guidelines</p>
                                        </div>
                                    </div>

                                    <button>
                                        <ChevronRight size={24} strokeWidth={1.5} />
                                    </button>
                                </div>

                                <hr className="text-gray-300" />

                                {/* Net-Banking method */}
                                <div className="w-full px-2 flex justify-between bg-white">
                                    <div className="flex py-2 gap-2">
                                        <Landmark size={24} strokeWidth={1.25} />

                                        <div className="h-fit flex flex-col">
                                            <p className="text-base font-semibold">Net Banking</p>
                                        </div>
                                    </div>

                                    <button onClick={() => setUpi(!upi)}>
                                        <ChevronRight size={24} strokeWidth={1.5} />
                                    </button>
                                </div>

                                <hr className="text-gray-300" />

                                {/* EMI method */}
                                <div className="w-full px-2 flex justify-between bg-white">
                                    <div className="flex py-2 gap-2">
                                        <TicketPercent size={24} strokeWidth={1.25} />

                                        <div className="h-fit flex flex-col">
                                            <p className="text-base font-semibold">EMI</p>
                                        </div>
                                    </div>

                                    <button onClick={() => setUpi(!upi)}>
                                        <ChevronRight size={24} strokeWidth={1.5} />
                                    </button>
                                </div>

                                <hr className="text-gray-300" />

                                {/* Cash on delivery method */}
                                <div className="w-full flex flex-col">
                                    <div className="w-full px-2 flex justify-between bg-white">
                                        <div className="flex py-2 gap-2">
                                            <Wallet size={24} strokeWidth={1.25} />

                                            <div className="h-fit flex flex-col">
                                                <p className="text-base font-semibold">Cash on Delivery</p>
                                            </div>
                                        </div>

                                        <button onClick={() => setCash(!cash)}>
                                            {cash ? <ChevronDown size={24} strokeWidth={1.5} /> : <ChevronRight size={24} strokeWidth={1.5} />}
                                        </button>
                                    </div>

                                    {
                                        cash
                                            ? <div className="w-full p-4 flex flex-col gap-3 bg-amber-50 rounded-lg">
                                                <p className="text-xs text-zinc-700 font-sans md:text-sm">
                                                    Enter the 'Place Order' button and confirm your order, you can also net banking and Upi option to pay.
                                                </p>

                                                <button onClick={() => navigate(`/app`)}
                                                className="h-10 font-medium rounded bg-amber-300 active:scale-95">
                                                    Place Order
                                                </button>
                                            </div>

                                            : <div className="hidden"></div>
                                    }
                                </div>
                            </div>
                        </div>

                        {/* Price detail section */}
                        <div className='hidden md:flex md:w-96 h-screen py-6 px-3 mt-0 flex-col gap-3 bg-white'>
                            <div className='w-full py-3.5 flex flex-col gap-2 rounded-lg bg-sky-100/50'>
                                <div className='w-full px-3 py-2 flex justify-between items-center'>
                                    <h1 className='font-medium'>MRP:</h1>
                                    <p className='text-lg font-medium'>₹ {info.price} </p>
                                </div>

                                <div className='w-full px-3 py-2 flex justify-between items-center'>
                                    <h1 className='font-medium'>Charges:</h1>
                                    <p className='text-lg font-medium'>₹50.00</p>
                                </div>

                                <div className='w-full px-3 py-2 flex justify-between items-center'>
                                    <h1 className='font-medium'>Discount:</h1>
                                    <p className='text-lg font-medium'>10%</p>
                                </div>

                                <div className='w-full px-3 flex flex-col'>
                                    <div className='w-full py-2 flex justify-between items-center'>
                                        <h1 className='font-medium'>Total Amount:</h1>
                                        <p className='text-lg font-medium'>₹ {info.discountedPrice} </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full px-3">
                                <div className="w-full py-1 bg-red-500/15 flex rounded-lg">
                                    <div className="flex flex-col px-2">
                                        <p className="text-amber-900 font-medium">10% instant discount</p>
                                        <p className="text-sm text-amber-800">Claim now with payment offer</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Payment