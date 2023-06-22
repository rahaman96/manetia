import React, { useState } from 'react';
import dot from '../images/dot.svg'
const Navbar = () => {
  const [active, setActive] = useState('home')
  const [visible, setVisible] = useState(false)
  console.log('act', active);
  return (
    <header className="bg-[#FFFFF] shadow-lg py-4">
      <div className="mx-auto flex items-center justify-between px-4 font-sans">
        <div className="flex items-center">
          <a href="#" className="text-[#1090CB] text-[29px] font-bold leading-[44px]">Logo</a>
          {/* <!-- Add additional menu items here --> */}
        </div>

        <nav className="hidden md:block">

          <ul className="flex space-x-14 items-center">
            <li onClick={() => { setActive('home') }}>
              {active === 'home' && <img src={dot} alt="dot" />}
              <a href="#" className={`text-[#000000 text-[16px] font-normal leading-[24px] cursor-pointer text-[${active === 'home' ? '#1090CB' : 'black'}]`}>Home</a></li>
            <li onClick={() => { setActive('about') }}>
              {active === 'about' && <img src={dot} alt="dot" />}

              <a href="#" className={`text-[#000000 text-[16px] font-normal leading-[24px] cursor-pointer text-[${active === 'about' ? '#1090CB' : 'black'}]`}>About</a></li>
            <li onClick={() => { setActive('service') }}>
              {active === 'service' && <img src={dot} alt="dot" />}

              <a href="#" className={`text-[#000000 text-[16px] font-normal leading-[24px] cursor-pointer text-[${active === 'service' ? '#1090CB' : 'black'}]`}>Services</a></li>
            <li onClick={() => { setActive('blog') }}>
              {active === 'blog' && <img src={dot} alt="dot" />}
              <a href="#" className={`text-[#000000 text-[16px] font-normal leading-[24px] cursor-pointer text-[${active === 'blog' ? '#1090CB' : 'black'}]`}>Blog</a></li>
            <button className="bg-[#1090CB] w-[125px] h-[41px] text-[13px] font-normal leading-[24px] text-white rounded">
              Contact Us
            </button>
          </ul>
        </nav>

        {/* <!-- Add responsive menu button for mobile --> */}
        <div onClick={() => (setVisible(!visible))} className="md:hidden">

          <button type="button" className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          {/* <!-- Add your responsive menu button implementation here --> */}
        </div>
      </div>
      {
        visible && <div className='visible md:invisible'>
          <ul className="items-center px-5 ">
            <li onClick={() => { setActive('home') }} className=' mt-2' >
              {active === 'home' && <img src={dot} alt="dot" />}
              <a href="#" className={`text-[#000000 text-[16px] font-normal leading-[24px] cursor-pointer text-[${active === 'home' ? '#1090CB' : 'black'}]`}>Home</a></li>
            <li onClick={() => { setActive('about')}} className=' mt-2' >
              {active === 'about' && <img src={dot} alt="dot" />}

              <a href="#" className={`text-[#000000 text-[16px]  pt-[10px] font-normal leading-[24px] cursor-pointer text-[${active === 'about' ? '#1090CB' : 'black'}]`}>About</a>
              </li>
            <li onClick={() => { setActive('service') }} className='mt-2'>
              {active === 'service' && <img src={dot} alt="dot" />}

              <a href="#" className={`text-[#000000 text-[16px] font-normal leading-[24px] cursor-pointer text-[${active === 'service' ? '#1090CB' : 'black'}]`}>Services</a></li>
            <li onClick={() => { setActive('blog') }} className=' mt-2' >
              {active === 'blog' && <img src={dot} alt="dot" />}
              <a href="#" className={`text-[#000000 text-[16px] font-normal leading-[24px] cursor-pointer pb-6 text-[${active === 'blog' ? '#1090CB' : 'black'}]`}>Blog</a>
              </li>
            <button className="bg-[#1090CB] w-[125px] h-[41px] text-[13px] font-normal leading-[24px] text-white rounded mt-4">
              Contact Us
            </button>
          </ul>

        </div>
      }


    </header>
  );
};

export default Navbar;
