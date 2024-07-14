import React, { useEffect, useState } from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Containers from '../Components/layout/Containers'
import Flex from '../Components/Flex'
import ShopCategory from '../Components/ShopCategory'
import ShopbyColor from '../Components/ShopbyColor'
import Shopbyproducts from '../Components/Shopbyproducts'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { productReducer } from '../slices/productSlices'

const Shop = () => {

    let dispatch = useDispatch()
    let [allproduct, setallproduct] = useState([])
    let [loading, setLoading] = useState(true)

    async function getAllproduct() {
        let data = await axios.get('https://dummyjson.com/products')
        setallproduct(data.data.products)
        dispatch(productReducer(data.data.products))
        setLoading(false)
    }
    useEffect(() => {
        getAllproduct()
    }, [])

    return (
        <section>
            <Containers>
                <Breadcrumb />
                <Flex className='justify-between'>
                    <div className='w-[20%] mt-[50px]'>
                        <ShopCategory allproduct={ allproduct}/>
                        <ShopbyColor />
                    </div>
                    <div className='w-[75%] mt-[50px]'>
                        <Shopbyproducts loading={loading} />
                    </div>
                </Flex>
            </Containers>
        </section>
    )
}

export default Shop
