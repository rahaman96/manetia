import React from 'react'
import star from '../images/star.svg'
import paichart from '../images/paichart.svg'
const Contact = () => {
  return (
    <div className='relative'>
      <div className='absolute left-20 -top-11'>
        <img src={star} alt="star" />
      </div>
      <div className="bg-[#E8F4FA]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12 relative">
            <img src={paichart} alt="paichart" className='w-[54px] h-[54px] absolute left-[67%] -top-10 cursor-pointer' />
            <h1 className="text-[#252525] text-[30px] mb-4 font-semibold">Lorem Ipsum is simply dummy <br /> text of the printing. </h1>
          </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 md:items-end">

            <div className="relative flex-grow w-full bg-[#FFFFFF] shadow-lg  rounded-[10px]">
              <input type="email" placeholder='Enter your email' id="email" name="email" className="w-full  rounded-[10px] outline-none  py-2 px-3 leading-8" />
            </div>
            <button className="text-white text-[16px] font-medium bg-[#000000] border-0 py-3 px-8 rounded">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact