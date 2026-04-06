import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar.jsx'
import Sidebar from './component/Sidebar.jsx'
import { Route,Routes, Navigate } from 'react-router-dom'
import Add from './pages/Add.jsx'
import List from './pages/List.jsx'
import Order from './pages/Order.jsx'
import Login from './component/Login.jsx'
import { Toaster } from 'react-hot-toast'


 export const backendUrl = import.meta.env.VITE_BACKEND_URL
 export const currency='₹'

const App = () => {
  const[token,setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')

  useEffect(()=>{
    localStorage.setItem('token',token)
  },[token])
  return (
   <div className='bg-slate-50 min-h-screen font-outfit text-slate-700'>
    <Toaster/>
    {
      token==='' ? <Login setToken={setToken}/> 
      : <>
    <Navbar setToken={setToken}/>
    <hr/>
    <div className='flex w-full'>
      <Sidebar/>
      <div className='w-[70%] mx-auto ml-[max(5vh,25px)] my-8 text-gray-600 text-base'>
        <Routes>
          <Route path='/' element={<Navigate to='/add' />} />
          <Route path='/add' element={<Add token={token}/>}/>
          <Route path='/list' element={<List token={token}/>}/>
          <Route path='/order' element={<Order token={token}/>}/>
        </Routes>

      </div>
    </div>
    </>
    }
    
   </div>
  )
}

export default App
