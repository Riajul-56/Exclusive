import React from 'react'
import Sideimage from '../assets/Sideimage.png'
import Containers from '../Components/layout/Containers'
import Flex from '../Components/Flex'
import Images from '../Components/layout/Images'
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <section>
            <Containers>
                <Flex className=' mt-[60px] items-center lg:gap-[129px] flex-col md:flex-row' >

                    <div lassName='w-[805px]'>
                        <Images src={Sideimage} />
                    </div>

                    <div className='mt-8 w-[371px]' >
                        <h1 className='font-inter font-medium leading-[30px] text-[35px]' >Log in to Exclusive</h1>
                        <h5 className='font-poppins font-normal leading-6 text-base mt-6' >Enter your details below</h5>

                        <input type="email" placeholder='Email or Phone Number' className='font-poppins text-base leading-6 text-black mt-[48px] focus:outline-none border border-t-0 border-l-0 border-r-0 border-b-Gray w-full ' />

                        <input type="password" placeholder='Password' className='font-poppins text-base leading-6 text-black mt-[40px] focus:outline-none border border-t-0 border-l-0 border-r-0 border-b-Gray w-full  ' />


                        <Flex className='justify-between mt-10 items-center'>
                            <button className=' font-poppins font-medium text-4 text-white leading-6 rounded bg-light_red pt-4 pb-4 pr-[48px] pl-[48px] hover:bg-black hover:duration-500'>
                                Log In
                            </button>
                            <Link className='font-poppins font-normal text-light_red
                            text-4 leading-6 hover:text-black hover:duration-500'>
                                Forget Password?
                            </Link>

                        </Flex>



                    </div>
                </Flex>
            </Containers>

        </section>
    )
}

export default Login
