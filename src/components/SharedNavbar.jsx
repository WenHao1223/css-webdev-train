import { useEffect } from "react";
import { Outlet, useNavigate } from 'react-router-dom';

const sharedNavbar = () => {
  return (
    <div className="h-[13]">
      <nav className="absolute md:sticky sm:sticky xs:sticky inset-x-0 top-0 navbar flex min-h-[6rem] px-6 md:px-12 z-30 transition-all items-center">
        <div className="absolute left-20 2xl:left-20 xl:left-20 lg:left-20 md:left-10 sm:left-10 xs:left-5 left-5 flex md:flex md:flex-grow flex-row w-1/2 justify-start items-center">
          <div className="flex items-center gap-4 z-10 cursor-pointer">
            <img className="flex justify-center gap-4"  src="./src/assets/vcsirf_logo.svg" alt="CSS Logo" width="110px"/>
            <div className='text-left font-normal tracking-wider -z-10'>
              <p className="font-medium 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-md xs:text-md pb-1 mb-1">Start your journey here!</p>
              <p className="2xl:text-md xl:text-md lg:text-md md:text-md sm:text-xs xs:text-xs">Explore more about company you may jump in!</p>
            </div>
          </div>
        </div>
        <div className="font-light absolute right-20 2xl:right-20 xl:right-20 lg:right-20 md:right-10 sm:right-10 xs:right-5 right-5 flex md:flex md:flex-grow flex-row w-1/2 justify-end items-center">
          <button className="hover:text-[#DE5131] active:text-[#913520] flex ms-6 me-6 justify-end items-center 2xl::text-xl xl:text-xl lg:text-xl md:text-xl sm:text-sm xs:text-sm">
            Home
          </button>
          <button className="text-[#DA7474] hover:text-[#DE5131] active:text-[#913520] flex ms-6 me-6 justify-end items-center 2xl::text-xl xl:text-xl lg:text-xl md:text-xl sm:text-sm xs:text-sm">
            Career
          </button>
          <button className="hover:text-[#DE5131] active:text-[#913520] flex ms-6 me-6 justify-end items-center 2xl::text-xl xl:text-xl lg:text-xl md:text-xl sm:text-sm xs:text-sm">
            Dashboard
          </button>
          <button className="hover:text-[#DE5131] active:text-[#913520] flex ms-6 me-6 justify-end items-center 2xl::text-xl xl:text-xl lg:text-xl md:text-xl sm:text-sm xs:text-sm">
            Sign out
          </button>
        </div>
      </nav>

      <Outlet/>
    </div>
  );
}

export default sharedNavbar;