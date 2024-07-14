import React from 'react'
import Containers from './layout/Containers'
import Title from './Title'
import Flex from './Flex'
import Arrival_one from '../assets/Arrival_one.png'
import Arrival_two from '../assets/Arrival_two.png'
import Arrival_three from '../assets/Arrival_three.png'
import Arrival_four from '../assets/Arrival_four.png'

import Images from "./layout/Images";

const NewArrival = () => {
  return (
    <section className='mt-[70px] lg:mt-[162px]'>
      <Containers>
      <Title subtitle="Featured" title="New Arrival" />
      <Flex className="gap-5 md:mt-[60px] mt-6 flex-col lg:flex-row justify-between">
        <div className=' xl:w-auto'>
          <Images src={Arrival_one} alr="Arrival_one"/>
        </div>

        <div className='flex flex-col justify-between gap-3 xl:gap-0'>
        <Images src={Arrival_two} alr="Arrival_two"/>

        <Flex className="justify-between flex-col md:flex-row gap-3 lg:gap-0">
        <Images src={Arrival_three} alr="Arrival_three"/>
        <Images src={Arrival_four} alr="Arrival_four"/>
        </Flex>

        </div>

      </Flex>
      </Containers>
    </section>
  )
}

export default NewArrival
