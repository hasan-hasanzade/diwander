'use client';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AIcon from '@public/crypto-slider/1.svg';
import BIcon from '@public/crypto-slider/2.svg';
import CIcon from '@public/crypto-slider/3.svg';
import DIcon from '@public/crypto-slider/4.svg';
import EIcon from '@public/crypto-slider/5.svg';
import FIcon from '@public/crypto-slider/6.svg';
import GIcon from '@public/crypto-slider/7.svg';
import HIcon from '@public/crypto-slider/8.svg';
import IIcon from '@public/crypto-slider/9.svg';
import JIcon from '@public/crypto-slider/10.svg';
import KIcon from '@public/crypto-slider/11.svg';
import LIcon from '@public/crypto-slider/12.svg';
import PrevIcon from '@public/crypto-slider/prev.svg';
import NextIcon from '@public/crypto-slider/next.svg';

const PrevArrow = (props:any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <PrevIcon className="w-[17px] h-[16px] lg:w-[24px] lg:h-[22px]" />
    </div>
  );
};

const NextArrow = (props:any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next`}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    >
      <NextIcon className="w-[17px] h-[16px] lg:w-[24px] lg:h-[22px]" />
    </div>
  );
};

function Responsive() {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="sl-width mx-auto">
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <div className="rounded-full flex items-center justify-center transition-all duration-300 ease hover:bg-[#F7931A] bg-[#78879B]/20 w-[48px] h-[48px] ssd:w-[72px] ssd:h-[72px] lg:w-[105px] lg:h-[105px]">
              <AIcon className="w-[24px] h-[27px] lg:w-[64px] lg:h-[47px]" />
            </div>
          </div>
          <div>
            <div className="rounded-full flex items-center justify-center transition-all duration-300 ease hover:bg-[#F7931A] bg-[#78879B]/20 w-[48px] h-[48px] ssd:w-[72px] ssd:h-[72px] lg:w-[105px] lg:h-[105px]">
              <BIcon className="w-[24px] h-[31px] lg:w-[45px] lg:h-[59px]" />
            </div>
          </div>
          <div>
            <div className="rounded-full flex items-center justify-center transition-all duration-300 ease hover:bg-[#F7931A] bg-[#78879B]/20 w-[48px] h-[48px] ssd:w-[72px] ssd:h-[72px] lg:w-[105px] lg:h-[105px]">
              <CIcon className="w-[27px] h-[24px] lg:w-[65px] lg:h-[57px]" />
            </div>
          </div>
          <div>
            <div className="rounded-full flex items-center justify-center transition-all duration-300 ease hover:bg-[#F7931A] bg-[#78879B]/20 w-[48px] h-[48px] ssd:w-[72px] ssd:h-[72px] lg:w-[105px] lg:h-[105px]">
              <DIcon className="w-[24px] h-[35px] lg:w-[34px] lg:h-[45px]" />
            </div>
          </div>
          <div>
            <div className="rounded-full flex items-center justify-center transition-all duration-300 ease hover:bg-[#F7931A] bg-[#78879B]/20 w-[48px] h-[48px] ssd:w-[72px] ssd:h-[72px] lg:w-[105px] lg:h-[105px]">
              <EIcon className="w-[16px] h-[27px] lg:w-[30px] lg:h-[50px]" />
            </div>
          </div>
          <div>
            <div className="rounded-full flex items-center justify-center transition-all duration-300 ease hover:bg-[#F7931A] bg-[#78879B]/20 w-[48px] h-[48px] ssd:w-[72px] ssd:h-[72px] lg:w-[105px] lg:h-[105px]">
              <FIcon className="w-[15px] h-[27px] lg:w-[25px] lg:h-[45px]" />
            </div>
          </div>
          <div>
            <div className="rounded-full flex items-center justify-center transition-all duration-300 ease hover:bg-[#F7931A] bg-[#78879B]/20 w-[48px] h-[48px] ssd:w-[72px] ssd:h-[72px] lg:w-[105px] lg:h-[105px]">
              <GIcon className="w-[24px] h-[22px] lg:w-[61px] lg:h-[57px]" />
            </div>
          </div>
          <div>
            <div className="rounded-full flex items-center justify-center transition-all duration-300 ease hover:bg-[#F7931A] bg-[#78879B]/20 w-[48px] h-[48px] ssd:w-[72px] ssd:h-[72px] lg:w-[105px] lg:h-[105px]">
              <HIcon className="w-[30px] h-[28px] lg:w-[56px] lg:h-[54px]" />
            </div>
          </div>
          <div>
            <div className="rounded-full flex items-center justify-center transition-all duration-300 ease hover:bg-[#F7931A] bg-[#78879B]/20 w-[48px] h-[48px] ssd:w-[72px] ssd:h-[72px] lg:w-[105px] lg:h-[105px]">
              <IIcon className="w-[30px] h-[30px] lg:w-[65px] lg:h-[65px]" />
            </div>
          </div>
          <div>
            <div className="rounded-full flex items-center justify-center transition-all duration-300 ease hover:bg-[#F7931A] bg-[#78879B]/20 w-[48px] h-[48px] ssd:w-[72px] ssd:h-[72px] lg:w-[105px] lg:h-[105px]">
              <JIcon className="w-[32px] h-[32px] lg:w-[57px] lg:h-[57px]" />
            </div>
          </div>
          <div>
            <div className="transparent rounded-full flex items-center justify-center transition-all duration-300 ease hover:bg-[#F7931A] bg-[#78879B]/20 w-[48px] h-[48px] ssd:w-[72px] ssd:h-[72px] lg:w-[105px] lg:h-[105px]">
              <KIcon className="w-[35px] h-[35px] lg:w-[65px] lg:h-[65px]" />
            </div>
          </div>
          <div>
            <div className="rounded-full flex items-center justify-center transition-all duration-300 ease hover:bg-[#F7931A] bg-[#78879B]/20 w-[48px] h-[48px] ssd:w-[72px] ssd:h-[72px] lg:w-[105px] lg:h-[105px]">
              <LIcon className="w-[27px] h-[29px] lg:w-[57px] lg:h-[49px]" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Responsive;
