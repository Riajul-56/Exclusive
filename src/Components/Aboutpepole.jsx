import { Flex } from 'antd'
import React from 'react'
import Images from './layout/Images'
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";

const Aboutpepole = ({ imageurl, Name, position }) => {
    return (
        <Flex className='justify-around lg:mt-[140px] mt-[50px] flex-wrap'>

            <div className='lg:mt-0 mt-10'>
                <Images src={imageurl} />

                <h2 className='font-inter font-medium text-[32px] leading-[30px] tracking-[4%] text-black mt-[32px]'>{Name}</h2>

                <h6 className='font-poppins font-normal text-4 leading-6 text-black mt-2'>{position}</h6>

                <Flex className='gap-4 mt-4 text-xl'>
                    <CiTwitter />
                    <CiInstagram />
                    <RiLinkedinLine />
                </Flex>
            </div>


            {/* <div className='lg:mt-0 mt-10'>
                <Images src={emma} />

                <h2 className='font-inter font-medium text-[32px] leading-[30px] tracking-[4%] text-black mt-[32px]'>Emma Watson</h2>

                <h6 className='font-poppins font-normal text-4 leading-6 text-black mt-2'>Managing Director</h6>

                <Flex className='gap-4 mt-4 text-xl'>
                    <CiTwitter />
                    <CiInstagram />
                    <RiLinkedinLine />
                </Flex>
            </div> */}


            {/* <div className='lg:mt-0 mt-10'>
                <Images src={will} />

                <h2 className='font-inter font-medium text-[32px] leading-[30px] tracking-[4%] text-black mt-[32px]'>Will Smith</h2>

                <h6 className='font-poppins font-normal text-4 leading-6 text-black mt-2'>Product Designer</h6>

                <Flex className='gap-4 mt-4 text-xl'>
                    <CiTwitter />
                    <CiInstagram />
                    <RiLinkedinLine />
                </Flex>
            </div> */}

        </Flex>
    )
}

export default Aboutpepole
