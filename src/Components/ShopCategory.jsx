import React, { useEffect, useState } from 'react'
import List from './List'
import ListItem from './ListItem'

const ShopCategory = () => {
    let [allproduct, setallproduct] = useState([])
    return (
        <div>
            <h2 className='font-poppins font-bold text-xl text-black'>Shop by Category</h2>

            <List className='mt-[15px]'>
                {allproduct.map((item) => (
                    <ListItem className="font-poppins text-base font-normal leading-6 lg:text-black flex justify-between items-center mt-4">
                        {item}
                    </ListItem>

                ))}
            </List>
        </div>
    )
}

export default ShopCategory
