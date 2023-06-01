import React from "react";
import { ImLocation2 } from "react-icons/im";
import Link from "next/link";

const HomeRes = () => {
  return (
    <div className="w-full max-w-7xl mx-auto pb-7">
      <div className="w-full flex justify-center flex-col items-center pt-10 pb-2">
        <p className="relative -left-[90px] md:-left-[320px] text-logoSun">
          Our own Resorts
        </p>
        <h1 className="text-2xl font-bold text-center md:text-left md:text-5xl">
          Sailor Moon Resorts, Saint Martin
        </h1>
        <p className="md:text-2xl text-xl font-thin">Cox-Bazar,Bangladesh</p>
      </div>
      <div className="mt-10 w-full relative">
        <p className="absolute flex justify-start items-center bottom-3 z-10 right-3 text-base-100  stroke-base-100 drop-shadow-lg stroke-2  font-bold text-2xl ">
          <span className="relative pr-2 text-logoSun animate-pulse text-3xl top-1">
            <ImLocation2 />
          </span>{" "}
          Konarpara, West-beach{" "}
        </p>
        <img src="/img/sailor/sunholiday-w.jpg" alt="" />
      </div>
      <div>
        <p className="text-lg mt-5 text-justify">
        Sailor Moon Resorts, Saint Martin is situated at West Sea-Beach Konarpara, Saint Martin, Cox&#39;s Bazar, Bangladesh. We own this resort since 2022. Sailor Moon Resorts one of the finest resort in Saint Martin. With the varity of services Sailor Moon Resort try to provide the best value for money service to there customer. 100% Customer Satisfactory obtaining is our main goal.&nbsp;
        </p>
        <Link href={'/resort'} className="rounded-md mt-5 bg-gradient-to-tr to-logoBlue from-logoRay py-3 px-10 text-neutral-50 font-bold text-xl btn border-none hover:scale-95">See Details</Link>
       
      </div>
    </div>
  );
};

export default HomeRes;
