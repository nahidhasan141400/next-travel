import React from 'react';
import { FiMessageSquare } from "react-icons/fi";

const BD = [
    {
      name: "Syed Munir Uddin",
      des: "Chairman",
      img: "/img/team/persone.jpg",
      msg: false,
      magText: "",
    },
    {
      name: "Sayed Zillur Rahman",
      des: "Vice Chairman",
      img: "/img/team/persone.jpg",
      msg: true,
      magText: "",
    },
  ];

const Team = () => {
  return (
    <div>
         {/* team  */}
         <div className="w-full relative  py-4 mt-4">
            <div className="py-4 text-center pt-5">
              <h1 className="text-3xl font-bold">Board of Directors</h1>
            </div>
          </div>
          {/* teams row  */}
          <div className="relative w-full  pb-10">
            <div className="w-full relative max-w-7xl mx-auto flex items-center flex-col md:flex-row justify-around">
              {/* card */}
              {BD.map((e, i) => {
                return (
                  <div key={i} className="cardnh mb-3 my-3 relative bdcard w-60">
                    <div className="img">
                      <img
                        src={e.img}
                        className="w-60 h-60 object-cover mask mask-hexagon-2"
                        alt=""
                      />
                    </div>
                    <div className=" name absolute backdrop-blur-sm bg-gradient-to-tr to-neutral-300/10 from-neutral-600/20 p-2 -bottom-5 right-0 md:right-20 rounded-md">
                      <h1 className="text-2xl font-bold bg-gradient-to-t from-logoTag to-logoSun bg-clip-text text-transparent whitespace-nowrap">
                        {e.name}
                      </h1>
                      <p className="text-neutral-600">{e.des}</p>
                      {e.msg ? (
                        <div className="py-1 px-2 flex items-center cursor-pointer bg-gradient-to-tr from-logoRay to-logoTag rounded-md text-neutral-50 mt-2 hover:to-logoRay hover:from-logoTag ease-in transition-all ms">
                          {" "}
                          <span className="relative pr-1 top-px">
                            {" "}
                            <FiMessageSquare />
                          </span>
                          massage
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
    </div>
  )
}

export default Team