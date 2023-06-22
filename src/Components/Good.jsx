import React from 'react'
import benoshop from '../images/benoshop.svg'
import caspio from '../images/caspio.svg'
import hyper from '../images/hyper.svg'
import lio from '../images/lio.svg'

const Good = () => {
    return (
        <div>
            <div className="container px-5 py-20 mx-auto ">
                <h6 className='text-[#000000] text-[24px] font-medium text-center'>You will be in good Company</h6>
                <div className=" flex flex-wrap -m-4 text-center">
                    <div className="p-4 sm:w-1/4 w-1/2 flex justify-center">
                        <img src={benoshop} alt="benoshop" />
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2 flex justify-center">
                        <img src={caspio} alt="caspio" />

                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2 flex justify-center">
                        <img src={hyper} alt="hyper" />

                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2 flex justify-center">
                        <img src={lio} alt="lio" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Good