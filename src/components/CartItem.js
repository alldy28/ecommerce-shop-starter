import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'

import { CartContext } from '../contexts/CartContext'

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext)

  //destructure item
  const { id, title, image, price, amount } = item
  return (
    <div>
      <div
        div
        className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 font - light text - green - 50 w-full font-light text-gray-500'
      >
        <div className='w-full min-h-[150px] flex items-center gap-x-4'>
          <Link>
            {' '}
            <img className='max-w-[80px]' src={image} alt='' />{' '}
          </Link>
          <div className='w-full flex flex-col'>
            <div div className='flex justify-between mb-2'>
              <div>
                <Link to={`/product/${id}`}>{title}</Link>
              </div>
              <div
                onClick={() => removeFromCart(id)}
                className='text-xl cursor-pointer'
              >
                <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
              </div>
            </div>
            <div className=' flex gap-x-2 h-[36px] text-sm'>
              <div
                className='flex flex-1 max-w-[100px]  items-center h-full border
            text-primary font-medium'
              >
                <div
                  onClick={() => {
                    decreaseAmount(id)
                  }}
                  className='flex-1 flex justify-center items-center cursor-pointer 
              h-full'
                >
                  <IoMdRemove />
                </div>
                <div className='h-full flex justify-center items-center px-2'>
                  {amount}
                </div>
                <div
                  onClick={() => {
                    increaseAmount(id)
                  }}
                  className='flex-1 h-full flex justify-center items-center cursor-pointer'
                >
                  <IoMdAdd />
                </div>
              </div>
              <div className='flex-1 flex items-center justify-around'>
                $ {price}
              </div>
              <div className='flex-1 flex justify-end items-center text-primary font-medium'>{`$ ${parseFloat(
                item.price * amount
              ).toFixed(2)}`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
