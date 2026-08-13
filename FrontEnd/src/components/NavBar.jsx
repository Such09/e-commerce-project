import axios from 'axios';
import { Search, CircleUserRound, ChevronDown, ShoppingCart } from 'lucide-react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { successtoast } from '../utils/toast';
import { Menu } from 'lucide-react';

const NavBar = () => {
    const [search, setSearch] = useState("");
    const [isMenuClick, setIsMenuClick] = useState(false);
    const navigate = useNavigate();

    // Logout user
    const logoutUser = async () => {
        try {
            const responce = await axios.get(`http://localhost:4000/ecommerce/v1/logout`, { withCredentials: true })
            console.log('logout: ', responce.data);

            successtoast(responce.data.message)
            navigate('/')
        } catch (error) {
            // console.log("logout request failed.", error.response.status);

            if (error.response.status === 401) navigate('/')
        }
    }

    // Fetch searching data
    const searchProduct = async (e) => {
        e.preventDefault();
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
        <div className='h-16 w-full py-2 flex justify-evenly items-center gap-1.5 lg:gap-3 bg-gray-800'>
            {/* Logo */}
            <div className='h-14 ml-2.5 min-w-fit flex-1 flex items-center'>
                <h1 className='w-fit font-medium text-gray-300 md:text-xl md:font-bold'>E-Commerce</h1>
            </div>

            {/* Search Box */}
            <form onSubmit={searchProduct}
                className='h-12 w-1/2 flex items-center'>
                <input type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    placeholder='Search for Products, Brand and More'
                    className='h-12 w-full px-4 font-medium outline-none rounded-lg md:rounded-tr-none md:rounded-br-none bg-white border-yellow-500 hover:border-2' />

                <button type='submit'
                    className='h-12 w-fit px-1 md:px-4 rounded-tr-lg rounded-br-lg bg-yellow-500 hidden md:flex justify-center items-center'>
                    <Search className='text-gray-600' size={30} strokeWidth={2.5} />
                </button>
            </form>

            {/* Profile */}
            <Link to={`/app/profile`}
                className='hidden h-14 max-w-fit px-1 md:flex justify-center items-center gap-1'>
                <CircleUserRound size={28} color="#fcfcfc" strokeWidth={1.50} />
                <h1 className='text-white font-medium'>Account</h1>
                <ChevronDown size={28} color="#fcfcfc" />
            </Link>

            {/* Orders */}
            <Link to={`/app/orders`}
                className='hidden max-w-fit px-2 h-14 md:flex justify-center items-center gap-1'>
                <h1 className='text-white font-medium'>Orders</h1>
                <ChevronDown size={26} color="#fcfcfc" />
            </Link>

            {/* Cart */}
            <Link to={`/app/cart`} className='hidden max-w-fit px-2 h-14 md:flex justify-center items-center gap-1'>
                <ShoppingCart size={30} color="#fcfcfc" strokeWidth={1.75} />
                <h1 className='text-white font-medium'>Cart</h1>
            </Link>

            {/* Log-out */}
            <button onClick={logoutUser}
                className='hidden md:block h-10 mr-2.5 px-2 bg-amber-400 rounded text-white text-lg font-medium active:scale-95'>
                Logout
            </button>

            {/* Mobile layout */}
            <div className='md:hidden relative flex-1 flex justify-end'>
                <Menu onClick={() => setIsMenuClick(!isMenuClick)}
                    size={32} color="#faf9f9" strokeWidth={1.5} />

                {
                    isMenuClick
                        ? <div className='absolute top-12 px-4 py-2.5 min-w-screen bg-white z-10'>
                            <div className='w-full flex flex-col gap-3'>
                                <Link to={`/app/profile`} onClick={() => setIsMenuClick(!isMenuClick)} className='w-full pl-1 rounded py-1 font-medium flex hover:bg-gray-100 hover:text-orange-500'> Profile </Link>
                                <Link to={`/app/orders`} onClick={() => setIsMenuClick(!isMenuClick)} className='w-full pl-1 rounded py-1 font-medium flex hover:bg-gray-100 hover:text-orange-500'> Order </Link>
                                <Link to={`/app/cart`} onClick={() => setIsMenuClick(!isMenuClick)} className='w-full pl-1 rounded py-1 font-medium flex hover:bg-gray-100 hover:text-orange-500'> Cart </Link>
                                <Link onClick={logoutUser} className='w-full pl-1 rounded py-1 font-medium flex hover:bg-gray-100 hover:text-orange-500'> Logout </Link>
                            </div>
                        </div>

                        : <div className='hidden'></div>
                }
            </div>
        </div>
    )
}

export default NavBar