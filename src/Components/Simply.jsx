import React from 'react'
import notification from '../images/notification.svg'
const Simply = () => {
    return (
        <div>
            <div className="container px-5 mx-auto  justify-center ">
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 py- lg:w-1/2 md:w-full">
                        <div className="flex  rounded-lg p-8 py- sm:flex-row flex-col bg-[#F4F4F4]">

                            <div className="flex-grow py-10">
                                <h2 className="text-[#252525] text-[25px] font-medium mb-3  text-center">Lorem Ipsum is simply <br /> dummy text.</h2>
                                <p className="text-[16px] font-normal text-[#545454] text-center">EXAMPLE COMPANY PVT LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
                                <div className='mx-auto flex justify-center items-center mt-10'>
                                    <button className="bg-[#1090CB] w-full md:w-[153px] h-[49px] text-[16px] font-medium leading-[24px] text-white rounded-[10px]">
                                        View more
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/2 md:w-full relative">
                        <div className="flex  rounded-lg  p-8 sm:flex-row flex-col bg-[#1090CB]">
                            <div className="flex-grow py-10">
                                <h2 className="text-[#FFFFFF] text-[25px] font-medium mb-3  text-center">Lorem Ipsum is simply <br /> dummy text.</h2>
                                <p className="text-[16px] font-normal text-[#FFFFFF] text-center">EXAMPLE COMPANY PVT LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
                                <div className='mx-auto flex justify-center items-center mt-10'>
                                    <button className="bg-[#FFFFFF] w-full md:w-[153px] h-[49px] text-[16px] font-medium leading-[24px] text-[#1090CB] rounded-[10px]">
                                        View more
                                    </button>

                                </div>
                            </div>
                        </div>
                        <div className='absolute -top-4 md:-top-7 left-[85%]'>
                            <img src={notification} alt="notification" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Simply