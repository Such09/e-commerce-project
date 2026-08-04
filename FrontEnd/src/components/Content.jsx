import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"

const Content = () => {
    const provider1 = useSelector(state => state.slice1)
    const provider2 = useSelector(state => state.slice2)
    const provider3 = useSelector(state => state.slice3)
    // console.log('provider is: ', provider3);

    return (
        <div className='min-h-screen w-full pb-10 bg-gray-200 flex flex-col gap-5  '>
            {/* Crosele */}
            <div className='h-[55vh] w-full'>
                <img className='h-full w-full object-cover'
                    src="https://images.meesho.com/images/marketing/1767796583251.webp" alt="" />
            </div>

            {/* Items list: 1st_Container */}
            <div className='h-64 w-full px-10 flex justify-between items-center gap-5 bg-white'>
                {
                    provider1.map((val) => (
                        <div key={val.id} className='h-56 w-52 rounded-xl'>
                            <Link to={val.title} >
                                <img
                                    className='h-48 w-full rounded-t-xl object-contain'
                                    src={val.url} alt="" />
                                <p className='text-lg font-medium text-center'> {val.title} </p>
                            </Link>
                        </div>
                    ))
                }
            </div>

            {/* Items list: 2nd_Container */}
            <div className='h-[55vh] w-full px-10 flex justify-between items-center gap-10'>
                {
                    provider2.map((val) => (
                        <div key={val.id} className='h-full w-[42vh] pt-4 rounded-xl flex flex-col items-center bg-white'>
                            <Link to={val.field}>
                                <div className='h-[40vh] w-[35vh] rounded-xl'>
                                    <img
                                        className='h-full w-full object-contain rounded-xl'
                                        src={val.url} alt="" />
                                </div>
                            </Link>

                            <div className='h-[15vh] w-[45vh] py-2 px-7 flex flex-col gap-1'>
                                <div className='flex gap-2'>
                                    <p className='font-bold'> {val.brand} </p>
                                    <p> {val.model} </p>
                                </div>

                                <div className='flex gap-2'>
                                    <p className='font-bold'> ₹ {val.dis_price} </p>
                                    <p className='text-gray-400 line-through'>₹ {val.price} </p>
                                </div>

                                <p className='text-blue-800 font-semibold'>Bank offer with {val.bank_dis} + more</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* Items list: Third Container */}
            <div className='h-[55vh] w-full px-10 flex justify-between items-center gap-10'>
                {
                    provider3.map((val) => (
                        <div key={val.id} className='h-full w-[42vh] pt-4 rounded-xl flex flex-col items-center bg-white'>
                            <Link to={val.category}>
                                <div className='h-[40vh] w-[35vh] rounded-xl'>
                                    <img className='h-full w-full object-contain rounded-xl' src={val.url} alt="" />
                                </div>
                            </Link>

                            <div className='h-[15vh] w-[45vh] py-2 px-7 flex flex-col gap-1'>
                                <div className='flex gap-2'>
                                    <p className='font-bold'> {val.brand} </p>
                                    <p> {val.model} </p>
                                </div>

                                <div className='flex gap-2'>
                                    <p className='font-bold'>₹ {val.dis_price} </p>
                                    <p className='text-gray-400 line-through'> ₹ {val.price} </p>
                                </div>

                                <p className='text-blue-800 font-semibold'>Bank offer with {val.bank_dis} + more</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Content