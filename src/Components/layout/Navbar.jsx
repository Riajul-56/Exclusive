import React, { useState } from "react";
import Containers from "./Containers";
import Images from "./Images";
import List from "../List";
import ListItem from "../ListItem";
import { CiHeart } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import Flex from "../Flex";
import { Link } from "react-router-dom";

const Navbar = () => {

    let [MenuShow, setMenuShow] = useState(false)
    let handelMenu = () => {
        setMenuShow(!MenuShow)
    }

    return (
        <nav className="mt-10 border-b pb-4 z-50 relative">
            <Containers>
                <Flex className="justify-between items-center">
                    
                    <Link to='/'>
                        <Images src="images/logo.png" alt="logo" />
                    </Link>

                    <div className={` ${MenuShow ? "block" : "hidden"} 
                    lg:flex items-center lg:w-[73%] w-full justify-between absolute left-0 top-10 lg:static bg-black lg:bg-transparent  p-5 lg:p-0`}>

                        <List>
                            <ListItem className="font-=poppins font-normal leading-6 font-base lg:text-black text-white after:content-[''] after:w-0 mt-3 lg:mt-0 lg:hover:after:w-full block lg:inline-block mr-[48px]  after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0 relative after:duration-500">
                                {" "}
                                <Link to='/'>Home</Link>
                            </ListItem>

                            <ListItem className="font-=poppins font-normal leading-6 font-base lg:text-black text-white after:content-[''] after:w-0 mt-3 lg:mt-0 lg:hover:after:w-full block lg:inline-block mr-[48px]  after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0 relative after:duration-500">
                                {" "}
                                <Link to='/Shop'>Shop</Link>
                            </ListItem>

                            <ListItem className="font-=poppins font-normal leading-6 font-base lg:text-black text-white after:content-[''] after:w-0 mt-3 lg:mt-0 lg:hover:after:w-full block lg:inline-block mr-[48px]  after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0 relative after:duration-500">
                                {" "}
                                <Link to='/Contact'>Contact</Link>
                            </ListItem>

                            <ListItem className="font-=poppins font-normal leading-6 font-base lg:text-black text-white after:content-[''] after:w-0 mt-3 lg:mt-0 lg:hover:after:w-full block lg:inline-block mr-[48px]  after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0 relative after:duration-500">
                                {" "}
                                <Link to='/About'>About</Link>
                            </ListItem>

                            <ListItem className="font-=poppins font-normal leading-6 font-base lg:text-black text-white after:content-[''] after:w-0 mt-3 lg:mt-0 lg:hover:after:w-full block lg:inline-block mr-[48px]  after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0 relative after:duration-500">
                                {" "}
                                <Link to='/Sign Up'>Sign Up</Link>
                            </ListItem>

                        </List>

                        <Flex className="items-center gap-6">
                            <div className="relative w-[243px] mt-5 lg:mt-0 ">
                                <input className="bg-white_second w-full py-[10px] px-5 placeholder:font-poppins text-xs leading-[18px] placeholder:text-Gray rounded-lg " type="text" placeholder="What are you looking for?" />
                                <IoSearchOutline className="absolute top-3 right-3 text-base " />
                            </div>

                            <Flex className="gap-4 items-center mt-4 lg:mt-0 ">
                                <CiHeart className="text-2xl text-white lg:text-black" />
                                <HiOutlineShoppingCart className="text-2xl text-white lg:text-black" />
                            </Flex>

                        </Flex>

                    </div>
                    
                    <IoMdMenu onClick={handelMenu} className="lg:hidden text-2xl absolute top-0 right-2" />
                </Flex>
            </Containers>
        </nav>
    );
};

export default Navbar;
