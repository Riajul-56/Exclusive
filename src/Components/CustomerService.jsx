import React from 'react'
import Flex from "./Flex";
import Containers from './layout/Containers'
import CustomerItem from './CustomerItem'
import icondelivery from '../assets/icondelivery.png'
import secure from '../assets/secure.png'
import service from '../assets/service.png'

const CustomerService = () => {
  return (
    <section className='mt-[140px]'>
      <Containers>
     <Flex className='justify-around'>
     <CustomerItem imgsrc={icondelivery} title="FREE AND FAST DELIVERY" subtitle="Free delivery for all orders over $140"/>
        <CustomerItem imgsrc={service} title="24/7 CUSTOMER SERVICE" subtitle="Friendly 24/7 customer support"/>
        <CustomerItem imgsrc={secure} title="MONEY BACK GUARANTEE" subtitle="We reurn money within 30 days"/>
     </Flex>
      </Containers>
    </section>
  )
}

export default CustomerService
