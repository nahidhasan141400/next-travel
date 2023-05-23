import { BiTime } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import React,{useEffect,useState} from "react";
import axios from "axios";
import Card from "../components/util/Card"
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

const Discount = () => {
  const [data, setData] = React.useState([]);
  const [id, setid] = React.useState([]);
  const [add, adset] = React.useState(false);
  React.useEffect((e) => {
    const get = async () => {
      try {
        const serverres = await axios("/api/v1.0/tour");
        const serverresid = await axios("/api/v1.0/addPtour");
        setid(serverresid.data);
      const datas = serverresid.data.map((e)=>{
          return serverres.data.filter((x)=> +x.id === +e.data)[0]
        })

        setData(datas);


      } catch (error) {
        console.log(error);
      }
    };
    get()
  }, []);

  return (
    <div className='relative w-full h-screen bg-img3'>
      <div className="w-full h-full relative mx-auto flex flex-col ">
            <div className="w-full h-full py-10 mb-3 flex-2 flex justify-center items-center">
                <p className="font-bold text-3xl md:text-4xl bg-gradient-to-tr from-logoSun to-logoTag text-transparent bg-clip-text">DEALS AND DISCOUNTS</p>
            </div>
            <div className="flex-5 h-full sw n">
            <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            // loop={true}
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
            navigation={true}
            pagination={{
              clickable: true
            }}
            modules={[EffectCoverflow,Autoplay, Pagination]}
            className="mySwiper"
          >
            {data.map((e, i) => {
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
  )
}

export default Discount