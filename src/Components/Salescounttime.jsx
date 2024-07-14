import React, { useEffect, useState } from 'react'
import Flex from './Flex'
import Semiclone from '../assets/Semiclone.png'
import Images from './layout/Images'
import { countDownDateAndTime } from 'countdown-date-time';

const Salescounttime = () => {

  const conduct_date = '2026-06-30 16:54:00';
  let [count, setCount] = useState({})
  useEffect(() => {
    const countDown = countDownDateAndTime(conduct_date);
    setCount(countDown)
  }, [count])

  return (
    <Flex className="items-center gap-[17px] mt-5">
      <div>
        <h4 className='font-poppins text-xs font-medium text-black leading-[18px] '>Days</h4>
        <h2 className='font-inter text-2xl lg:text-[32px] font-bold text-black leading-[30px] tracking-[4%]mt-1'>{count.days}</h2>
      </div>
      <Images className="mt-4" src={Semiclone} />

      <div>
        <h4 className='font-poppins text-xs font-medium text-black leading-[18px] '>Hours</h4>
        <h2 className='font-inter text-2xl lg:text-[32px] font-bold text-black leading-[30px] tracking-[4%]mt-1'>{count.hours}</h2>
      </div>
      <Images className="mt-4" src={Semiclone} />

      <div>
        <h4 className='font-poppins text-xs font-medium text-black leading-[18px] '>Minutes</h4>
        <h2 className='font-inter text-2xl lg:text-[32px] font-bold text-black leading-[30px] tracking-[4%]mt-1'>{count.minutes}</h2>
      </div>
      <Images className="mt-4" src={Semiclone} />

      <div>
        <h4 className='font-poppins text-xs font-medium text-black leading-[18px] '>Seconds</h4>
        <h2 className='font-inter text-2xl lg:text-[32px] font-bold text-black leading-[30px] tracking-[4%]mt-1'>{count.seconds}</h2>
      </div>


    </Flex>


  )
}

export default Salescounttime
