'use client'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import BtcIcon from '@public/hero/1.svg'
import SolIcon from '@public/hero/2.svg'
import NearIcon from '@public/hero/3.svg'
import AaveIcon from '@public/hero/4.svg'
import AvaxIcon from '@public/hero/5.svg'
import ArrLeftIcon from '@public/hero/arr-left.svg'
import ArrRightIcon from '@public/hero/arr-right.svg'
import FlyIcon from '@public/hero/fly.svg'
import HotelsIcon from '@public/hero/hotels.svg'
import CarIcon from '@public/hero/car.svg'
import EventsIcon from '@public/hero/events.svg'
import SuccessIcon from '@public/hero/success.svg'
import ArrIcon from '@public/hero/arr-45.svg'
import ReverseIcon from '@public/hero/reverse.svg'

const HeroBlock = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [selectedOption, setSelectedOption] = React.useState('oneWay');

    const handleClick = (index:any) => {
      setActiveIndex(index);
    };
  return (
    <div className='p-[5px] sm:p-2.5 lg:p-5 bg-layout'>
        <div className='bg-hero-pattern bg-cover bg-[left_-380px_top_0px] st:bg-center min-h-screen rounded-md'>
            <div className='max-w-custom-1800 px-1 sm:px-2.5 md:px-5 lg:px-10 py-1 sm:py-2.5 md:py-6 mx-auto max-h-full'>
                <Navbar />
                <div className='mt-[25px] lg:mt-[65px] flex flex-col st:flex-row justify-between gap-3'>
                    <div className='mt-[53px]'>
                        <h1 className='font-manrope text-white text-[32px] sm:text-[64px] lg:text-[120px] font-medium leading-[29px] sm:leading-[57.60px] lg:leading-[108px] tracking-tighter'>
                            Search <br />
                            & Book Flights
                        </h1>
                        <div className='text-white/70 text-sm sm:text-base lg:text-2xl font-normal font-manrope leading-tight mt-6'>Book flights to anywhere in the world, <br />
                        with over 600 airlines</div>
                        <div className='flex mt-[17px]'>
                            <div className='w-[48px] h-[48px] sm:w-[107.77px] sm:h-[107.77px] bg-white/10 rounded-[91px] border border-white/20 backdrop-blur-[20px] flex items-center justify-center'>
                                <BtcIcon className='w-[9px] h-[12px] sm:w-[22.66px] sm:h-[30px]'/>
                            </div>
                            <div className='w-[48px] h-[48px] sm:w-[107.77px] sm:h-[107.77px] bg-white/10 rounded-[91px] border border-white/20 backdrop-blur-[20px] flex items-center justify-center ml-[-10px] sm:ml-[-20px]'>
                                <SolIcon className='w-[7.37px] h-[12px] sm:w-[18.42px] sm:h-[30px]'/>
                            </div>
                            <div className='w-[48px] h-[48px] sm:w-[107.77px] sm:h-[107.77px] bg-white/10 rounded-[91px] border border-white/20 backdrop-blur-[20px] flex items-center justify-center ml-[-10px] sm:ml-[-20px]'>
                                <NearIcon className='w-[13.03px] h-[12px] sm:w-[28px] sm:h-[25.79px]'/>
                            </div>
                            <div className='w-[48px] h-[48px] sm:w-[107.77px] sm:h-[107.77px] bg-white/10 rounded-[91px] border border-white/20 backdrop-blur-[20px] flex items-center justify-center ml-[-10px] sm:ml-[-20px]'>
                                <AaveIcon className='w-[12.52px] h-[12px] sm:w-[30px] sm:h-[28.77px]'/>
                            </div>
                            <div className='w-[48px] h-[48px] sm:w-[107.77px] sm:h-[107.77px] bg-white/10 rounded-[91px] border border-white/20 backdrop-blur-[20px] flex items-center justify-center ml-[-10px] sm:ml-[-20px]'>
                                <AvaxIcon className='w-[12px] h-[12px] sm:w-[30px] sm:h-[30px]'/>
                            </div>
                        </div>
                        <div className='max-w-full min-w-0 st:max-w-[595px] w-full mt-[35px]'>
                            <div className='flex justify-between items-center'>
                                    <div className='text-white text-2xl lg:text-4xl font-semibold font-manrope leading-10'>Popular</div>
                                    <div className='flex gap-1'>
                                        <div className='w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] lg:w-[72px] lg:h-[72px] rounded-[100px] border border-white/20 flex items-center justify-center cursor-pointer'>
                                            <ArrLeftIcon width={24} height={24}/>
                                        </div>
                                        <div className='w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] lg:w-[72px] lg:h-[72px]  rounded-[100px] border border-white/20 flex items-center justify-center cursor-pointer'>
                                            <ArrRightIcon width={24} height={24}/>
                                        </div>
                                    </div>
                            </div>
                            <div className='flex gap-2 mt-6'>
                                <div className='w-full max-w-full h-[303px] md:w-[296px] md:h-[238px] lg:w-[294px] lg:h-[271px] bg-paris-pattern bg-cover bg-center rounded-md cursor-pointer group'>
                                    <div className='bg-blue/50 rounded-md h-full'>
                                        <div className='p-2.5 smd:p-6 flex flex-col h-full justify-between relative'>
                                            <div className='text-white text-2xl font-semibold font-manrope tracking-tighter leading-relaxed'>
                                                Paris, France
                                            </div>
                                            <div className='w-[72px] h-[72px] smd:w-[100px] smd:h-[100px] z-50 rounded-full bg-blue flex justify-center items-center group-hover:bg-white transition-colors duration-300'>
                                                <span className='hidden group-hover:block text-blue text:xs sm:text-xl font-bold font-manrope leading-[23px]'>$250</span>
                                                <ArrIcon className='transparent group-hover:hidden' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='hidden md:block w-[296px] h-[238px] lg:w-[294px] lg:h-[271px] bg-usa-pattern bg-cover bg-center rounded-md cursor-pointer group'>
                                    <div className='bg-blue/50 rounded-md h-full'>
                                        <div className='p-6 flex flex-col h-full justify-between'>
                                            <div className='text-white text-2xl font-semibold font-manrope tracking-tighter leading-relaxed'>
                                                New York, USA
                                            </div>
                                            <div className='w-[100px] h-[100px] rounded-full bg-blue flex justify-center items-center group-hover:bg-white transition-colors duration-300'>
                                                <span className='hidden group-hover:block text-blue text-xs sm:text-xl font-bold font-manrope leading-[23px]'>$250</span>
                                                <ArrIcon className='transparent group-hover:hidden' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>

                        </div>
                    </div>
                    <div className='w-full st:w-[465px] lg:w-[746px] flex flex-col st:flex-row gap-[7px] mt-12 lg:mt-0'>
                    <div className="flex flex-row st:flex-col gap-2 justify-between sm:justify-normal">
                        <div
                            onClick={() => handleClick(0)}
                            className={`w-1/4 h-[73px] md:w-[145px] md:h-[145px] st:w-[100px] lg:w-[145px] transition-all duration-300 ease st:h-[100px] lg:h-[145px] gap-2 cursor-pointer 
                            ${activeIndex === 0 ? 'bg-blue text-white' : 'bg-white/10 backdrop-blur-[100px] text-white'} 
                            hover:bg-white rounded-xl sm:rounded-3xl flex-col justify-center items-center gap-2.5 inline-flex group`}
                        >
                            <FlyIcon className="w-[24px] sm:w-[32px] lg:w-[32px] h-[32px] lg:h-[36px] transition-all duration-300 ease text-white group-hover:text-blue" />
                            <span className="text-xs lg:text-base font-semibold font-manrope transition-all duration-300 ease leading-tight group-hover:text-blue">Flights</span>
                        </div>

                        <div
                            onClick={() => handleClick(1)}
                            className={`w-1/4 h-[73px] md:w-[145px] md:h-[145px] st:w-[100px] lg:w-[145px] transition-all duration-300 ease st:h-[100px] lg:h-[145px] gap-2 cursor-pointer 
                            ${activeIndex === 1 ? 'bg-blue text-white' : 'bg-white/10 backdrop-blur-[100px] text-white'} 
                            hover:bg-white rounded-xl sm:rounded-3xl flex-col justify-center items-center gap-2.5 inline-flex group`}
                        >
                            <HotelsIcon className="w-[24px] sm:w-[32px] lg:w-[40.68px] h-[18px] sm:h-[32px] transition-all duration-300 ease lg:h-[30px] text-white group-hover:text-blue" />
                            <span className="text-xs lg:text-base font-semibold font-manrope transition-all duration-300 ease leading-tight group-hover:text-blue">Hotels</span>
                        </div>

                        <div
                            onClick={() => handleClick(2)}
                            className={`w-1/4 h-[73px] md:w-[145px] md:h-[145px] st:w-[100px] lg:w-[145px] transition-all duration-300 ease st:h-[100px] lg:h-[145px] gap-2 cursor-pointer 
                            ${activeIndex === 2 ? 'bg-blue text-white' : 'bg-white/10 backdrop-blur-[100px] text-white'} 
                            hover:bg-white rounded-xl sm:rounded-3xl flex-col justify-center items-center gap-2.5 inline-flex group`}
                        >
                            <CarIcon className="w-[22.91px] sm:w-[32px] lg:w-[42px] h-[18px] sm:h-[32px] lg:h-[33px] transition-all duration-300 ease text-white group-hover:text-blue" />
                            <span className="text-xs lg:text-base font-semibold font-manrope leading-tight transition-all duration-300 ease group-hover:text-blue">Car rental</span>
                        </div>

                        <div
                            onClick={() => handleClick(3)}
                            className={`w-1/4 h-[73px] md:w-[145px] md:h-[145px] st:w-[100px] lg:w-[145px] transition-all duration-300 ease st:h-[100px] lg:h-[145px] gap-2 cursor-pointer 
                            ${activeIndex === 3 ? 'bg-blue text-white' : 'bg-white/10 backdrop-blur-[100px] text-white'} 
                            hover:bg-white rounded-xl sm:rounded-3xl flex-col justify-center items-center gap-2.5 inline-flex group`}
                        >
                            <EventsIcon className="w-[19.52px] sm:w-[26px] lg:w-[40px] h-[18px] sm:h-[24px] lg:h-[37px] transition-all duration-300 ease text-white group-hover:text-blue" />
                            <span className="text-xs lg:text-base font-semibold font-manrope leading-tight transition-all duration-300 ease group-hover:text-blue">Events</span>
                        </div>
                        </div>

                        <div className='bg-white/10 rounded-3xl backdrop-blur-[60px] p-6 w-full'>
                            <div className='text-white text-2xl sm:text-4xl md:text-2xl lg:text-5xl font-semibold font-manrope leading-[55.20px] tracking-tighter'>Search & Book</div>
                            <div className='mt-3 w-full text-white/70 text-xs lg:text-base font-normal font-manrope leading-[18.40px]'>Book flights to anywhere in the world, <br />
                            with over 600 airlines</div>
                            <div className="mt-[18px] lg:mt-6 h-12 justify-start items-center gap-1 inline-flex">
                                <label
                                    className={`h-[34px] lg:h-12 w-[99px] lg:w-[114px] p-4 text-nowrap rounded-[100px] items-center gap-2.5 flex cursor-pointer ${
                                    selectedOption === 'oneWay' ? 'bg-white/20' : 'bg-white/5'
                                    }`}
                                    onClick={() => setSelectedOption('oneWay')}
                                >
                                    <div
                                    className={`w-3 h-3 rounded-full flex-shrink-0 ${
                                        selectedOption === 'oneWay' ? 'bg-white' : 'border border-white/20'
                                    }`}
                                    ></div>
                                    <div className="text-white text-xs lg:text-sm font-semibold font-manrope leading-none">
                                    One way
                                    </div>
                                </label>
                                <label
                                    className={`h-[34px] lg:h-12 w-[111px] lg:w-[129px] p-4 rounded-[100px] justify-start items-center gap-2.5 flex cursor-pointer ${
                                    selectedOption === 'roundWay' ? 'bg-white/20' : 'bg-white/5'
                                    }`}
                                    onClick={() => setSelectedOption('roundWay')}
                                >
                                    <div
                                    className={`w-3 h-3 rounded-full flex-shrink-0 ${
                                        selectedOption === 'roundWay' ? 'bg-white' : 'border border-white/20'
                                    }`}
                                    ></div>
                                    <div className="text-white text-xs lg:text-sm text-nowrap font-semibold font-manrope leading-none">
                                    Round way
                                    </div>
                                </label>
                                </div>
                            <div className="mt-[18px] lg:mt-6 flex-col w-full justify-start items-start gap-3 inline-flex">
                            <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                                <div className='w-full relative flex flex-col gap-1'>  
                                    <label className="w-full">
                                        <div className="self-stretch h-[56px] lg:h-[84px] rounded-[100px] border transition-all duration-300 ease hover:border-white/50 border-white/20 flex items-center justify-center px-[16px] lg:px-[30px] gap-2.5 flex">
                                        <input type="text" className="bg-transparent border-none outline-none w-full text-white" value="Moscow, MOW" readOnly />
                                        <div className="w-6 h-6 p-[3px]"><SuccessIcon className='transparent w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]'/></div>
                                        </div>
                                    </label>
                                    <div className='absolute top-[30%] right-[25%] lg:right-[17%] bg-white w-[32px] h-[32px] lg:w-[58px] lg:h-[58px] rounded-full hidden st:flex items-center justify-center'><ReverseIcon className='w-[16px] h-[16px] lg:w-[24px] lg:h-[22px]'/></div>
                                    <label className="w-full">
                                        <div className="self-stretch h-[56px] lg:h-[84px] rounded-[100px] border transition-all duration-300 ease hover:border-white/50 border-white/20 flex items-center justify-center px-[16px] lg:px-[30px] gap-2.5 flex">
                                        <input type="text" className="bg-transparent border-none outline-none w-full text-white" value="Paris, MOW" readOnly />
                                        <div className="w-6 h-6 p-[3px]"><SuccessIcon className='transparent w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]'/></div>
                                        </div>
                                    </label>
                                </div>

                                <label className="w-full">
                                    <div className="self-stretch h-[56px] lg:h-[84px] rounded-[100px] border transition-all duration-300 ease hover:border-white/50 border-white/20 flex items-center justify-center px-[16px] lg:px-[30px] gap-2.5 flex">
                                    <input type="text" className="bg-transparent border-none outline-none w-full text-white" value="November, 19 — October, 10" readOnly />
                                    <div className="w-6 h-6 p-[3px]"><SuccessIcon className='transparent w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]'/></div>
                                    </div>
                                </label>

                                <label className="w-full">
                                    <div className="self-stretch h-[56px] lg:h-[84px] rounded-[100px] border transition-all duration-300 ease hover:border-white/50 border-white/20 flex items-center justify-center px-[16px] lg:px-[30px] gap-2.5 flex">
                                    <input type="text" className="bg-transparent border-none outline-none w-full text-white" value="3 Passengers, Economy" readOnly />
                                    <div className="w-6 h-6 p-[3px]"><SuccessIcon className='transparent w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]'/></div>
                                    </div>
                                </label>
                                </div>

                                <div className="flex gap-3 ">
                                <SuccessIcon className='transparent w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]'/>
                                    <div className="left-[36px] text-white/40 text-xs font-medium font-manrope leading-normal">I agree to the processing of personal data</div>
                                </div>
                            </div>
                            <div className="mt-[46px] st:mt-[120px] lg:mt-[146px] flex items-center group">
                                <button className="w-full h-[56px] sm:h-[72px] lg:h-[100px] transition-all duration-300 ease bg-white rounded-[100px] justify-center cursor-pointer active:bg-white/10 hover:bg-white/40 items-center flex">
                                    <span className="text-blue text-xs sm:text-base lg:text-2xl font-bold font-manrope leading-7">Search flight</span>
                                </button>
                                <div className="w-[56px] sm:w-[72px] lg:w-[100px] flex-shrink-0 h-[56px] sm:h-[72px] lg:h-[100px] flex items-center justify-center bg-white/10 rounded-[105px] transition-all duration-300 ease group-hover:bg-[#0D1723] group-active:bg-[#0D1723]/10">
                                    <ArrIcon className="transparent w-[13.44px] h-[12.31px] sm:w-[17px] sm:h-[15.83px] lg:w-[24px] lg:h-[21px]" />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBlock
