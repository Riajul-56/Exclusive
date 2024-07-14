import React from 'react'


const BCategoryItem = ({Icon,Name}) => {
  return (
    <div className='w-[170px] border border-Gray rounded py-[25px] text-center group hover:bg-light_red hover:duration-500 mt-[60px]'>
      <div className='text-[60px] pl-12 group-hover:text-white'>
        {Icon}
      </div>
      <h3 className='font-poppins font-normal font-base text-black mt-4 group-hover:text-white'>
      {Name}
        </h3>
    </div>
  )
}

export default BCategoryItem
