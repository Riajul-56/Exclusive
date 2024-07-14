import React from 'react'

const Title = ({ subtitle, title }) => {
  return (
    <div>
      <h4 className='text-light_red font-poppins relative text-base font-semibold after:w-[20px] after:h-[40px] after:content-[""] after:absolute after:top-2/4 after:translate-y-[-50%] after:left-0 pl-[25px] lg:pl-[36px] after:bg-light_red after:rounded-[4px]  '>{subtitle}
      </h4>

      <h2 className='font-inter text:3xl lg:text-[36px] text-black leading-[48px] font-semibold mt-2 lg:mt-6 '>{title}
      </h2>

    </div>
  )
}

export default Title
