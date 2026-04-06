 import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
 
 const ProductItem = ({ id, image, name, price }) => {

    const { currency } = useContext(ShopContext)

    return (
        <Link className='text-gray-700 cursor-pointer group block p-3 rounded-2xl hover:shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:-translate-y-[2px] transition-all duration-300 bg-white border border-transparent hover:border-gray-50' to={`/product/${id}`}>
            <div className='overflow-hidden rounded-xl bg-gray-50'>
                <img className='group-hover:scale-105 transition-transform duration-700 ease-out w-full' src={image[0]} />
            </div>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{currency}{price}</p>
        </Link>
    )
}
 
 export default ProductItem
 