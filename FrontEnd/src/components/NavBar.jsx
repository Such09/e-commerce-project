import axios from 'axios';
import { Search, CircleUserRound, ChevronDown, ShoppingCart } from 'lucide-react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { successtoast } from '../utils/toast';

const NavBar = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate()

    // Logout user
    const logoutUser = async () => {
        try {
            const responce = await axios.get(`http://localhost:4000/ecommerce/v1/logout`, { withCredentials: true })
            console.log('logout: ', responce.data);

            successtoast(responce.data.message)
            navigate('/')
        } catch (error) {
            // console.log("logout request failed.", error.response.status);

            if(error.response.status === 401)   navigate('/')
        }
    }

    // Fetch searching data
    const searchProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/ecommerce/v1/product?search=${search}`)

            await navigate('/app/search/product', {     // Navigate the searching page.
                state: [
                    response.data.data, search
                ]
            })
        } catch (error) {
            console.log("searching product error", error)
        } finally {
            setSearch("")
        }
    }

    return (
        <div className='h-16 w-full px-5 py-2 flex justify-between items-center gap-3 bg-gray-800'>
            {/* Logo */}
            <div className='h-14 min-w-fit flex-1 flex items-center'>
                <h1 className='text-lg w-fit font-medium text-gray-300 md:text-xl md:font-bold'>E-Commerce</h1>
            </div>

            {/* Search Box */}
            <div className='h-12 w-1/2 flex items-center'>
                <input type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    placeholder='Search for Products, Brand and More'
                    className='h-12 w-[105vh] px-4 text-lg font-medium outline-none rounded-tl-lg rounded-bl-lg bg-white border-yellow-500 hover:border-2' />

                <button onClick={() => searchProduct()}
                    className='h-12 w-fit px-1 md:px-4 rounded-tr-lg rounded-br-lg bg-yellow-500 flex justify-center items-center'>
                    <Search className='text-gray-600' size={30} strokeWidth={2.5} />
                </button>
            </div>

            {/* Profile */}
            <Link to={`/app/profile`}
            className='h-14 max-w-fit px-2 flex justify-center items-center gap-2'>

                <CircleUserRound size={30} color="#fcfcfc" strokeWidth={1.50} />
                <h1 className='text-white font-medium'>Account</h1>
                <ChevronDown size={28} color="#fcfcfc" />

            </Link>

            {/* Orders */}
            <Link to={`/app/orders`}
            className='max-w-fit px-2 h-14 flex justify-center items-center gap-1'>
                <h1 className='text-white font-medium'>Orders</h1>
                <ChevronDown size={26} color="#fcfcfc" />
            </Link>

            {/* Cart */}
            <Link to={`/app/cart`} className='max-w-fit px-2 h-14 flex justify-center items-center gap-1'>
                <ShoppingCart size={30} color="#fcfcfc" strokeWidth={1.75} />
                <h1 className='text-white font-medium'>Cart</h1>
            </Link>

            <button onClick={logoutUser}
                className='h-10 px-2 bg-amber-400 rounded text-white text-lg font-medium active:scale-95'>
                Logout
            </button>
        </div>
    )
}

export default NavBar