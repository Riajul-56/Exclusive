import React from 'react'
import Containers from './layout/Containers'
import Title from './Title'
import BCategoryItem from './BCategoryItem'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiSmartphone } from "react-icons/gi";
import { GrMonitor } from "react-icons/gr";
import { TbDeviceWatchStats } from "react-icons/tb";
import { MdOutlineCameraAlt } from "react-icons/md";
import { MdOutlineHeadphones } from "react-icons/md";
import { LuGamepad } from "react-icons/lu";
import { BsEarbuds } from "react-icons/bs";
import { LuCable } from "react-icons/lu";

const BCategories = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: 'center', alignItems: 'center', background: "white_second", width: '46px', height: '46px', borderRadius: '50%' ,position:'absolute', right:'0%', top:'-45px' }}
            onClick={onClick}
        ><FaArrowRightLong /></div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: 'center', alignItems: 'center', background: "white_second", width: '46px', height: '46px', borderRadius: '50%',position:'absolute', right:'50px', top:'-45px'}}
            onClick={onClick}
        ><FaArrowLeftLong /></div>
    );
}
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    cssEase:'ease-out',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
          breakpoint: 1025,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow:'',
            prevArrow:'',
            arrows:false,
          }
        },
        {
          breakpoint: 737,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow:'',
            prevArrow:'',
            arrows:false,
          }
        },
        {
          breakpoint: 667,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            nextArrow:'',
            prevArrow:'',
            arrows:false,
          }
        }
    ]
  }
  return (
    <section className='mt-[80px]'>
      <Containers>
        <div className='border-b pb-5 lg:pb-[70px]'>
        <Title subtitle="Categories" title="Browse By Category" />
        <div>

          <Slider {...settings}>
            <BCategoryItem 
           Icon={<GiSmartphone/>}
            Name="Phones"
            />

            <BCategoryItem 
             Icon={<GrMonitor />}
             Name="Computers"
             />
            <BCategoryItem
             Icon={<TbDeviceWatchStats />}
             Name="SmartWatch" 
             />
            <BCategoryItem
             Icon={<MdOutlineCameraAlt />}
             Name="Camera" 
             />
            <BCategoryItem
             Icon={<MdOutlineHeadphones />}
             Name="HeadPhones" 
             />
            <BCategoryItem
             Icon={<LuGamepad />}
             Name="Gaming" 
             />
            <BCategoryItem
             Icon={<BsEarbuds />}
             Name="Earbuds"
              />
            <BCategoryItem
             Icon={<LuCable />}
             Name="Cable"
              />
            <BCategoryItem
             Icon={<GiSmartphone/>}
             Name="Phones"
              />
          </Slider>



        </div>
        </div>
       
      </Containers>

    </section>
  )
}

export default BCategories
