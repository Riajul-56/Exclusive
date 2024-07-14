import React from 'react'
import Containers from './layout/Containers'
import Title from './Title'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Food from '../assets/Food.png'
import Camera from '../assets/Camera.png'
import laptop from '../assets/laptop.png'
import Curology from '../assets/Curology.png'


const ExploreProducts = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", justifyContent: 'center', alignItems: 'center', background: "white_second", width: '46px', height: '46px', borderRadius: '50%', position: 'absolute', right: '0%', top: '-96px' }}
        onClick={onClick}
      ><FaArrowRightLong /></div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", justifyContent: 'center', alignItems: 'center', background: "white_second", width: '46px', height: '46px', borderRadius: '50%', position: 'absolute', right: '50px', top: '-96px' }}
        onClick={onClick}
      ><FaArrowLeftLong /></div>
    );
  }

  var settings = {
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    slidesPerRow: 2,
    autoplay:true,
    autoplaySpeed:2000,
  
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: '',
          prevArrow: '',
          arrows: false,
        }
      },
      {
        breakpoint: 737,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: '',
          prevArrow: '',
          arrows: false,
        }
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: '',
          prevArrow: '',
          arrows: false,
        }
      }
    ]
  };

  return (
    <section className='mt-[71px]'>
      <Containers>
        <div>
          <div className='mb-[60px]'>
            <Title subtitle="Our Products" title="Explore Our Products" />

          </div>

          <Slider {...settings}>
            <ProductCard 
              imageurl={Food}
              Name="Breed Dry Dog Food "
              Price="$100"
              review="(35)"
            />
            <ProductCard
              imageurl={Food}
              Name="Breed Dry Dog Food "
              Price="$100"
              review="(35)"
            />
            <ProductCard
              imageurl={Camera}
              Name="CANON EOS DSLR Camera "
              Price="$360"
              review="(95)"
            />
            <ProductCard
              imageurl={Camera}
              Name="CANON EOS DSLR Camera "
              Price="$360"
              review="(95)"
            />
            <ProductCard
              imageurl={laptop}
              Name="ASUS FHD Gaming Laptop "
              Price="$700"
              review="(325)"
            />
            <ProductCard
              imageurl={laptop}
              Name="ASUS FHD Gaming Laptop "
              Price="$700"
              review="(325)"
            />
            <ProductCard
              imageurl={Curology}
              Name="Curology Product Set  "
              Price="$500"
              review="(145)"
            />
            <ProductCard
              imageurl={Curology}
              Name="Curology Product Set  "
              Price="$500"
              review="(145)"
            />
          </Slider>

          <div className='text-center mt-5 lg:mt-[60px]'>
            <Link className='inline-block font-poppins font-medium text-sm lg:text-base text-white bg-light_red hover:bg-black hover:duration-500 lg:py-4 py-2 px-5 lg:px-12 rounded-[4px] '>
              View All Products
            </Link>
          </div>

        </div>
      </Containers>

    </section>
  )
}

export default ExploreProducts
