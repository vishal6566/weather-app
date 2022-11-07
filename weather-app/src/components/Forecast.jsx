import React from 'react'

const Forecast = ({title}) => {
  return (
    <div>
        <div className=' flex item-center justify-start mt-6'>
            <p className='text-white font-medium uppercase'>{title}</p>
        </div>
        <hr className='my-2' />
        <div className='flex flex-row ic justify-between text-white'>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    04:30pm
                </p>
                <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-12 my-1'/>
                <p className='font-medium'>22°</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    04:30pm
                </p>
                <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-12 my-1'/>
                <p className='font-medium'>22°</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    04:30pm
                </p>
                <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-12 my-1'/>
                <p className='font-medium'>22°</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    04:30pm
                </p>
                <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-12 my-1'/>
                <p className='font-medium'>22°</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    04:30pm
                </p>
                <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-12 my-1'/>
                <p className='font-medium'>22°</p>
            </div>


        </div>
    </div>
  )
}

export default Forecast