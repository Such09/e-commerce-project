import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { SquarePen } from 'lucide-react';
import { successtoast, errortoast } from '../../utils/toast';

const Profile = () => {
    const navigate = useNavigate();
    const [info, setInfo] = useState({});
    const [updatePic, setUpdatePic] = useState(false);
    const [img, setImg] = useState(null);
    const [profilePicture, setProfilePicture] = useState("");
    const [setting, setSetting] = useState(false);

    const formData = new FormData();
    formData.append("img", img);

    // Fetch user Information
    const data = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/ecommerce/v1/profile`, { withCredentials: true })
            setInfo(response.data.data)

        } catch (error) {
            if (error.response.status === 401) {
                navigate('/')
            }
        }
    }

    // Update Picture
    const formHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`https://e-commerce-project-2-72zj.onrender.com/ecommerce/v1/updatepic`, formData, { withCredentials: true })
            setProfilePicture(response.data.picture)
            successtoast(response.data.message)

        } catch (error) {
            console.log("profile picture error: ", error.response);
        } finally {
            // setImg(null)
        }
    }

    useEffect(() => {
        data();
    }, [])
    return (
        <div className='h-screen w-full p-4 flex gap-6 bg-gray-100'>
            {/* First container */}
            <div className='h-full w-1/3 flex flex-col bg-white'>
                {/* User Profile Card */}
                <div className='h-1/4 w-full pl-7 bg-blue-400 rounded-xl flex  items-center gap-7'>

                    {/* Profile picture */}
                    <div className='flex flex-col items-center'>
                        <div className='h-32 w-32 rounded-full border-2 border-white'>
                            <img src={profilePicture == 0 ? info.picture : profilePicture} alt=""
                                className='h-full w-full p-2 rounded-full object-cover' />

                            {/* Update picture */}
                            <div onClick={() => setUpdatePic(!updatePic)}
                                className='flex gap-1 mt-1 justify-center cursor-pointer'>
                                <SquarePen size={20} color="#fcfcfc" strokeWidth={2} />
                                <h1 className='text-white'>Edit</h1>
                            </div>
                        </div>
                    </div>

                    {/* user information */}
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-gray-200 text-2xl font-bold'> Hi, {info.username} </h1>
                        <h1 className='text-white text-lg font-medium'> {info.email} </h1>
                    </div>
                </div>

                <div className='w-full px-2 mt-7 flex flex-col gap-1'>
                    <div className='w-full'>
                        <div onClick={() => setSetting(!setting)}
                            className='h-12 px-3 pt-2 text-lg font-medium hover:bg-gray-50 hover:text-amber-900'>
                            Setting
                        </div>

                        {
                            setting
                                ? <div className='w-full flex flex-col'>
                                    <div className='h-9 px-10 font-medium hover:bg-gray-50 hover:text-amber-900'>
                                        Edit Profile
                                    </div>
                                    <div className='h-9 px-10 font-medium hover:bg-gray-50 hover:text-amber-900'>
                                        Theme
                                    </div>
                                    <div className='h-9 px-10 font-medium hover:bg-gray-50 hover:text-amber-900'>
                                        Help
                                    </div>
                                </div>
                                : <div className='hidden'></div>
                        }
                    </div>

                    <div className='h-12 px-3 pt-2 text-lg font-medium hover:bg-gray-50 hover:text-amber-900'>
                        Products
                    </div>

                    {/* Go to Home Page */}
                    <Link to='/app' className='h-12 px-3 pt-2 text-lg font-medium hover:bg-gray-50 hover:text-amber-900'>
                        Back
                    </Link>
                </div>
            </div>

            {/* Second container */}
            <div className='h-full flex-1 rounded-xl bg-white'>
                {/* Update profile Picture */}
                {
                    updatePic
                        ? <form onSubmit={formHandler}
                            className='h-96 w-full flex flex-col justify-center items-center gap-4 rounded-xl bg-amber-50'>
                            <h1 className='text-xl font-medium text-gray-700'>Chenge Picture</h1>

                            <div className='flex gap-2'>
                                <input type="file" name='img'
                                    onChange={(e) => setImg(e.target.files[0])}
                                    // value={img}
                                    required
                                    className=' h-7 w-36 px-1 border border-gray-400 rounded flex justify-center' />

                                <h1 className='font-medium'>choose file</h1>
                            </div>

                            <button className='w-1/6 px-2 py-1 text-white bg-blue-600 rounded active:scale-95'>
                                Update
                            </button>
                        </form>
                        :
                        <div className='hidden'></div>
                }
            </div>
        </div>
    )
}

export default Profile