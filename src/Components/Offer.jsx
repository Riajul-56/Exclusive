import React from 'react'
import Containers from './layout/Containers'
import Categoryimage from '../assets/Categoryimage.png'
import Images from './layout/Images'
import { Link } from 'react-router-dom'

const Offer = () => {
  return (
    <section className='mt-5 lg:mt-[140px]'>
      <Containers>
        <Link>
        <Images src={Categoryimage}/>
        </Link>
      </Containers>
    </section>
  )
}

export default Offer
