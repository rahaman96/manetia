import React from 'react'
import app from '../images/app.svg'
import seo from '../images/seo.svg'
import ar from '../images/ar.svg'
import mobile from '../images/mobile.svg'

const Application = () => {
    return (
        <div>
            <div className='border-b-[0.7px] border-[#C7C7C7]'>
                <div className="container px-5 py-5 mt-5 mx-auto">
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 ">
                        <div className="p-4 md:w-1/4 flex">
                            <div className="w-[83px] h-[82px] inline-flex items-center justify-center rounded-[20px] bg-[#EFEAFF] text-indigo-500 mb-4 flex-shrink-0">
                                <img src={app} alt="app" className='w-[38px] h-[37px]' />
                            </div>
                            <div className="flex-grow pl-5 mt-3">
                                <h2 className="text-[#000000] text-[20px] font-medium">Web Application</h2>
                                <p className="text-[#969696] text-[15px] font-normal">Lorem Ipsum is simply</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 flex">
                            <div className="w-[83px] h-[82px] inline-flex items-center justify-center rounded-[20px] bg-[#ECFFDA] text-indigo-500 mb-4 flex-shrink-0">
                                <img src={seo} alt="app" className='w-[38px] h-[37px]' />
                            </div>
                            <div className="flex-grow pl-5 mt-3">
                                <h2 className="text-[#000000] text-[20px] font-medium">SEO</h2>
                                <p className="text-[#969696] text-[15px] font-normal">Lorem Ipsum is simply</p>

                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 flex">
                            <div className="w-[83px] h-[82px] inline-flex items-center justify-center rounded-[20px] bg-[#DAE6FF] text-indigo-500 mb-4 flex-shrink-0">
                                <img src={ar} alt="app" className='w-[38px] h-[37px]' />
                            </div>
                            <div className="flex-grow pl-5 mt-3">
                                <h2 className="text-[#000000] text-[20px] font-medium">AR/VR Solutions</h2>
                                <p className="text-[#969696] text-[15px] font-normal">Lorem Ipsum is simply</p>

                            </div>
                        </div>

                        <div className="p-4 md:w-1/4 flex">
                            <div className="w-[83px] h-[82px] inline-flex items-center justify-center rounded-[20px] bg-[#FFE5DA] text-indigo-500 mb-4 flex-shrink-0">
                                <img src={mobile} alt="app" className='w-[38px] h-[37px]' />
                            </div>
                            <div className="flex-grow pl-5 mt-3">
                                <h2 className="text-[#000000] text-[20px] font-medium">Mobile Applications</h2>
                                <p className="text-[#969696] text-[15px] font-normal">Lorem Ipsum is simply</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Application