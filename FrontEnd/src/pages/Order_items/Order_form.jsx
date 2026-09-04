import { useNavigate, useParams } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"
import axios from "axios"

const Order_form = () => {
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({name: "", phone: "", pincode: "", state: "", city: "", dist: "", house: "", road: ""});
    const id = useParams();
    const p_id = id.id    

    const data = (e) => {
        const { name, value } = e.target

        setInputs((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const formHandler = async (e) => {
        e.preventDefault()
    
        try {
            const response = await axios.patch(`https://e-commerce-project-2-72zj.onrender.com/ecommerce/v1/address`, inputs, { withCredentials: true })
            // console.log(response.data.message);
            navigate(`/app/order/order_con/${p_id}`)
        } catch (error) {
            console.log("address not add", error.response);
        }finally{
            setInputs({name: "", phone: "", pincode: "", state: "", city: "", dist: "", house: "", road: ""})
        }
    }

    return (
        <div className='h-screen w-full py-1.5 flex flex-col gap-3 bg-zinc-300'>
            <div className="w-full h-18 px-4 flex justify-between items-center bg-white">
                <button onClick={() => navigate(-1)}
                    className="text-lg font-semibold flex gap-1 items-center">
                    <ArrowLeft size={24} color="#171616" strokeWidth={1.5} />
                    back
                </button>
            </div>

            <form onSubmit={formHandler}
                className="md:w-3/4 h-full w-full px-4 py-4 flex flex-col gap-4 bg-white">
                <h1 className="text-lg font-medium">Add Delivery Address</h1>

                <input type="text" placeholder="Full Name" name="name"
                    onChange={data}
                    value={inputs.name}
                    className="md:h-12 h-10 w-full px-1 border-2 border-amber-700 text-zinc-900 font-semibold outline-blue-400 rounded-lg" />

                <input type="number" placeholder="Phone Number" name="phone"
                    onChange={data}
                    value={inputs.phone}
                    className="md:h-12 h-10 w-full px-1 border-2 border-amber-700 text-zinc-900 font-semibold outline-blue-400 rounded-lg" />

                <div className="w-full flex gap-4 flex-col md:flex-row md:gap-4">
                    <input type="number" placeholder="Pincode" name="pincode"
                        onChange={data}
                        value={inputs.pincode}
                        className="md:h-12 h-10 w-full px-1 border-2 border-amber-700 text-zinc-900 font-semibold outline-blue-400 rounded-lg" />

                    <input type="text" placeholder="City" name="city"
                        onChange={data}
                        value={inputs.city}
                        className="md:h-12 h-10 w-full px-1 border-2 border-amber-700 text-zinc-900 font-semibold outline-blue-400 rounded-lg" />
                </div>

                <div className="w-full flex gap-4 flex-col md:flex-row md:gap-4">
                    <input type="text" placeholder="State" name="state"
                        onChange={data}
                        value={inputs.state}
                        className="md:h-12 h-10 w-full px-1 border-2 border-amber-700 text-zinc-900 font-semibold outline-blue-400 rounded-lg" />

                    <input type="text" placeholder="District" name="dist"
                        onChange={data}
                        value={inputs.dist}
                        className="md:h-12 h-10 w-full px-1 border-2 border-amber-700 text-zinc-900 font-semibold outline-blue-400 rounded-lg" />
                </div>

                <input type="text" placeholder="House no,building name" name="house"
                    onChange={data}
                    value={inputs.house}
                    className="md:h-12 h-10 w-full px-1 border-2 border-amber-700 text-zinc-900 font-semibold outline-blue-400 rounded-lg" />

                <input type="text" placeholder="Road Name, Area Colony" name="road"
                    onChange={data}
                    value={inputs.road}
                    className="md:h-12 h-10 w-full px-1 border-2 border-amber-700 text-zinc-900 font-semibold outline-blue-400 rounded-lg" />

                <button className="w-full h-12 text-white text-lg font-medium rounded bg-green-500 active:scale-95">
                    Save Address
                </button>
            </form>
        </div>
    )
}

export default Order_form