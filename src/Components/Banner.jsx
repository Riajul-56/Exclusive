import React from "react";
import Containers from "./layout/Containers";
import Flex from "./Flex";
import Category from "./Category";
import Bannerimg from "../assets/Bannerimg.jpg"
import Images from "./layout/Images";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";


const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div style={{
                bottom:"5%",
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
    return <section>
        <Containers>
            <Flex className="lg:gap-[45px]  flex-col lg:flex-row">
                <div className="w-full lg:w-[20%] lg:border-r">
                    <Category />
                </div>
                <div className="lg:mt-8 mt-3 w-full lg:w-[80%]">
                    <Slider {...settings}>
                        <div>
                            <Images className="w-full" src={Bannerimg} alt="bannerimg" />
                        </div>
                        <div>
                            <Images className="w-full" src={Bannerimg} alt="bannerimg" />
                        </div>
                        <div>
                            <Images  className="w-full" src={Bannerimg} alt="bannerimg" />
                        </div>
                        <div>
                            <Images className="w-full" src={Bannerimg} alt="bannerimg" />
                        </div>
                        <div>
                            <Images className="w-full" src={Bannerimg} alt="bannerimg" />
                        </div>
                    </Slider>
                </div>

            </Flex>
        </Containers>
    </section>
        ;
};

export default Banner;
