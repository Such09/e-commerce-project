import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { errortoast, successtoast, warningtoast } from '../utils/toast'

const Login = () => {
    const [inputs, setInputs] = useState({ username: "", email: "", password: "" });
    const [loginDtail, setLoginDtail] = useState({ email: "", password: "" });

    const navigate = useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target

        setInputs((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const loginData = (e) => {
        const { name, value } = e.target

        setLoginDtail((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const registerFormHandler = async (e) => {
        e.preventDefault();

        try {
            const user = await axios.post(`http://localhost:4000/ecommerce/v1/register`, inputs)
            successtoast(user.data.message)

        } catch (error) {
            errortoast(error.response.data.message)
        }

        setInputs({
            username: "",
            email: "",
            password: ""
        })
    }

    const loginFormHandler = async (e) => {
        e.preventDefault();

        try {
            const login = await axios.post(`http://localhost:4000/ecommerce/v1/login`, loginDtail, { withCredentials: true })
            
            successtoast(login.data.message)

            navigate('/app')
        } catch (error) {
            errortoast(error.response.data.message)
            console.log("error: ", error);
            

        } finally {
            setLoginDtail({
                email: "",
                password: ""
            })
        }
    }

    return (
        <div className='relative bg-amber-50 h-screen w-full flex justify-center items-center'>
            <img src="https://img.magnific.com/free-photo/black-friday-sales-sign-neon-light_23-2151833076.jpg?semt=ais_hybrid&w=740&q=80" alt=""
                className='h-full w-full object-cover' />

            <div className='absolute bg-amber-50/20 h-2/3 w-3/4 px-12 flex justify-center gap-10 border-2 border-gray-300/50 rounded-2xl'>
                {/* Register user page */}
                <div className=' h-full w-[50%] py-16  flex flex-col justify-center gap-5'>

                    <div className='mb-2'>
                        <h1 className='text-3xl text-blue-200 font-bold'>Create Your Account</h1>
                        <h1 className='text-blue-100 font-medium'>Create an account to begin your journey. </h1>
                    </div>

                    <form onSubmit={registerFormHandler}
                        className='w-full px-5 pt-6 pb-0 rounded-xl flex flex-col gap-4'>
                        <input type="text" placeholder='enter username' name='username'
                            onChange={inputHandler}
                            value={inputs.username}
                            className='h-12 w-full px-3 outline-none rounded-xl text font-medium text-gray-100 border-2 border-amber-100' />

                        <input type="email" placeholder='enter email' name='email'
                            onChange={inputHandler}
                            value={inputs.email}
                            className='h-12 w-full px-3 outline-none rounded-xl text font-medium text-gray-100 border-2 border-amber-100' />

                        <input type="password" placeholder='enter password' name='password'
                            onChange={inputHandler}
                            value={inputs.password}
                            className='h-12 w-full px-3 outline-none rounded-xl text font-medium text-gray-100 border-2 border-amber-100' />

                        <button className='bg_c3 h-12 w-full mt-3 rounded-xl text font-medium text-white active:scale-95'>
                            Register
                        </button>
                    </form>

                    <div className='w-full flex justify-center'>
                        <h1 className='font-medium text-red-200'>Already Have an Account?</h1>
                    </div>
                </div>

                {/* Login User Page */}
                <div className=' h-full w-[50%] py-16 pb-18 flex flex-col justify-center gap-3'>
                    <div className='mb-8'>
                        <h1 className='text-3xl text-blue-200 font-bold'>Log in</h1>
                        <h1 className='text-blue-100 font-medium'>Welcome to back </h1>
                    </div>

                    <form onSubmit={loginFormHandler}
                        className=' w-full px-5 pt-6 pb-2 rounded-xl flex flex-col gap-4'>

                        <input type="email" placeholder='enter email' name='email' required
                            onChange={loginData}
                            value={loginDtail.email}
                            className='h-12 w-full px-3 outline-none rounded-xl text font-medium text-gray-100 border-2 border-amber-100' />

                        <input type="password" placeholder='enter password' name='password' required
                            onChange={loginData}
                            value={loginDtail.password}
                            className='h-12 w-full px-3 outline-none rounded-xl text font-medium text-gray-100 border-2 border-amber-100' />

                        <button className='bg-white h-12 w-full mt-5 rounded-xl text font-medium text-black active:scale-95'>
                            Login
                        </button>
                    </form>

                    <div className='w-full flex justify-center'>
                        <h1 className='font-medium text-amber-200'>Create an Account?</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login