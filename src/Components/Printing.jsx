import React from 'react'
import user from '../images/user.svg'
import heroMobile from '../images/heroMobile.svg'
import threeD from '../images/3d.svg'
import smartboy from '../images/smartboy.svg'
const Printing = () => {
    return (
        <div className='py-10'>
            <div className='text-center px-4'>
                <h6 className='py-5 text-[#252525] text-[20px] md:text-[33px] font-medium'>Lorem Ipsum is simply dummy text of the printing. </h6>
                <p className='text-[#868686] text-[18px] font-normal w-full md:w-[692px]  md:h-[64px] text-center mx-auto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's</p>
            </div>


            {/* first Part start */}
            <div className="">
                <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
                    <div className="md:w-1/2 md:pr-12 md:py-8 md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                        <div className="flex gap-6 items-cente">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#08D3BB]  mb-5 flex-shrink-0">
                                <img src={user} alt="" />
                            </div>
                            <div className='mt-3'>
                                <h1 className="text-[#000000] text-[17px] font-medium mb-1">Lorem Ipsum is simply dummy text</h1>
                                <p className='text-[#868686] text-[14px] font-normal'>Lorem Ipsum is simply dummy text</p>
                            </div>
                        </div>
                        <div className='pt-5 pb-5'>
                            <h6 className='text-[20px] md:text-[30px] font-semibold'> <span className='text-[#1090CB]'>Lorem Ipsum </span>  is simply dummy <br /> text  of the printing. </h6>
                        </div>
                        <p className="text-[#545454] text-[16px] font-normal md:w-[476px]">
                            EXAMPLE COMPANY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS.
                        </p>
                    </div>
                    <div className="flex flex-col md:w-1/2 md:pl-12">
                        <img src={heroMobile} alt="" />
                    </div>
                </div>
            </div>
            {/* First part End */}
            {/* second part start */}
            <div className="container flex  md:flex-row flex-col-reverse  px-5 mx-auto items-center">
                <div className="flex flex-col md:w-1/3">
                    <img src={threeD} alt="threeD" />
                </div>
                <div className="md:pl-24 md:w-3/5  md:pr-12 md:py-8 md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                    <div className="flex gap-6 items-cente">

                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#1090CB]  mb-5 flex-shrink-0">
                            <img src={user} alt="" />
                        </div>
                        <div className='mt-3'>
                            <h1 className="text-[#000000] text-[17px] font-medium mb-1">Lorem Ipsum is simply dummy text</h1>
                            <p className='text-[#868686] text-[14px] font-normal'>Lorem Ipsum is simply dummy text</p>
                        </div>
                    </div>
                    <div className='pt-5 pb-5'>
                        <h6 className='text-[20px] md:text-[30px] font-semibold'> <span className='text-[#1090CB]'>Lorem Ipsum </span>  is simply dummy <br /> text  of the printing. </h6>
                    </div>
                    <p className="text-[#545454] text-[16px] font-normal md:w-[476px]">
                        EXAMPLE COMPANY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS.
                    </p>
                </div>

            </div>

            {/* second part end*/}

            {/* Third Part Start */}
            <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
                <div className="md:w-1/2 md:pr-12 md:py-8 md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                    <div className="flex gap-6 items-cente">

                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#9208D3]  mb-5 flex-shrink-0">
                            <img src={user} alt="" />
                        </div>
                        <div className='mt-3'>
                            <h1 className="text-[#000000] text-[17px] font-medium mb-1">Lorem Ipsum is simply dummy text</h1>
                            <p className='text-[#868686] text-[14px] font-normal'>Lorem Ipsum is simply dummy text</p>
                        </div>
                    </div>
                    <div className='pt-5 pb-5'>
                        <h6 className='text-[20px] md:text-[30px] font-semibold'> <span className='text-[#1090CB]'>Lorem Ipsum </span>  is simply dummy <br /> text  of the printing. </h6>
                    </div>
                    <p className="text-[#545454] text-[16px] font-normal md:w-[476px]">
                        EXAMPLE COMPANY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS.
                    </p>
                </div>
                <div className="flex flex-col md:w-1/2">
                    <img src={smartboy} alt="" />
                </div>
            </div>
            {/* Third Part end */}

        </div>
    )
}

export default Printing