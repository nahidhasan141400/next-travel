import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../../components/util/Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

const PopulerT = () => {

const [data,setData] = useState([]);

useEffect(()=>{
  const getData = async ()=>{
    try {
      const serverRes = await axios("/api/v1.0/tour");
      // console.log(serverRes.data[0]);
      setData(
        serverRes.data.filter(
            (e) => JSON.parse(e.catagory).indexOf('hajj') !== -1
          )
      );
    } catch (error) {
      console.log(error);
    }
  }
  getData()
},[])


  return (
    <div className="w-full  min-h-[700px] flex justify-center flex-col items-center">
      <div className="w-full text-center flex flex-col justify-center items-center  relative h-full flex-2">
        <p className="font-2xl text-neutral-700">Take a Look at Special Offers</p>
        <h1 className="text-4xl font-bold bg-gradient-to-t from-logoRay to-logoBlue text-transparent bg-clip-text pb-2">Umrah Hajj Package</h1>
      </div>
      <div className="w-full flex-4 h-full grid grid-cols-1 md:grid-cols-2 max-w-[1200px]">
        {/* row for slider  */}
       <div className="w-full relative">
        <img src="/img/makkah.png" alt="" />
       </div>
       <div className="w-full h-full relative md:ml-2">
        <p className="font-light text-justify mt-20 md:text-xl text-lg px-3 ">Sun Holidays Ltd. not only provides the best Umrah packages from Bangladesh, but also ensures that you complete your long-awaited travel to the two holy cities of Makkah and Madinah. Our most skilled and experienced Mu&#39;allim will accompany you the entire journey.</p>
        <ul className="font-light  mt-3 list-none text-xl">
          <li className="list-icon">12* days</li>
          <li className="list-icon">Visa, Air ticket, Transport & Ziyarah</li>
          <li className="list-icon">Accommodation in Makkah & Madinah</li> 
        </ul>
        <a href="tel:8801873838301" className="btn btn-outline btn-warning mt-20">
          Call For More Details
        </a>
       </div>
      </div>
    </div>
  );
};

export default PopulerT;
