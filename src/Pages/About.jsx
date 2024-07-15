import React from 'react'
import Containers from '../Components/layout/Containers'
import Breadcrumb from '../Components/Breadcrumb'
import Flex from '../Components/Flex'
import Story from '../assets/Story.png'
import Images from '../Components/layout/Images'
import CustomerItem from '../Components/CustomerItem'
import icon_shop from '../assets/icon_shop.png'
import icon_shopping from '../assets/Icon_Shopping.png'
import icon_Moneybag from '../assets/Icon_Moneybag.png'
import Aboutpepole from '../Components/Aboutpepole'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const About = () => {

    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div style={{
                bottom: "-10%",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)"
            }}
            >
                <ul style={{
                    margin: "0px", display: "flex", gap: "12px",
                }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "12px",
                    height: "12px",
                    background: "#808080",
                    borderRadius: "50%"
                }}
            >
            </div>
        )
    };

    return (
        <section >
            <Containers>

                <Breadcrumb />

                <Flex className='justify-between'>
                    <div className='mt-[179px]'>
                        <h1 className='font-inter font-semibold leading-[64px] text-[54px] text-black'>Our Story</h1>

                        <p className='font-poppins font-normal text-4 leading-[26px] text-black w-[525px] mt-10'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>

                        <p className='font-poppins font-normal text-4 leading-[26px] text-black w-[505px] mt-6'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>

                    </div>
                    <div className='mt-[42px] absolute right-0 top-[237px] w-[705px] h-[609px]'>
                        <Images src={Story} />
                    </div>
                </Flex>

                <Flex className='justify-around mt-[276px]'>

                    <div className="hover:bg-light_red duration-500 pt-[30px] pb-[30px] pr-[50px] pl-[50px] rounded">
                        <CustomerItem imgsrc={icon_shop} title="10.5k " subtitle="Sallers active our site" />
                    </div>

                    <div className="hover:bg-light_red duration-500 pt-[32px] pb-[32px] pr-[35px] pl-[35px] border-red-300 rounded">
                        <CustomerItem imgsrc={icon_Moneybag} title="33k " subtitle="Mopnthly Produduct Sale" />
                    </div>

                    <div className="hover:bg-light_red duration-500 pt-[30px] pb-[30px] pr-[23px] pl-[23px] border-red-300 rounded">
                        <CustomerItem imgsrc={icon_shopping} title="45.5k" subtitle="Customer active in our site" />
                    </div>

                    <div className="hover:bg-light_red duration-500 pt-[30px] pb-[30px] pr-[29px] pl-[28px] border-red-300 rounded">
                        <CustomerItem imgsrc={icon_Moneybag} title="25k" subtitle="Anual gross sale in our site" />
                    </div>

                </Flex>
                <Slider {...settings}>
                <Aboutpepole/>
                <Aboutpepole/>
                <Aboutpepole/>
                <Aboutpepole/>
                </Slider>
            </Containers>
        </section>
    )
}

export default About
