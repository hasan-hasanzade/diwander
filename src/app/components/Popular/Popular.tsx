import React from 'react'
import ArrIcon from '@public/popular/arr-right.svg'
import PlusIcon from '@public/popular/plus.svg'
import SearchIcon from '@public/popular/search.svg'
import SettingsIcon from '@public/popular/settings.svg'
import Arr45Icon from '@public/popular/arr-45.svg'
import Link from 'next/link'

const Popular = () => {
  return (
    <div className='pt-[50px]  md:pt-[80px] lg:pt-[120px] bg-layout p-[10px] sm:p-[20px] md:p-[40px] lg:p-[60px]'>
      <div className='max-w-custom-1800 mx-auto'>
        <div className="flex items-end justify-between gap-2">
            <h2 className='text-blue text-2xl sm:text-[48px] lg:text-[82px] font-semibold font-manrope tracking-tighter leading-none sm:leading-[43.20px] lg:leading-[73.80px]'>Popular <br /> destination</h2>
            <Link href='#' className="flex gap-3 items-center text-bluetext-xl font-medium font-interTight leading-tight tracking-[-0.05em]">More destinations <ArrIcon width={10} height={8}/></Link>
        </div>
        <div className="mt-12 flex items-center justify-between gap-3 h-[48px] md:h-[64px] lg:h-[72px]">
            <div className='hidden st:flex items-center gap-2 w-full h-full'>
                <div className='bg-white max-w-[227px] lg:max-w-[273px] px-5 h-full w-full rounded-full flex items-center justify-between cursor-pointer'>
                    <div className='flex items-center gap-3 h-full'>
                        <PlusIcon width={21.5} height={21.5}/>
                        <div className='text-base font-semibold font-manrope text-blue tracking-[-0.05em] leading-7'>Moscow</div>
                    </div>
                    <ArrIcon width={10} height={8}/>
                </div>
                <div className='bg-white flex-shrink-0 max-w-[227px] lg:max-w-[293px] w-full h-full  rounded-full flex items-center justify-between px-5 cursor-pointer'>
                    <div className='flex items-center gap-3'>
                        <PlusIcon width={21.5} height={21.5}/>
                        <div className='text-base font-semibold font-manrope text-blue tracking-[-0.05em] leading-7'>From <span>$100</span> to <span>$800</span></div>
                    </div>
                    <ArrIcon width={10} height={8}/>
                </div>
                <div className='md:w-[64px] lg:w-[72px] md:h-[64px] lg:h-[72px] flex-shrink-0 rounded-full bg-blue flex items-center justify-center'>
                    <SearchIcon width={24} height={24}/>
                </div>
            </div>
            <div className='flex items-center justify-between st:justify-end gap-2 w-full h-full'>
                <div className='bg-white max-w-[110px] md:max-w-[227px] lg:max-w-[293px] h-full w-full rounded-full flex items-center justify-between px-2 md:px-5 cursor-pointer'>
                    <div className='flex items-center gap-3'>
                        <div className='text-xs md:text-base font-semibold font-manrope text-blue tracking-[-0.05em] leading-7'>Popular</div>
                    </div>
                    <ArrIcon width={10} height={8}/>
                </div>
                <div className='bg-blue max-w-[131px] md:max-w-[227px] lg:max-w-[293px] h-full w-full rounded-full px-2 md:px-5 flex items-center justify-between cursor-pointer'>
                    <div className='flex items-center gap-3'>
                        <SettingsIcon width={21.5} height={21.5}/>
                        <div className='text-xs md:text-base font-semibold font-manrope text-white tracking-[-0.05em] leading-7'>Filters</div>
                    </div>
                    <div className='bg-white w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full'>
                        <span className='font-bold text-xs leading-7 tracking-[-0.05em]'>2</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-6 flex items-center gap-2 h-[282px] sm:h-[533px]">
    <div className='relative h-full w-full ms:w-1/2 lg:w-1/3'>
        <div className='h-full w-full rounded-[18px] bg-santorini-pattern bg-cover bg-center rounded-[18px] group'>
            <div className='bg-blue/50 rounded-[18px] h-full p-[10px] lg:p-8 flex flex-col justify-between transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-0'>
                <div className='flex justify-between items-start'>
                    <div className='flex flex-col gap-3'>
                        <div className='text-white text-[18px] sm:text-3xl md:text-[40px] lg:text-5xl font-medium font-interTight tracking-lighter leading-[30px] sm:leading-[40px] rounded-sm'>
                            Santorini, Greece
                        </div>
                        <div className='text-white text-xs sm:text-base md:text-xl font-normal leading-normal font-interTight opacity-70'>
                            Book flights to anywhere <br /> in the world, with over 600 airlines
                        </div>
                    </div>
                    <div className='bg-white/20 rounded-full flex gap-1 text-[10px] sm:text-base text-white font-manrope tracking-lighter font-bold w-[100px] h-[30px] sm:w-[120px] sm:h-[48px] md:h-[72px] items-center justify-center'>
                        from <span>$99</span>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <div className='w-[56px] sm:w-[72px] h-[56px] sm:h-[72px] border-white border-2 rounded-full flex items-center justify-center'>
                        <Arr45Icon width={24} height={22} className='transparent w-[12px] sm:w-[24px] h-[10.33px] sm:h-[22px]' />
                    </div>
                </div>
            </div>

            <div className='absolute top-0 left-0 w-full h-full bg-blue/70 rounded-[18px] p-[10px] lg:p-8 flex flex-col justify-between transition-all duration-300 ease-in-out opacity-0 invisible group-hover:opacity-100 group-hover:visible'>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col gap-1 flex-shrink-0'>
                        <div className='text-white text-[18px] sm:text-3xl md:text-[40px] lg:text-5xl font-medium font-interTight tracking-lighter leading-[18px] sm:leading-[40px] rounded-sm'>
                            DME
                        </div>
                        <div className='text-white text-[11px] flex-shrink-0 font-normal leading-normal font-interTight opacity-70'>
                            Moscow, Russia
                        </div>
                    </div>
                    <div className='w-full max-w-[250px]'>
                        <img className='px-2' src="/popular/line.png" alt="" />
                    </div>
                    <div className='flex flex-col gap-1 flex-shrink-0'>
                        <div className='text-white text-[18px] sm:text-3xl md:text-[40px] lg:text-5xl font-medium font-interTight tracking-lighter leading-[18px] sm:leading-[40px] rounded-sm'>
                            JTR
                        </div>
                        <div className='text-white text-[11px] flex-shrink-0 font-normal leading-normal font-interTight opacity-70'>
                            Santorini, Greece
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='text-white text-[18px] sm:text-3xl md:text-[40px] lg:text-5xl font-medium font-interTight tracking-lighter leading-[18px] sm:leading-[40px] rounded-sm'>
                        Santorini, Greece
                    </div>
                    <div className='text-white text-xs sm:text-base md:text-xl font-normal leading-normal font-interTight opacity-70'>
                        Book flights to anywhere <br /> in the world, with over 600 airlines
                    </div>
                </div>
                <div className='flex'>
                    <button className='w-full h-[48px] sm:h-[72px] lg:h-[100px] bg-white rounded-full text-xs sm:text-base lg:text-2xl font-bold font-manrope leading-7 transition-all duration-300 ease-in-out'>
                        Search flight
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div className='relative hidden ms:flex flex-col h-full justify-between w-1/2 lg:w-1/3 bg-rome-pattern bg-cover bg-center rounded-[18px]'>
        <div className='h-full w-full rounded-[18px] bg-rome-pattern bg-cover bg-center rounded-[18px] group'>
            <div className='bg-blue/50 rounded-[18px] h-full p-[10px] lg:p-8 hidden ms:flex flex-col justify-between transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0'>
                <div className='flex justify-between items-start'>
                    <div className='flex flex-col gap-3'>
                        <div className='text-white text-[40px] lg:text-5xl font-medium font-interTight tracking-lighter leading-[55.20px] rounded-sm'>
                            Rome, Italy
                        </div>
                        <div className='text-white text-xl font-normal leading-normal font-interTight opacity-70'>
                            Book flights to anywhere <br /> in the world, with over 600 airlines
                        </div>
                    </div>
                    <div className='p-10 bg-white/20 rounded-full flex gap-1 text-base text-white font-manrope tracking-lighter font-bold w-[120px] h-[72px] items-center justify-center'>
                        from <span>$99</span>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <div className='w-[72px] h-[72px] border-white border-2 rounded-full flex items-center justify-center'>
                        <Arr45Icon className='transparent cursor-pointer' width={24} height={22} />
                    </div>
                </div>
            </div>

            <div className='absolute top-0 left-0 w-full h-full bg-blue/70 rounded-[18px] p-[10px] lg:p-8 flex flex-col justify-between transition-all duration-300 ease-in-out opacity-0 invisible group-hover:opacity-100 group-hover:visible'>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col gap-1 flex-shrink-0'>
                        <div className='text-white text-[18px] sm:text-3xl md:text-[40px] lg:text-5xl font-medium font-interTight tracking-lighter leading-[18px] sm:leading-[40px] rounded-sm'>
                            FCO
                        </div>
                        <div className='text-white text-[11px] flex-shrink-0 font-normal leading-normal font-interTight opacity-70'>
                            Rome, Italy
                        </div>
                    </div>
                    <div className='w-full max-w-[250px]'>
                        <img className='px-2' src="/popular/line.png" alt="" />
                    </div>
                    <div className='flex flex-col gap-1 flex-shrink-0'>
                        <div className='text-white text-[18px] sm:text-3xl md:text-[40px] lg:text-5xl font-medium font-interTight tracking-lighter leading-[18px] sm:leading-[40px] rounded-sm'>
                            JFK
                        </div>
                        <div className='text-white text-[11px] flex-shrink-0 font-normal leading-normal font-interTight opacity-70'>
                            New York, USA
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='text-white text-[18px] sm:text-3xl md:text-[40px] lg:text-5xl font-medium font-interTight tracking-lighter leading-[18px] sm:leading-[40px] rounded-sm'>
                        Rome, Italy
                    </div>
                    <div className='text-white text-xs sm:text-base md:text-xl font-normal leading-normal font-interTight opacity-70'>
                        Book flights to anywhere <br /> in the world, with over 600 airlines
                    </div>
                </div>
                <div className='flex'>
                    <button className='w-full h-[48px] sm:h-[72px] lg:h-[100px] bg-white rounded-full text-xs sm:text-base lg:text-2xl font-bold font-manrope leading-7 transition-all duration-300 ease-in-out'>
                        Search flight
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div className='relative hidden lg:flex flex-col h-full justify-between w-1/3 bg-madrid-pattern bg-cover bg-center rounded-[18px]'>
        <div className='h-full w-full rounded-[18px] bg-madrid-pattern bg-cover bg-center rounded-[18px] group'>
            <div className='bg-blue/50 rounded-[18px] h-full p-8 hidden lg:flex flex-col justify-between transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0'>
                <div className='flex justify-between items-start'>
                    <div className='flex flex-col gap-3'>
                        <div className='text-white text-5xl font-medium font-interTight tracking-lighter leading-[55.20px] rounded-sm'>
                            Madrid, Spain
                        </div>
                        <div className='text-white text-xl font-normal leading-normal font-interTight opacity-70'>
                            Book flights to anywhere <br /> in the world, with over 600 airlines
                        </div>
                    </div>
                    <div className='p-10 bg-white/20 rounded-full flex gap-1 text-base text-white font-manrope tracking-lighter font-bold w-[120px] h-[72px] items-center justify-center'>
                        from <span>$99</span>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <div className='w-[72px] h-[72px] border-white border-2 rounded-full flex items-center justify-center'>
                        <Arr45Icon className='transparent' width={24} height={22} />
                    </div>
                </div>
            </div>

            <div className='absolute top-0 left-0 w-full h-full bg-blue/70 rounded-[18px] p-[10px] lg:p-8 flex flex-col justify-between transition-all duration-300 ease-in-out opacity-0 invisible group-hover:opacity-100 group-hover:visible'>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col gap-1 flex-shrink-0'>
                        <div className='text-white text-[18px] sm:text-3xl md:text-[40px] lg:text-5xl font-medium font-interTight tracking-lighter leading-[30px] sm:leading-[40px] rounded-sm'>
                            MAD
                        </div>
                        <div className='text-white text-[11px] flex-shrink-0 font-normal leading-normal font-interTight opacity-70'>
                            Madrid, Spain
                        </div>
                    </div>
                    <div className='w-full max-w-[250px]'>
                        <img className='px-2' src="/popular/line.png" alt="" />
                    </div>
                    <div className='flex flex-col gap-1 flex-shrink-0'>
                        <div className='text-white text-[18px] sm:text-3xl md:text-[40px] lg:text-5xl font-medium font-interTight tracking-lighter leading-[30px] sm:leading-[40px] rounded-sm'>
                            BCN
                        </div>
                        <div className='text-white text-[11px] flex-shrink-0 font-normal leading-normal font-interTight opacity-70'>
                            Barcelona, Spain
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='text-white text-[18px] sm:text-3xl md:text-[40px] lg:text-5xl font-medium font-interTight tracking-lighter leading-[18px] sm:leading-[40px] rounded-sm'>
                    Madrid, Spain
                    </div>
                    <div className='text-white text-xs sm:text-base md:text-xl font-normal leading-normal font-interTight opacity-70'>
                        Book flights to anywhere <br /> in the world, with over 600 airlines
                    </div>
                </div>
                <div className='flex'>
                    <button className='w-full h-[48px] sm:h-[72px] lg:h-[100px] bg-white rounded-full text-xs sm:text-base lg:text-2xl font-bold font-manrope leading-7 transition-all duration-300 ease-in-out'>
                        Search flight
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>


      </div>
    </div>
  )
}

export default Popular
