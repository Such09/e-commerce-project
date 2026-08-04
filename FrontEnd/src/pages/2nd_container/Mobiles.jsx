import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Mobiles = () => {
  const mobiles = useSelector(state => state.mobileSlice)

  return (
    <div className='min-h-screen w-full py-6 px-7 flex flex-wrap gap-5'>
      {
        mobiles.map((data) => (
          <Link key={data._id} to={`/app/mobiles/mobile_card/${data._id}`}>
            <div key={data._id} className='h-72 w-[93vh] px-2.5 flex justify-between border-2 border-gray-400 rounded-xl'>
              {/* Item image */}
              <div className='h-[33vh] w-[30vh] mt-2.5 py-2.5 border-r-2 border-gray-500'>
                <img className='h-full w-full object-contain' src={data.image} alt="" />
              </div>
              {/* Discription */}
              <div className='h-full w-[38vh] py-4'>
                <div className='flex gap-2'>
                  <h1 className='font-bold text-lg'> {data.brand} </h1>
                  <p className='font-medium'> {data.model} </p>
                  {/* <p className='font-medium'> (prismatic Green) </p> */}
                </div>

                <ul className='flex flex-col mt-3 gap-2'>
                  <li> {data.storage} </li>
                  <li> {data.display} </li>
                  <li> {data.camera} </li>
                  <li> {data.battery} </li>
                </ul>
              </div>
              {/* Price */}
              <div className='py-6 flex flex-col gap-1.5'>
                <h1 className='text-2xl font-bold'> ₹ {data.discountedPrice} </h1>
                <div className='flex gap-3'>
                  <p className='text-gray-400 line-through'> ₹{data.price} </p>
                </div>
              </div>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default Mobiles