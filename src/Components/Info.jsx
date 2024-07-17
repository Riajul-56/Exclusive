import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import Flex from './Flex';

const Info = () => {
    return (
        <div className='mt-[120px] ml-[30px]'>
            <div className='border-b-2 '>
            <Flex className='items-center gap-4 '>
                <div className='bg-light_red rounded-full flex items-center justify-center text-white p-[10px]'>
                    <IoCallOutline />
                </div>
                <h6 className='font-poppins font-medium text-4 leading-6 text-black'>Call To Us</h6>
            </Flex>
            <div>

                <p className='font-poppins font-normal text-[14px] leading-[21px] text-black mt-6'>We are available 24/7, 7 days a week.</p>
                <p className='font-poppins font-normal text-[14px] leading-[21px] text-black mt-4 pb-[32px]'>Phone: +8801611112222</p>
            </div>

            </div>

            <Flex className='items-center gap-4 mt-[32px]'>
                <div className='bg-light_red rounded-full flex items-center justify-center text-white p-[10px]'>
                    <CiMail />
                </div>
                <h6 className='font-poppins font-medium text-4 leading-6 text-black'>Write To US</h6> 

            </Flex>
            <div>

                <p className='font-poppins font-normal text-[14px] leading-[21px] text-black mt-6 www-[250px]'>Fill out our form and we will contact<br/> you within 24 hours.</p>
                <p className='font-poppins font-normal text-[14px] leading-[21px] text-black mt-4'>Emails: customer@exclusive.com</p>
                <p className='font-poppins font-normal text-[14px] leading-[21px] text-black mt-4'>Emails: support@exclusive.com</p>
            </div>
        </div>
    )
}

export default Info
