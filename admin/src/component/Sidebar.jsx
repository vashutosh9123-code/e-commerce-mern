import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r border-slate-200 bg-white shadow-[2px_0_15px_rgba(0,0,0,0.03)]'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>

            <NavLink className='flex items-center gap-3 border border-slate-200 border-r-0 px-3 py-2 rounded-l-lg hover:bg-slate-50 transition-colors duration-200' to='/add'>
            <img className='w-5 h-5 ' src={assets.add_icon}/>
            <p className='hidden md:block'>Add Items</p>
            </NavLink>

            <NavLink className='flex items-center gap-3 border border-slate-200 border-r-0 px-3 py-2 rounded-l-lg hover:bg-slate-50 transition-colors duration-200' to='/list'>
            <img className='w-5 h-5 ' src={assets.order_icon}/>
            <p className='hidden md:block'>List Items</p>
            </NavLink>

            <NavLink className='flex items-center gap-3 border border-slate-200 border-r-0 px-3 py-2 rounded-l-lg hover:bg-slate-50 transition-colors duration-200' to='/order'>
            <img className='w-5 h-5 ' src={assets.order_icon}/>
            <p className='hidden md:block'>Orders</p>
            </NavLink>
        </div>
      
    </div>
  )
}

export default Sidebar
