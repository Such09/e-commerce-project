import { Copyright } from 'lucide-react'
import { LiaFacebook, LiaYoutube } from "react-icons/lia";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='pt-3 pb-10 w-full flex flex-col gap-0 bg-gray-950'>
            <div className='w-full pt-7 flex flex-col items-center md:flex-row md:justify-center gap-10'>
                {/* Logo */}
                <div className='h-14 w-40'>
                    <h1 className='text-2xl font-bold text-gray-300'>E-Commerse</h1>
                </div>

                <div className=' w-64 pt-2 px-5'>
                    <h1 className='text-gray-400 font-mono text-lg'>About</h1>
                    <div className='flex flex-col py-3 text-white font-bold'>
                        <Link to='contact'>Contact Us</Link>
                        <Link to='about'>About Us</Link>
                        <p>Careers</p>
                        <p>Corporete Information</p>
                    </div>
                </div>

                <div className=' w-64 pt-2 px-5'>
                    <h1 className='text-gray-400 font-mono text-lg'>Group Companies</h1>
                    <div className='flex flex-col py-3 text-white font-bold'>
                        <Link to='https://www.myntra.com/'>Myntra</Link>
                        <Link to='https://www.amazon.com/'>amazon</Link>
                        <Link to='https://www.shopsy.in/'>Shopsy</Link>

                    </div>
                </div>

                <div className=' w-64 pt-2 px-5'>
                    <h1 className='text-gray-400 font-mono text-lg'>Help</h1>
                    <ul className='py-3 text-white font-bold'>
                        <li>Payment</li>
                        <li>Shoping</li>
                        <li>Cancellation & Returns</li>
                        <li>FQA</li>
                    </ul>
                </div>

                <div className=' w-80 pt-2 px-5'>
                    <h1 className='text-gray-400 font-mono text-lg'>Consumer Policy</h1>
                    <ul className='py-3 text-white font-bold'>
                        <li>Cancellation & Returns</li>
                        <li>Term of Use</li>
                        <li>Security</li>
                        <li>Privacy</li>
                        <li>Sitemap</li>
                        <li>FSSAI Food Safety</li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>

            <hr className='text-gray-400 mt-7' />

            <div className='py-7 w-full flex justify-center items-center'>
                <div className='h-14 w-56 flex justify-center items-center gap-2'>
                    <Copyright size={24} color="#fcfcfc" strokeWidth={1.75} />
                    <p className='text-white'>2005-2026 E-Commerce</p>
                </div>

                <div className='h-14 w-80 flex justify-center items-center gap-2 '>
                    <p className='text-gray-400 text-lg'>Social:</p>
                    <LiaFacebook className='text-white text-3xl font-extrabold' />
                    <FaXTwitter className='text-white text-2xl font-extrabold' />
                    <LiaYoutube className='text-white text-3xl font-extrabold' />
                    <Link to='https://www.instagram.com/x_sachya_____09/?hl=en'><FaInstagram className='text-white text-2xl font-extrabold' /></Link>
                </div>

            </div>
        </div>
    )
}

export default Footer