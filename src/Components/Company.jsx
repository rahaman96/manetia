import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import benoshop from '../images/benoshop.svg'
// import styles from './company.module.css'
import styles from './Company.module.css'
const Company = () => {
    return (
        <div className=' py-20 mx-auto md:w-[1240px md:w-full w-[450px]'>
            <h6 className='text-center text-[#000000] text-[16] md:text-[24px] font-medium'>
                You will be in good Company
            </h6>
            <div className="md:py-5 flex justify-between md:mt-4 gap-10 md:gap-4">


                <div className={styles.wrapper}>
                    <div className={styles.slider}>
                        <div className={`flex gap-6 ${styles.slide_track}`}>

                            <div className={styles.slide}>
                                <img src={benoshop} alt='benoshop' className='w-[185px]' />
                            </div>

                            <div className={styles.slide}>
                                <img src={benoshop} alt='benoshop' />
                            </div>

                            <div className={styles.slide}>
                                <img src={benoshop} alt='benoshop' />
                            </div>

                            <div className={styles.slide}>
                                <img src={benoshop} alt='benoshop' />
                            </div>

                            <div className={styles.slide}>
                                <img src={benoshop} alt='benoshop' />
                            </div>


                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Company