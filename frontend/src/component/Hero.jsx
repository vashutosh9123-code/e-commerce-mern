import React from 'react'
import {assets} from '../assets/assets'
const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-slate-100 rounded-3xl overflow-hidden bg-gradient-to-r from-white to-slate-50 shadow-[0_20px_50px_rgba(0,0,0,0.05)] mt-4 mb-10'>
        {/* left side */}

        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
            <div className='flex items-center gap-2'>
                <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                <p className='font-medium text-sm md:text-base'>OUR BESTSELLER</p>
            </div>
            <h1  className=' prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrival</h1>
            <div className='flex items-center gap-2 cursor-pointer group'>
                <p className='font-semibold text-sm md:text-base group-hover:text-black transition-colors'>SHOP NOW</p>
                <p className='w-8 md:w-11 h-[1px] bg-[#414141] group-hover:w-14 transition-all duration-300'></p>
            </div>
        </div>

        </div>

        {/* right side */}

        <img className='w-full sm:w-1/2' src={assets.hero_img}/>
      
    </div>
  )
}

export default Hero
