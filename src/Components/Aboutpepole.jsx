import { Flex } from 'antd'
import React from 'react'
import Images from './layout/Images'
import tom from '../assets/tom.png'
import emma from '../assets/emma.png'
import will from '../assets/will.png'
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";

const Aboutpepole = () => {
    return (
        <Flex className='justify-around mt-[140px]'>

            <div>
                <Images src={tom} />

                <h2 className='font-inter font-medium text-[32px] leading-[30px] tracking-[4%] text-black mt-[32px]'>Tom Cruise</h2>

                <h6 className='font-poppins font-normal text-4 leading-6 text-black mt-2'>Founder & Chairman</h6>

                <Flex className='gap-4 mt-4 text-xl'>
                    <CiTwitter />
                    <CiInstagram />
                    <RiLinkedinLine />
                </Flex>
            </div>


            <div>
                <Images src={emma} />

                <h2 className='font-inter font-medium text-[32px] leading-[30px] tracking-[4%] text-black mt-[32px]'>Emma Watson</h2>

                <h6 className='font-poppins font-normal text-4 leading-6 text-black mt-2'>Managing Director</h6>

                <Flex className='gap-4 mt-4 text-xl'>
                    <CiTwitter />
                    <CiInstagram />
                    <RiLinkedinLine />
                </Flex>
            </div>


            <div>
                <Images src={will} />

                <h2 className='font-inter font-medium text-[32px] leading-[30px] tracking-[4%] text-black mt-[32px]'>Will Smith</h2>

                <h6 className='font-poppins font-normal text-4 leading-6 text-black mt-2'>Product Designer</h6>

                <Flex className='gap-4 mt-4 text-xl'>
                    <CiTwitter />
                    <CiInstagram />
                    <RiLinkedinLine />
                </Flex>
            </div>

        </Flex>
    )
}

export default Aboutpepole
