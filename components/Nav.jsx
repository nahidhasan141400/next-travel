import Link from "next/link";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Logo from "./util/Logo";

const Nav = () => {
  const [nav, setNav] =  useState(false)
  return (
    <div>

    <div className={`${nav? "h-17" : "h-0"} z-50  w-full backdrop-blur-sm  border-b-1 bg-neutral-50/5 shadow-sm fixed transition-all duration-200 ease-in-out overflow-hidden`} >
      <div className=" absolute top-2 right-6 ">
      <button onClick={()=>{setNav((s)=>!s)}} className="btn btn-square bg-logoSun hover:bg-logoRay hover:shadow-lg shadow-md ring-0 border-0">
           <span className=" text-2xl">
           <IoMdClose/>
           </span>
          </button>
      </div>
      <div className="w-full py-4 max-w-7xl h-full mx-auto ">
        <ol className="flex items-center h-full justify-center">
          <li><Link href={"#"}><p className="flex items-center transition-all duration-1000 font-bold text-md ease-in-out py-2 bg-logoBlue px-4 rounded-md text-logoRay hover:text-logoBlue hover:bg-logoSun shadow-lg "><span className="text-xl"><AiOutlineHome/></span>HOME</p></Link></li>
        </ol>
      </div>
    </div>
    <div className="w-full h-20 fixed flex z-40 justify-center items-center overflow-hidden">
     
      <div className="max-w-7xl w-full h-full flex-1 relative flex justify-between items-center px-2 py-2">
        <div className="h-full relative">
          <Logo />
        </div>
        {/* // btn  */}
        <div className="relative">
          <button onClick={()=>{setNav((s)=>!s)}} className={` ${nav? "hidden" : ""} btn btn-square bg-logoSun hover:bg-logoRay hover:shadow-lg ring-0 border-0`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Nav;
