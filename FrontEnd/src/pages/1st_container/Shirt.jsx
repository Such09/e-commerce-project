import { Heart } from 'lucide-react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Shirt = () => {
  const shirts = useSelector(state => state.shirtSlice)
  // console.log('shirt: ',shirts);

  return (
    <div className='min-h-screen w-full py-7 bg-gray-200 flex flex-col gap-5  '>
      <div className='h-full w-full px-6 flex flex-wrap items-center gap-10'>
        {
          shirts.map((data) => (
            <Link key={data._id} to={`/app/shirts/shirt_cards/${data._id}`}>
              <div key={data.id} className='h-[60vh] w-[43vh] pt-4 rounded-xl flex flex-col items-center bg-white hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
                <div className='h-[40vh] w-[37vh] rounded-xl'>
                  <Heart className='absolute ml-[33vh]' size={24} strokeWidth={1.25} />
                  <img className='h-full w-full object-contain rounded-xl' src={data.image} alt="" />
                </div>

                <div className='h-[18vh] w-[45vh] py-2 px-7 flex flex-col gap-1'>
                  <div className='flex gap-2'>
                    <p className='font-bold'> {data.brand} </p>
                    <p> {data.modelName} </p>
                  </div>

                  <div className="h-6 flex items-baseline overflow-hidden">
                    {data.description}
                  </div>

                  <div className='flex gap-2'>
                    <p className='font-bold'> ₹{data.discountedPrice} </p>
                    <p className='text-gray-400 line-through'> ₹{data.price} </p>
                    <p className="text-amber-950/60 font-semibold"> {data.tag} </p>
                  </div>

                  <button className="h-8 px-2 w-fit rounded font-medium text-amber-900 bg-gray-500/25 "> {data.offerTag} </button>
                </div>
              </div>
            </Link>
          ))
        }

      </div>

    </div>
  )
}

export default Shirt