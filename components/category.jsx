import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";


const Category = () => {
  return (
    <>
    <Swiper
      slidesPerView={4}
      spaceBetween={10}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >

        {/* slider card  */}
      <SwiperSlide>
        <div className="relative m-2 rounded-full">
          <div className="w-40 h-40 relative flex justify-center items-center rounded-full overflow-hidden bg-logoSun cursor-pointer">
          <div className="img-con-category">
                    <Image src={"/img/hero.jpg"} alt="nahd" object-fit={"cover"} fill={true} className="img"/>
                </div>
                <p className="absolute">nahid new</p>
          </div>
                
        </div>
      </SwiperSlide>
       {/* slider card  */}
        
    </Swiper>
  </>
  )
}

export default Category