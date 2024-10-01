import React from 'react'
import Link from 'next/link'
import ArrIcon from '@public/popular/arr-45.svg'

const CryptoEvents = () => {
  return (
    <div className='px-2 sm:px-2.5 md:px-5 lg:px-10 pb-2 sm:pb-2.5 md:pb-6 pt-[50px] md:pt-[80px] lg:pt-[120px] bg-layout'>
        <div className='bg-fly-pattern bg-cover bg-center rounded-md'>
            <div className='max-w-custom-1800 min-h-screen px-2 sm:px-2.5 md:px-5 lg:px-10 py-2 sm:py-2.5 md:py-6 mx-auto flex-col st:flex-row flex justify-normal st:justify-between gap-3'>
                <div className='max-w-[646px] lg:max-w-[729px] w-full flex flex-col justify-between h-full'>
                    <div className='text-white text-2xl sm:text-5xl lg:text-[40px] font-semibold font-manrope leading-9 tracking-tighter'>Crypto events</div>
                    <div className='mt-[47px] sm:mt-[162px] lg:mt-[233px] st:mt-0'>
                        <div className='text-white text-xl sm:text-5xl text-2xl text-[82px] font-medium font-interTight leading-[18px] sm:leading-[73.80px] tracking-tighter'>Verifiable Summit <br /> @ ETH Warsaw <span className='text-[#C7E9FF]'>2024</span></div>
                        <div className='mt-3 sm:mt-6  text-xs sm:text-base lg:text-2xl text-white opacity-70 text-stroke'>Verifiable Summit @ ETH Warsaw 2024 is a one-day <br /> conference dedicated to applied cryptography</div>
                        <div className='mt-3 sm:mt-12 flex items-center group'>
                            <Link href="#" className="lg:h-[100px] h-[56px] sm:h-[72px] lg:w-[432px] sm:w-[243px] w-[172px] transition-all duration-300 ease bg-white rounded-[100px] justify-center cursor-pointer active:bg-white/10 hover:bg-white/40 items-center flex">
                                    <span className="text-blue text-xs sm:text-base lg:text-2xl font-bold font-manrope leading-7">Search event</span>
                                </Link>
                                {/* <div className="w-[56px] sm:w-[72px] lg:w-[100px] flex-shrink-0 h-[56px] sm:h-[72px] lg:h-[100px] flex items-center justify-center bg-white/10 rounded-[105px] transition-all duration-300 ease group-hover:bg-[#0D1723] group-active:bg-[#0D1723]/10">
                                    <ArrIcon className="transparent w-[13.44px] h-[12.31px] sm:w-[17px] sm:h-[15.83px] lg:w-[24px] lg:h-[21px]" />
                                </div> */}
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-[47px] sm:mt-[97px] st:mt-[0px] lg:mt-[233px] flex-wrap gap-6 smd:gap-0'>
                        <div>
                            <div className='text-white text-base sm:text-[32px] lg:text-5xl font-medium font-interTight tracking-tighter leading-[18.40px] sm:leading-[55.20px]'>Warsaw, Poland</div>
                            <div className='opacity-70 mt-2 smd:mt-6 text-white text-xs sm:text-base lg:text-[18px] font-normal font-interTight leading-tight'>Book flights to anywhere <br /> in the world, with over 600 airlines</div>
                        </div>
                        <div>
                            <div className='text-white text-base sm:text-[32px] lg:text-5xl font-medium font-interTight tracking-tighter leading-[18.40px] sm:leading-[55.20px]'>12:00</div>
                            <div className='opacity-70  mt-2 smd:mt-6 text-white text-xs sm:text-base lg:text-[18px] font-normal font-interTight leading-tight'>Book flights to anywhere <br /> in the world, with over 600 airlines</div>
                        </div>
                    </div>
                </div>
                <div className='max-w-full mt-[22px] sm:mt-[65px] st:mt-0 st:max-w-[357px] lg:max-w-[595px] w-full bg-white/10 rounded-3xl backdrop-blur-[20px]'>
                    <div className='p-8 flex flex-col h-full justify-between'>
                        <div>
                            <div className='flex items-center justify-between'>
                                <div className='bg-white/20 rounded-full justify-center items-center h-[30px] sm:h-[56px] lg:h-[72px] w-[73px] sm:w-[135px]  flex justify-center items-center'>
                                    <span className='font-manrope font-bold text-[10px] sm:text-base leading-[18.40px] tracking-tighter text-white'>20.04.2025</span>
                                </div>
                                <div className='rounded-full border-white/20 border-[1px]  h-[30px] sm:h-[56px] lg:h-[72px] w-[46px] sm:w-[92px] flex justify-center items-center'>
                                    <span className='font-manrope font-bold text-[10px] sm:text-base leading-[18.40px] tracking-tighter text-white'>12:00</span>
                                </div>
                            </div>
                            <div className='mt-[37px] sm:mt-[97px] st:mt-[120px]'>
                                <div className='text-white text-2xl sm:text-4xl lg:text-5xl font-medium font-inteTight leading-[22px] sm:leading-[48px] tracking-tighter'>AI Crypto <br /> Summit 2024</div>
                                <div className='mt-2 sm:mt-6 opacity-70 text-white text-xs sm:text-base lg:text-xl font-normal font-interTightleading-normal'>The AI Crypto Summit <br /> is your gateway to the future</div>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-[37px] sm:mt-[89px] st:mt-[0px]'>
                            <div>
                                <div className='text-white text-base sm:text-xl lg:text-[32px] font-medium font-interTight tracking-tighter leading-[18.40px] sm:leading-9'>Madrid, Spain</div>
                                <div className=' mt-2 sm:mt-3 opacity-70 text-white text-xs sm:text-sm lg:text-lg font-normal font-interTight leading-tight'>Book flights to anywhere <br /> in the world</div>
                            </div>
                            <div className='flex items-center gap-1'>
                                <button className='w-[24px] h-[24px] sm:w-[56px] sm:h-[56px] lg:w-[100px] lg:h-[100px]  bg-white/20 rounded-full flex justify-center items-center'><ArrIcon className='transparent rotate-[225deg]  w-[5.76px] h-[5.28px] sm:w-[13.44px] sm:h-[12.31px]'/></button>
                                <button className='w-[24px] h-[24px] sm:w-[56px] sm:h-[56px] lg:w-[100px] lg:h-[100px] bg-white/20 rounded-full flex justify-center items-center'><ArrIcon className='transparent rotate-45 w-[5.76px] h-[5.28px] sm:w-[13.44px] sm:h-[12.31px]'/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CryptoEvents
