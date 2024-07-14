import React from 'react'
import Images from './layout/Images'

const CustomerItem = ({imgsrc,title,subtitle} )=> {
  return (
    <div className='text-center '>
        <div className='mx-auto w-[58px] h-[58px] bg-black rounded-full flex items-center justify-center border-[10px] border-gray-400 '>
            <Images className="w-[70%]" src={imgsrc}/>
        </div>
      <h3 className='font-poppins text-base lg:text-xl font-semibold leading-[28px] text-black mt-6 text-center'>
        {title}
      </h3>
      <h4 className='font-poppins text-xs lg:text-sm font-normal leading-[21px] text-black text-center'> 
        {subtitle}
      </h4>
    </div>
  )
}

export default CustomerItem
