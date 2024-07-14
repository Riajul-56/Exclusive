import React, { useState } from 'react'
import List from './List'
import ListItem from './ListItem'
import { TfiAngleRight } from "react-icons/tfi";
import { BiSolidCategory } from "react-icons/bi";
import Flex from './Flex';
import { FaAngleDown } from "react-icons/fa6";

const Category = () => {

    let [CategoryShow, setCategoryShow] = useState(false)


    return (
        <div className='mr-4'>
            
            <div onClick={() => setCategoryShow(!CategoryShow)}
                className="flex items-center gap-2 mt-2 lg:hidden hover:bg-black hover:text-white w-[150px] rounded p-2">

                <BiSolidCategory className='text-lg' />

                <Flex className="items-center gap-2">
                    <h2 className='font-poppins text-lg text-black select-none '>Category</h2>
                    <FaAngleDown />

                </Flex>

            </div>
            <List className={`lg:mt-7 mt-3 z-50 absolute lg:static bg-black lg:bg-transparent text-white p-5 lg:p-0 lg:w[20%] w-full lg:block ${CategoryShow ? 'block' : 'hidden'} `}>
                <ListItem className="font-poppins text-base font-normal leading-6 lg:text-black flex justify-between items-center mt-4">
                    Woman’s Fashion {true ? <TfiAngleRight /> : ""}
                </ListItem>

                <ListItem className="font-poppins text-base font-normal leading-6 lg:text-black flex justify-between items-center mt-4">
                    Men’s Fashion {true ? <TfiAngleRight /> : ""}
                </ListItem>

                <ListItem className="font-poppins text-base font-normal leading-6 lg:text-black flex justify-between items-center mt-4">
                    Electronics {false ? <TfiAngleRight /> : ""}
                </ListItem>

                <ListItem className="font-poppins text-base font-normal leading-6 lg:text-black flex justify-between items-center mt-4">
                    Home & Lifestyle{false ? <TfiAngleRight /> : ""}
                </ListItem>

                <ListItem className="font-poppins text-base font-normal leading-6 lg:text-black flex justify-between items-center mt-4">
                    Medicine {false ? <TfiAngleRight /> : ""}
                </ListItem>

                <ListItem className="font-poppins text-base font-normal leading-6 lg:text-black flex justify-between items-center mt-4">
                    Sports & Outdoor {false ? <TfiAngleRight /> : ""}
                </ListItem>

                <ListItem className="font-poppins text-base font-normal leading-6 lg:text-black flex justify-between items-center mt-4">
                    Baby’s & Toys{false ? <TfiAngleRight /> : ""}
                </ListItem>

                <ListItem className="font-poppins text-base font-normal leading-6 lg:text-black flex justify-between items-center mt-4">
                    Groceries & Pets{false ? <TfiAngleRight /> : ""}
                </ListItem>

                <ListItem className="font-poppins text-base font-normal leading-6 lg:text-black flex justify-between items-center mt-4">
                    Health & Beauty {false ? <TfiAngleRight /> : ""}
                </ListItem>
            </List>
        </div>
    )
}

export default Category
