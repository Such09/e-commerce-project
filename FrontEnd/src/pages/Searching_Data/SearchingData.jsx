import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom';

const SearchingData = () => {
  const [brandClick, setBrandClick] = useState(false);
  const [colorClick, setColorClick] = useState(false);
  const [discount, setDiscount] = useState(false);
  const location = useLocation()
  const data = location.state[0]
  const data1 = location.state[1]

  console.log('data is: ', data);
  console.log('data is: ', data1);

  return (
    <div className='min-h-screen w-full py-3 px-3 flex gap-4 bg-gray-200'>
      {/* Filters */}
      <div className='h-fit p-3 flex-1 bg-white flex flex-col rounded'>
        <h1 className='text-xl font-medium pb-3'>Filters</h1>

        <hr className='text-gray-500 mb-2' />

        {/* Brand */}
        <div className='flex flex-col'>
          <button onClick={() => setBrandClick(!brandClick)}
            className='font-medium px-2 py-1 rounded flex justify-between hover:bg-gray-100'>
            Brand {brandClick ? <ChevronDown size={24} color="#211c1c" strokeWidth={1.5} /> : <ChevronRight size={24} color="#211c1c" strokeWidth={1.5} />}
          </button>

          <div>
            {
              brandClick
                ?
                <div className='flex flex-col'>
                  <div className='flex gap-1'>
                    <input type="checkbox" />
                    brand-1
                  </div>
                  <div className='flex gap-1'>
                    <input type="checkbox" />
                    brand-2
                  </div>
                  <div className='flex gap-1'>
                    <input type="checkbox" />
                    brand-3
                  </div>
                  <div className='flex gap-1'>
                    <input type="checkbox" />
                    brand-4
                  </div>
                </div>
                : <div className='hidden'></div>
            }
          </div>

        </div>

        <hr className='text-gray-500 my-2' />

        {/* Color */}
        <div className='flex flex-col'>
          <button onClick={() => setColorClick(!colorClick)}
            className='font-medium px-2 py-1 rounded flex justify-between hover:bg-gray-100'>
            Color {colorClick ? <ChevronDown size={24} color="#211c1c" strokeWidth={1.5} /> : <ChevronRight size={24} color="#211c1c" strokeWidth={1.5} />}
          </button>

          <div>
            {
              colorClick
                ?
                <div className='flex flex-col'>
                  <div className='flex gap-1'>
                    <input type="checkbox" />
                    color-1
                  </div>
                  <div className='flex gap-1'>
                    <input type="checkbox" />
                    color-2
                  </div>
                  <div className='flex gap-1'>
                    <input type="checkbox" />
                    color-3
                  </div>
                  <div className='flex gap-1'>
                    <input type="checkbox" />
                    color-4
                  </div>
                </div>
                : <div className='hidden'></div>
            }
          </div>
        </div>

        <hr className='text-gray-500 my-2' />

        {/* Discount */}
        <div className='flex flex-col'>
          <button onClick={() => setDiscount(!discount)}
            className='font-medium px-2 py-1 rounded flex justify-between hover:bg-gray-100'>
            Discount {discount ? <ChevronDown size={24} color="#211c1c" strokeWidth={1.5} /> : <ChevronRight size={24} color="#211c1c" strokeWidth={1.5} />}
          </button>

          <div>
            {
              discount
                ?
                <div className='flex flex-col'>
                  <div className='flex gap-1'>
                    <input type="checkbox" />
                    30% or more
                  </div>
                  <div className='flex gap-1'>
                    <input type="checkbox" />
                    40% or more
                  </div>
                  <div className='flex gap-1'>
                    <input type="checkbox" />
                    50% or more
                  </div>
                  <div className='flex gap-1'>
                    <input type="checkbox" />
                    60% or more
                  </div>
                </div>
                : <div className='hidden'></div>
            }
          </div>

        </div>
      </div>

      {/* Products */}
      <div className='flex-3 p-3 bg-white rounded flex flex-wrap gap-4'>
        {
          data.map((item) => (
            <Link key={item._id} to={`/app/${data1}/${data1}_card/${item._id}`}>
              <div key={item._id}
                className='w-60 h-80 p-3 flex flex-col gap-0.5'>
                <div className='h-2/3 w-full'>
                  <img src={item.image} alt=""
                    className='h-full w-full object-contain' />
                </div>

                <div className='flex flex-col gap-0.5'>
                  <h1 className='font-bold text-gray-800'> {item.brand} </h1>
                  <div className='w-full h-7 overflow-hidden'> {item.description} </div>

                  <div className='flex gap-2'>
                    <h1 className='font-bold'> {item.discountedPrice} </h1>
                    <h1 className='line-through text-gray-400'> {item.price} </h1>
                    <h1 className='text-green-700'> {item.todayOff} </h1>
                  </div>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default SearchingData