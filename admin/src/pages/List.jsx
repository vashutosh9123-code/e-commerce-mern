import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import toast from 'react-hot-toast'

const List = ({token}) => {
  const [list,setList]=useState([])

  const fetchList = async()=>{
    try {
      const response= await axios.get(backendUrl + '/api/product/list')
      if(response.data.success){
        setList(response.data.products)
      }
      else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }

  }

  const removeProduct = async (id)=>{
    try {
      const response= await axios.post(backendUrl + '/api/product/remove',{id},{headers:{token}})
      if(response.data.success){
        toast.success(response.data.message)
        await fetchList()
      }
      else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    fetchList()
  },[])
  return (
    <>
    <p className='mb-2'>All Products List</p>

    <div className='flex flex-col gap-2'>

      <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-3 px-4 border border-slate-200 bg-slate-100 text-sm font-semibold rounded-t-md text-slate-700'>
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b className='text-center'>Action</b>
      </div>


      {
        list.map((item,index)=>(
          <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-3 px-4 border border-t-0 border-slate-200 text-sm hover:bg-slate-50 transition-colors text-slate-600 last:rounded-b-md' key={index}>
            <img className='w-12 rounded-sm shadow-sm' src={item.image[0]}/>
            <p className='font-medium text-slate-800'>{item.name}</p>
            <p>{item.category}</p>
            <p>{currency}{item.price}</p>
            <p onClick={()=>removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg text-red-500 hover:text-red-700 hover:scale-110 transition-transform'>X</p>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default List
