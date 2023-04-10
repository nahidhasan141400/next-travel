import React from "react";
import { BiTimeFive } from "react-icons/bi";
import Layout from "../../components/Layout";

const Tour = () => {
  return (
    <Layout>
      {/* top  */}
      <div className=" w-full h-500px relative">
        <div className=" w-full py-20 h-full relative overflow-hidden">
          <div className=" w-full absolute h-full top-0 left-0">
            <img
            className="w-full h-full object-cover opacity-75"
              src="https://source.unsplash.com/random/400×1200/?sky"
              alt=""
            />
          </div>
        <div className="relative w-full h-full flex justify-center items-center">
            <div className="w-full max-w-7xl mx-auto flex justify-center items-center">
                    <div className="w-3/4 h-44 glass rounded-lg flex justify-center items-center">
                        <h1 className="flex-2 text-2xl text-transparent px-3 text-center bg-gradient-to-tr from-logoTag to-logoBlue bg-clip-text font-bold capitalize">SINGAPORE DREAM CRUISE 5 DAYS AND 4 NIGHTS PACKAGE</h1>
                        <div className="flex-1 h-full w-1/4 relative">
                            <img className="w-72 absolute bottom-0" src="/graphic/travel.png" alt="" />
                        </div>
                    </div>
            </div>
        </div>
        </div>
      </div>

      {/* imfo fast  */}
      <div className="w-full relative py-7 bg-travel min-h-screen">
            <div className="w-full max-w-6xl mx-auto backdrop-blur-sm p-4 ">
                <h1 className="text-3xl drop-shadow-md  font-bold capitalize text-transparent bg-gradient-to-tr from-logoBlue to-logoTag bg-clip-text">SINGAPORE DREAM CRUISE 5 DAYS AND 4 NIGHTS PACKAGE</h1>
                
                <p className="flex items-center text-lg text-neutral-700 "><span className="text-logoTag text-xl pr-1"><BiTimeFive/></span> 5 Day and 4 Night </p>
                <span className="w-48 h-1 rounded-xl relative inline-block bg-logoRay"></span>
                <span className="w-20 ml-2 h-1 rounded-xl relative inline-block bg-logoRay"></span>
                <span className="w-4 ml-2 h-1 rounded-xl relative inline-block bg-logoRay"></span>
            </div>
            <div className="relative w-full max-w-6xl mx-auto mt-5">
                <div className="w-full relative">
                    <img className="relative w-full" src="/img/cox.jpg" alt="" />
                </div>
                <div className="w-full relative flex mt-1 overflow-hidden p-1 overflow-x-scroll">
                    <div className="w-52 min-w-52 h-32 mr-2 relative ring-1 ring-logoRay rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-lg">
                        <img className="relative w-full h-full object-cover" src="/img/cox.jpg" alt="" />
                    </div>
                    <div className="w-52 min-w-52 h-32 mr-2 relative ring-1 ring-logoRay rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-lg">
                        <img className="relative w-full h-full object-cover" src="/img/cox.jpg" alt="" />
                    </div>
                    <div className="w-52 min-w-52 h-32 mr-2 relative ring-1 ring-logoRay rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-lg">
                        <img className="relative w-full h-full object-cover" src="/img/cox.jpg" alt="" />
                    </div>
                    <div className="w-52 min-w-52 h-32 mr-2 relative ring-1 ring-logoRay rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-lg">
                        <img className="relative w-full h-full object-cover" src="/img/cox.jpg" alt="" />
                    </div>
                    <div className="w-52 min-w-52 h-32 mr-2 relative ring-1 ring-logoRay rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-lg">
                        <img className="relative w-full h-full object-cover" src="/img/cox.jpg" alt="" />
                    </div>
                    <div className="w-52 min-w-52 h-32 mr-2 relative ring-1 ring-logoRay rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-lg">
                        <img className="relative w-full h-full object-cover" src="/img/cox.jpg" alt="" />
                    </div>
                </div>
            </div>
      </div>
      {/* image?  */}
     
    </Layout>
  );
};

export default Tour;
