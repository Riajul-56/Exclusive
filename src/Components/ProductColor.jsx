import React from 'react'

const ProductColor = ({ title, color }) => {
  return (

    <li className='font-poppins font-normal text-sm text-Gray mb-[18px] '>
      <span style={{ background: `${color}` }}
        className={`w-[11px] h-[11px] inline-block rounded-full mr-[10px]`}></span>
      {title}
    </li>

  )
}

export default ProductColor
