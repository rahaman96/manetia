import React from 'react'
import styles from './Herosection.module.css'
import hero from '../images/hero.svg'
import vector1 from '../images/vector1.svg'
import vectorTwo from '../images/vectorTwo.svg'
const Herosection = () => {
    return (
        <div>

            <div className={`relative md:h-[743px] ${styles.heroSec}`}>
                <div>
                    <div className="container px-5 py-24 mx-auto flex flex-wrap">
                        <div className="flex flex-wrap -m-4">
                            <div className="p-4 lg:w-1/2 md:w-full">
                                <div>
                                    <h6 className='text-[#000000] text-[20px] md:text-[40px] font-semibold text-left '>Experienced <span className='text-[#1090CB]' >mobile and web </span>applications and website builders measuring.</h6>
                                </div>
                                <div className='py-5'>
                                    <p className='text-[#5C5C5C] md:text-[16px] font-normal text-left md:w-[613px] md:h-[125px]'>
                                        EXAMPLE COMPANY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS.
                                    </p>
                                </div>
                                <div className='flex gap-6'>
                                    <button className="bg-[#1090CB] w-full md:w-[193px] h-[51px] text-[13px] font-normal leading-[24px] text-white rounded">
                                        Contact Us
                                    </button>
                                    <button className="bg-[#1090CB border-[1px] border-[#1090CB] w-full md:w-[193px] h-[51px]  text-[13px] font-normal leading-[24px] text-[#1090CB] rounded">
                                        View More
                                    </button>
                                </div>
                            </div>
                            <div className="lg:w-1/2 md:w-full md:-mt-[110px]">
                                <img src={hero} alt="hero" />

                            </div>
                        </div>
                    </div>
                </div>
                <img src={vector1} alt="vector1" className={`absolute left-[90%] top-[55%] sm:left-[92%] sm:top-[52%] md:left-[96%] md:top-[18%]  lg:left-[96.5%] lg:top-[30%] ${styles.vectoeOne} `}/>
                <img src={vectorTwo} alt="vectorTwo"  className='absolute top-[26%]'/>
            </div>

           
        </div>
    )
}

export default Herosection