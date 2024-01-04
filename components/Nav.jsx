import Link from "next/link";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { GiBackpack } from "react-icons/gi";
import { HiOutlineMail, HiOutlineTicket } from "react-icons/hi";
import { ImProfile } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import { TbListDetails } from "react-icons/tb";
import Logo from "./util/Logo";

let Items = [
  {
    name: "home",
    src: "/",
    icon: AiOutlineHome,
  },
  {
    name: "About Us",
    src: "/About",
    icon: TbListDetails,
  },
  {
    name: "Visa",
    src: "/Visa",
    icon: ImProfile,
  },
  {
    name: "Ticket",
    src: "/Ticket",
    icon: HiOutlineTicket,
  },
  {
    name: "Tour",
    src: "/Tour",
    icon: GiBackpack,
  },
  {
    name: "Contact",
    src: "/contact",
    icon: HiOutlineMail,
  },
  {
    name: "Own Resort",
    src: "/resort",
    icon: GiBackpack,
  },
];

const Nav = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="nav">
      <div
        className={`${
          nav ? "h-screen md:h-17 " : "h-0 overflow-hidden"
        } z-50  w-full backdrop-blur-sm  border-b-1 bg-[#ffffff7a] shadow-sm fixed transition-all duration-200 ease-in-out `}
      >
        <div className=" absolute top-2 right-6 ">
          <button
            onClick={() => {
              setNav((s) => !s);
            }}
            className="btn btn-square bg-logoSun hover:bg-logoRay hover:shadow-lg shadow-md ring-0 border-0"
          >
            <span className=" text-2xl">
              <IoMdClose />
            </span>
          </button>
        </div>
        <div className="w-full py-4 max-w-7xl h-full mx-auto ">
          <ol className="flex items-center h-full justify-center flex-col md:flex-row">
            {Items.map((e, i) => {
              if (e.name === "Tour") {
                return (
                  <li key={i}>
                    <div className="dropdown">
                      <label
                        tabIndex={0}
                        className="flex m-2 items-center transition-all duration-1000  text-sm ease-in-out py-2 bg-cyan-600 w-32 justify-center md:w-auto md:bg-cyan-200/50 px-4  capitalize rounded-md text-logoSun hover:text-base-100 font-bold hover:bg-logoSun shadow-lg cursor-pointer"
                      >
                        <span className="text-md mr-1">
                          <e.icon />
                        </span>
                        {e.name}
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[300] menu p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <Link href={`/Tour/package/international`}>
                            International
                          </Link>
                        </li>
                        <li>
                          <Link href={`/Tour/package/domestic`}>Domestic</Link>
                        </li>
                        <li>
                          <Link href={`/Tour/more/hajj`}>Hajj & Umrah</Link>
                        </li>
                        <li>
                          <Link href={`/Tour`}>All packages</Link>
                        </li>
                      </ul>
                    </div>

                    {/* <Link href={e.src}>
                      <p className="flex m-2 items-center transition-all duration-1000  text-sm ease-in-out py-2 bg-cyan-600 w-32 justify-center md:w-auto md:bg-cyan-200/20 px-4  capitalize rounded-md text-logoSun hover:text-base-100 font-bold hover:bg-logoSun shadow-lg ">
                        <span className="text-md mr-1">
                          <e.icon />
                        </span>
                        {e.name} 
                      </p>
                    </Link> */}
                  </li>
                );
              } else {
                return (
                  <li key={i}>
                    <Link href={e.src}>
                      <p className="flex m-2 items-center transition-all duration-1000  text-sm ease-in-out py-2 bg-cyan-600 w-32 justify-center md:w-auto md:bg-cyan-200/50 px-4  capitalize rounded-md text-logoSun hover:text-base-100 font-bold hover:bg-logoSun shadow-lg ">
                        <span className="text-md mr-1">
                          <e.icon />
                        </span>
                        {e.name}
                      </p>
                    </Link>
                  </li>
                );
              }
            })}
          </ol>
        </div>
      </div>
      <div
        className={`w-full h-20 fixed flex !z-[5000] ${
          nav && "pointer-events-none"
        } justify-center items-center overflow-hidden`}
      >
        <div className="max-w-7xl w-full h-full flex-1 relative flex justify-between items-center px-2 py-2">
          <div
            className={`h-full relative ${
              nav && "-translate-y-2"
            } transition-all duration-200`}
          >
            <Logo />
          </div>
          {/* // btn  */}
          <div className="relative z-50">
            <button
              onClick={() => {
                setNav((s) => !s);
              }}
              className={` ${
                nav ? "hidden" : ""
              } btn btn-square bg-logoSun hover:bg-logoRay hover:shadow-lg ring-0 border-0`}
            >
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
