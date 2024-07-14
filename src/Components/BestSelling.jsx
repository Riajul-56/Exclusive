import React from 'react'
import Containers from './layout/Containers'
import Title from './Title'
import Flex from './Flex'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'
import Shirt from '../assets/Shirt.png'
import Bag from '../assets/Bag.png'
import Cooler from '../assets/Cooler.png'
import Self from '../assets/Self.png'

const BestSelling = () => {
    return (
        <section className="mt-[80px]">
            <Containers >
                <Flex className="justify-between items-center">
                    <Title subtitle="This Month" title="Best Selling Products" />
                    <div className='text-center mt-5 lg:mt-[60px]'>
                        <Link className='inline-block font-poppins font-medium text-sm lg:text-base text-white bg-light_red hover:bg-black hover:duration-500 lg:py-4 py-2 px-5 lg:px-12 rounded-[4px] '>
                            View All
                        </Link>
                    </div>
                </Flex>
                <Flex className=" mt-7 lg:mt-[60px] justify-between flex-wrap">
                    <ProductCard
                        imageurl={Shirt}
                        Name="The north coat"
                        Price="$260"
                        Offer="$360"
                        review="(65)"
                    />
                    <ProductCard
                        imageurl={Bag}
                        Name="Gucci duffle bag"
                        Price="$960"
                        Offer="$1160"
                        review="(76)"
                    />
                    <ProductCard
                        imageurl={Cooler}
                        Name="RGB liquid CPU Cooler"
                        Price="$160"
                        Offer="$170"
                        review="(45)"
                    />
                    <ProductCard
                        imageurl={Self}
                        Name="Small BookSelf"
                        Price="$360"
                        review="(75)"
                    />
                </Flex>
            </Containers>
        </section>
    )
}

export default BestSelling
