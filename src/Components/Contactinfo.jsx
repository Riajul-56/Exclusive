import React from 'react'
import Flex from './Flex'

const Contactinfo = () => {
    return (
        <div>
            <Flex className='gap-4 flex-wrap'>

                <input type="Name" placeholder='Your Name' className='font-poppins text-base leading-6 text-black focus:outline-none border border-Gray
                  border-b border-t-0 border-l-0 border-r-0' />

                <input type="Email" placeholder='Your Email' className='font-poppins text-base leading-6 text-black  focus:outline-none border border-Gray
                  border-b border-t-0 border-l-0 border-r-0' />

                <input type="text" placeholder='Your Number' className='font-poppins text-base leading-6 text-black focus:outline-none border border-Gray
                border-b border-t-0 border-l-0 border-r-0' />

            </Flex>
            <input type="text" placeholder='Your Massage' className='lg:w-[737px] w-full pb-[207px] mt-[32px] font-poppins text-base leading-6 text-black'></input>

            <button className='bg-light_red pt-4 pb-4 pl-[48px] pr-[48px] rounded mt-[32px] lg:ml-[540px] text-white hover:bg-black hover:text-white duration-500'>
                Send Massage
            </button>
        </div>
    )
}

export default Contactinfo
