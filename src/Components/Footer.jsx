import React from 'react'
import Containers from './layout/Containers'
import Flex from './Flex'
import { IoSend } from "react-icons/io5"
import Qrcode from '../assets/Qrcode.png'
import GooglePlay from '../assets/GooglePlay.png'
import appstore from '../assets/appstore.png'
import Images from './layout/Images'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa"
import { LuTwitter } from "react-icons/lu"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='bg-black mt-[140px] pt-[80px] pb-6 relative'>
      <Containers>
        <Flex className='justify-between'>
          <div>
            <h1 className='text-2xl font-inter font-bold leading-6 text-white tracking-[3px]'>Exclusive</h1>

            <h3 className='text-xl font-poppins font-medium leading-[28px] text-white  mt-6'>Subscribe</h3>

            <h4 className='text-base font-poppins font-normal leading-6 text-white mt-6'>Get 10% off your first order</h4>

            <div className='w-[217px] relative'>
              <input placeholder='Enter your email' className=' w-full bg-black border-white border placeholder:text-Gray placeholder:font-poppins px-4 py-3 mt-4 text-white ' type="text" />

              <IoSend className='text-white absolute right-3 top-8 text-xl  ' />

            </div>
          </div>

          <div>
            <h1 className='text-xl font-poppins font-meduim leading-[28px] text-white'>Support</h1>

            <h4 className='text-base font-poppins font-normal w-[175px] leading-6 text-white mt-6'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</h4>

            <h4 className='text-base font-poppins font-normal leading-6 text-white mt-4'>exclusive@gmail.com</h4>

            <h4 className='text-base font-poppins font-normal leading-6 text-white mt-4'>+88015-88888-9999</h4>

          </div>

          <div>
            <h1 className='text-xl font-poppins font-meduim leading-[28px] text-white'>Account</h1>

            <h4 className='text-base font-poppins font-normal leading-6 text-white mt-6'>My Account</h4>

            <h4 className='text-base font-poppins font-normal  leading-6 text-white mt-4'>Login / Register</h4>

            <h4 className='text-base font-poppins font-normal  leading-6 text-white mt-4'>Cart</h4>

            <h4 className='text-base font-poppins font-normal  leading-6 text-white mt-4'>Wishlist</h4>

            <h4 className='text-base font-poppins font-normal  leading-6 text-white mt-4'>Shop</h4>

          </div>

          <div>
            <h1 className='text-xl font-poppins font-meduim leading-[28px] text-white'>Quick Link</h1>

            <h4 className='text-base font-poppins font-normal leading-6 text-white mt-6'>Privacy Policy</h4>

            <h4 className='text-base font-poppins font-normal  leading-6 text-white mt-4'>Terms Of Use</h4>

            <h4 className='text-base font-poppins font-normal  leading-6 text-white mt-4'>FAQ</h4>

            <h4 className='text-base font-poppins font-normal  leading-6 text-white mt-4'>Contact</h4>

          </div>

          <div>
            <h1 className='text-xl font-poppins font-meduim leading-[28px] text-white'>Download App</h1>

            <h4 className='text-lg font-poppins font-medium leading-3 text-white mt-6'>Save $3 with App New User Only</h4>

            <Flex className='mt-4 gap-2'>
              <Link>
                <Images src={Qrcode} />
              </Link>

              <Link>
                <Images src={GooglePlay} />
                <Images className='mt-2' src={appstore} />
              </Link>

            </Flex>

            <Link className='flex text-white  mt-6 text-xl gap-6 '>
              <FaFacebookF />
              <LuTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </Link>


          </div>

        </Flex>

        <h3 className='text-base font-poppins font-normal  leading-6 text-Gray text-center mt-[60px]'>Copyright Rimel 2022. All right reserved
        </h3>

      </Containers>
      <hr className='w-full absolute bottom-[60px] left-0 !border border-Gray ' />
    </footer>
  )
}

export default Footer
