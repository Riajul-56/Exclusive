import React from 'react'
import Containers from '../Components/layout/Containers'
import { Flex } from 'antd'
import Images from '../Components/layout/Images'
import Sideimage from '../assets/Sideimage.png'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom'
 
const Signup = () => {
  return (
    <section>
      <Containers>
        <Flex className=' mt-[60px] items-center lg:gap-[129px] flex-col md:flex-row' >

          <div className='lg:w-[805px]'>
            <Images src={Sideimage} />
          </div>

          <div className='mt-8 lg:mt-[110px] w-[371px]' >
            <h1 className='font-inter font-medium leading-[30px] text-[35px] w-full' >Create an account</h1>
            <h5 className='font-poppins font-normal leading-6 text-base mt-6' >Enter your details below</h5>

            <input type="Name" placeholder='Name' className='font-poppins text-base leading-6 text-black mt-[48px] focus:outline-none border border-t-0 border-l-0 border-r-0 border-b-Gray w-full ' />

            <input type="email" placeholder='Email or Phone Number' className='font-poppins text-base leading-6 text-black mt-[48px] focus:outline-none border border-t-0 border-l-0 border-r-0 border-b-Gray w-full ' />


            <input type="password" placeholder='Password' className='font-poppins text-base leading-6 text-black mt-[40px] focus:outline-none border border-t-0 border-l-0 border-r-0 border-b-Gray w-full  ' />

            <button className=' font-poppins font-medium text-4 text-white leading-6 rounded bg-light_red pt-4 pb-4 pr-[48px] pl-[48px] hover:bg-black hover:duration-500 mt-10 w-full'>
              Create Account
            </button>

            <Link >
             <div className='flex items-center gap-4 mt-10 lg:ml-10 ml-[90px] '>
             <FcGoogle className='text-2xl' />
             <h3 className='font-poppins font-normal text-4 text-black leading-6 '>Sign up with Google</h3>
             </div>
            </Link>

            <Flex className='item-center mt-[32px] gap-4 lg:ml-7 ml-[80px]'>
              <div>
              <h4 className='font-poppins font-normal text-4 text-black leading-6'>Already have account?</h4>
              </div>

              <div>
              <Link className='hover:text-light_red border border-t-0 border-l-0 border-r-0 border-b-Gray'>Log in</Link>
              </div>
            </Flex>

          </div>
        </Flex>
      </Containers>

    </section>
  )
}

export default Signup
