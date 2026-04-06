import React from 'react'
import {assets} from'../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-4 px-[4%] justify-between bg-white bg-opacity-80 backdrop-blur-md sticky top-0 z-50 shadow-sm'>
        <img src= {assets.logo} className='w-[max(10%,80px)] hover:scale-105 transition-transform duration-300 cursor-pointer'/>
        <button onClick={()=>setToken('')} className='bg-slate-700 hover:bg-slate-800 hover:shadow-md active:scale-95 transition-all duration-200 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm shadow-sm'>Logout</button>
      
    </div>
  )
}

export default Navbar
