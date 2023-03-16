import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";



const Category = () => {
  return (
    <div className="p-10 max-w-7xl mx-auto">
      <div className="w-full text-center py-4 mb-3">
        <p className="text-2xl">Find a Tour by</p>
        <h1 className="text-5xl font-bold bg-gradient-to-tr to-logoSun from-logoBlue bg-clip-text text-transparent">DESTINATION</h1>

      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={8}
        loop={true}
        pagination={{
          clickable: true,
        }}

        breakpoints={{
          340: {
            width: 340,
            slidesPerView: 2,
          },
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 2,
          },
        
        }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // breakpoints={{...breakpoints}}
        modules={[Pagination,Navigation,Autoplay]}
        className="mySwiper"
      >
        {[1, 2, 3, 4, 5].map((e, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="w-full flex justify-center items-center">
              <div className="relative m-2 rounded-full">
                <div className="w-40 h-40 relative flex justify-center items-center rounded-full overflow-hidden bg-logoSun cursor-pointer">
                  <div className="img-con- h-full w-full">
                    <Image
                      src={"/img/hero.jpg"}
                      alt="nahd"
                      object-fit={"cover"}
                      fill={true}
                      className="img"
                    />
                  </div>
                  <p className="absolute text-2xl text-logoSun capitalize font-extrabold text">
                    Cox-Bazar
                  </p>
                </div>
              </div>
              </div>
            
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Category;
