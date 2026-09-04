import { Heart } from 'lucide-react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Tabs = () => {
  const [tabletData, setTabletData] = useState([]);

  const data = async () => {
    try {
      const response = await axios.get(`https://e-commerce-project-2-72zj.onrender.com/ecommerce/v1/find_product?items=tablet`)

      setTabletData(response.data.data)
    } catch (error) {
      console.log('data is not fetch', error.response);
    }
  }

  useEffect(() => {
    data();
  }, [])

  return (
    <div className='min-h-screen w-full py-7 bg-gray-200 flex flex-col gap-5  '>
      <div className='h-full w-full px-6 flex flex-wrap items-center gap-10'>
        {
          tabletData.map((data) => (
            <Link key={data._id} to={`/app/tablet/tablet_card/${data._id}`}>
              <div key={data._id} className='h-[60vh] w-[43vh] pt-4 rounded-xl flex flex-col items-center bg-white hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
                <div className='h-[40vh] w-[37vh] rounded-xl'>
                  <Heart className='absolute ml-[33vh]' size={24} strokeWidth={1.25} />
                  <img className='h-full w-full object-contain rounded-xl' src={data.image} alt="" />
                </div>

                <div className='h-[18vh] w-[45vh] py-2 px-7 flex flex-col gap-1'>
                  <div className='flex gap-2'>
                    <p className='font-bold'> {data.brand} </p>
                    <p> {data.model_name} </p>
                  </div>

                  <div className="h-6 flex items-baseline overflow-hidden">
                    {data.description}
                  </div>

                  <div className='flex gap-2'>
                    <p className='font-bold'> ₹{data.discountedPrice} </p>
                    <p className='text-gray-400 line-through'> ₹{data.price} </p>
                    <p className="text-amber-950/60 font-semibold"> {data.todayOff} </p>
                  </div>

                  <button className="h-8 px-2 w-fit rounded font-medium text-amber-900 bg-gray-500/25 "> {data.tag} </button>
                </div>
              </div>
            </Link>
          ))
        }

      </div>

    </div>
  )
}

export default Tabs