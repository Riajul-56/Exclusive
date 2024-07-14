import React from 'react'
import Containers from './Containers'
import { Link } from 'react-router-dom'
import { FaAngleDown } from "react-icons/fa6";

const Header = () => {
  return (
    <header className='bg-black py-3'>
      <Containers>
        <div className='relative '>

          <h3 className='w-[75%] lg:w-full text-center font-poppins text-white text-xs lg:text-sm font-normal leading-[21px] '>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <Link className='font-semibold leading-[24px] underline ml-2 '>ShopNow</Link>

          </h3>
          <select id="countries" className="w-[78px] bg-black text-white rounded-none focus:outline-none absolute right-0 top-0 ">
            <FaAngleDown />
            <option selected value="English">English</option>

            <option value="Bangla">Bangla</option>

          </select>
        </div>
      </Containers>
    </header>
  )
}

export default Header
