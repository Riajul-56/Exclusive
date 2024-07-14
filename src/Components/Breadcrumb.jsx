import React from 'react'
import { useLocation } from 'react-router-dom';

const Breadcrumb = () => {
    let location = useLocation().pathname
    let locationpathname = location.split("/")[1]
    return (
        <div className='mt-[80px]'>
            <ul className='flex gap-3'>
                <li className='font-poppins font-normal text-sm text-Gray '>Home</li>
                <li className='font-poppins font-normal text-sm text-Gray '>/</li>
                <li className='font-poppins font-normal text-sm text-Gray '>{locationpathname}</li>
            </ul>
        </div>
    )
}

export default Breadcrumb
