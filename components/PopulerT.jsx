import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../components/util/Card";

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
      // console.log(serverRes.data);
      setData(serverRes.data);
    } catch (error) {
      console.log(error);
    }
  }
  getData()
},[])


  return (
    <div className="w-full h-screen flex justify-center flex-col items-center bg-img1">
      <div className="w-full text-center flex flex-col justify-center items-center  relative h-full flex-2">
        <p className="font-2xl text-neutral-700">Take a Look at Our</p>
        <h1 className="text-4xl font-bold bg-gradient-to-t from-logoRay to-logoBlue text-transparent bg-clip-text">MOST POPULAR TOURS</h1>
      </div>
      <div className="w-full flex-4 h-full ">
        {/* row for slider  */}
        <div className="w-full sw flex justify-center items-center ">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
          
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[EffectCoverflow,Autoplay, Pagination]}
            className="mySwiper"
          >
           { data.map((e, i) => {
              return (
                <SwiperSlide key={i} style={{

                }}>
                  <Card data={e}/>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PopulerT;
