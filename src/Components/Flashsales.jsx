import React from 'react'
import Containers from './layout/Containers'
import Title from './Title'
import Salescounttime from './Salescounttime'
import Flex from './Flex'
import ProductCard from './ProductCard'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import keyboard from '../assets/keyboard.png';
import Productimage from '../assets/Productimage.png'
import TV from '../assets/TV.png'
import chair from '../assets/chair.png'

const Flashsales = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "flex", justifyContent: 'center', alignItems: 'center', background: "white_second", width: '46px', height: '46px', borderRadius: '50%', position: 'absolute', right: '0%', top: '-96px', }}
                onClick={onClick}
            ><FaArrowRightLong /></div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "flex", justifyContent: 'center', alignItems: 'center', background: "white_second", width: '46px', height: '46px', borderRadius: '50%', position: 'absolute', right: '50px', top: '-96px', }}
                onClick={onClick}
            ><FaArrowLeftLong /></div>
        );
    }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
        <section className='lg:mt-[140px] mt-10'>
            <Containers>
                <div className='border-b pb-5 lg:pb-[60px]'>
                    <Flex className="lg:gap-[87px] mb-10 flex-col lg:flex-row">
                        <Title subtitle="Today’s" title="Flash Sales" />
                        <Salescounttime />
                    </Flex>

                    <Slider {...settings}>        
                        <ProductCard
                            imageurl={Productimage}
                            Name="HAVIT HV-G92 Gamepad"
                            Price="$120"
                            Offer="$160"
                            discount='40%'
                            review="(88)"
                            color="#DB4444"
                        />
                        <ProductCard
                            imageurl={keyboard}
                            Name="AK-900 Wired Keyboard"
                            Price="$960"
                            Offer="$1160"
                            discount='35%'
                            review="(95)"
                            color="#DB4444"
                        />
                        <ProductCard
                            imageurl={TV}
                            Name="IPS LCD Gaming Monitor"
                            Price="$370"
                            Offer="$400"
                            discount='30%'
                            review="(75)"
                            color="#DB4444"
                        />
                        <ProductCard
                            imageurl={chair}
                            Name="S-Series Comfort Chair "
                            Price="$375"
                            Offer="$400"
                            discount='25%'
                            review="(100)"
                            color="#DB4444"
                        />
                        <ProductCard
                            imageurl={keyboard}
                            Name="HAVIT HV-G92 Gamepad"
                            Price="$120"
                            Offer="$160"
                            discount='25%'
                            review="(95)"
                            color="#DB4444"
                        />
                        <ProductCard
                            imageurl={TV}
                            Name="HAVIT HV-G92 Gamepad"
                            Price="$120"
                            Offer="$160"
                            discount='25%'
                            review="(75)"
                            color="#DB4444"
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

export default Flashsales
