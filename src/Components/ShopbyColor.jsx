import React from 'react'
import ProductColor from './ProductColor'

const ShopbyColor = () => {
  return (
    <div className='mt-[40px]'>
      <h2 className='font-poppins font-bold text-xl text-black mb-[15px]'>Shop by Color</h2>
      <ul>
        <ProductColor title='Color 1' color='black' />
        <ProductColor title='Color 2' color='red' />
        <ProductColor title='Color 3' color='#00FF38' />
      </ul>
    </div>
  )
}

export default ShopbyColor
