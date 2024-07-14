import React from 'react'
import Images from './layout/Images'
import Flex from './Flex'
import List from './List'
import { CiHeart } from "react-icons/ci"
import { IoEyeOutline } from "react-icons/io5"
import { Rate } from 'antd'

const ProductCard = ({ imageurl, Name, Price, Offer, discount, review, color, rating }) => {
    return (
        <div className='w-full lg:w-[270px] sm:px-3 lg:px-0 lg:mb-8'>
            <div className='w-fulll relative h-[250px] bg-white_second rounded-[4px] flex justify-center items-center group overflow-hidden'>

                <h5
                    style={{ background: `${color}` }}
                    className='text-sm font-poppins font-normal text-white py-1 px-3 rounded-[4px] absolute top-3 left-3 '>
                    {discount}
                </h5>

                <div className='absolute top-3 right-3'>
                    <div className='bg-white p-[5px] rounded-full hover:bg-light_red '>
                        <CiHeart className='text-2xl ' />
                    </div>
                    <div className='bg-white p-[5px] rounded-full mt-[13px]'>
                        <IoEyeOutline className='text-2xl ' />
                    </div>
                </div>

                <Images src={imageurl} />

                <button className='font-poppins font-medium text-base text-white bg-black w-full group-hover:bottom-0 duration-500 absolute bottom-[-100%] left-0 py-2 rouded-b-[4px]  '>Add To Cart</button>

            </div>
            <h2 className='font-poppins font-medium text-base text-black leading-6 mt-4'>{Name}</h2>
            <Flex className='gap-4'>
                <h3 className='font-poppins font-medium text-base text-light_red mt-2 leading-6'>{Price}</h3>
                <del className='font-poppins font-medium text-base text-Gray mt-2 leading-6'>{Offer}</del>
            </Flex>

            <List className="flex my-2 gap-1">
                <Rate value={rating} disabled />
                <h3 className='font-poppins text-sm text-Gray font-semibold ml-2'>
                    ({review ? review.length : ""})
                </h3>
            </List>
        </div>
    )
}

export default ProductCard
