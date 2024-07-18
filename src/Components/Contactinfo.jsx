import React from 'react'
import Flex from './Flex'

const Contactinfo = () => {
    return (
        <div>

            <Flex className='gap-4'>

                <input type="Name" placeholder='Your Name' className='font-poppins text-base leading-6 text-black focus:outline-none border border-none' />

                <input type="Email" placeholder='Your Email' className='font-poppins text-base leading-6 text-black  focus:outline-none border border-none' />

                <input type="text" placeholder='Your Number' className='font-poppins text-base leading-6 text-black focus:outline-none border border-none' />

            </Flex>
            <input type="text" placeholder='Your Massage' className='w-[737px] pb-[207px] mt-[32px] font-poppins text-base leading-6 text-black' />

            <button className='bg-light_red pt-4 pb-4 pl-[48px] pr-[48px] rounded mt-[32px] ml-[540px] text-white'>
                Send Massage
            </button>
        </div>
    )
}

export default Contactinfo
