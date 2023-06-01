import React,{useState} from "react";
import Layout from "../../components/Layout";
import Form from "../../components/resortForm/Form";


import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Index = () => {
  const [form,setform] = useState();
  const [index, setIndex] = React.useState(-1);
  return (
    <Layout>
          <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={[
          { src: "/img/sailor/sunholiday-w.jpg" },
          { src: "/img/sailor/sailor_ (16).jpg" },
          { src: "/img/sailor/sailor_ (2).jpg" },
          { src: "/img/sailor/sailor_ (17).jpg" },
          { src: "/img/sailor/sailor_-(30).jpg" },
          { src: "/img/sailor/sailor_ (21).jpg" },
          { src: "/img/sailor/SHA_6251.JPG" },
          { src: "/img/sailor/SHA_6244 copy.jpg" },
        ]}
      />
      <div className="w-full flex justify-center flex-col items-center pt-40 pb-14">
        {
          form?<Form form={form} close={setform}/>:""
        }
        <p className="relative -left-[90px] md:-left-[320px] text-logoSun">
          Our own Resorts
        </p>
        <h1 className="text-2xl font-bold text-center md:text-left md:text-5xl">
          Sailor Moon Resorts, Saint Martin
        </h1>
        <p className="md:text-2xl text-xl font-thin">Cox-Bazar,Bangladesh</p>
      </div>
      {/* main  */}
      <div className="w-full px-4 max-w-7xl mx-auto">
        {/* description  */}
        <div className="text-justify font-light">
          <p>
          <p>Sailor Moon Resorts, Saint Martin is situated at West Sea-Beach Konarpara, Saint Martin, Cox&#39;s Bazar, Bangladesh. We own this resort since 2022. Sailor Moon Resorts one of the finest resort in Saint Martin. With the varity of services Sailor Moon Resort try to provide the best value for money service to there customer. 100% Customer Satisfactory obtaining is our main goal.&nbsp;</p>

          </p>
        </div>
        {/* b photo  */}
        <div className="mt-10">
          <div>
            
          </div>
          <img onClick={()=>{setIndex(0)}} src="/img/sailor/sunholiday-w.jpg" alt="" />
        </div>

        {/* gelary  */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex w-full mb-20 flex-wrap">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                Premium <span className="text-logoSun">3 star</span> Resorts
                experience
              </h1>
              <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-justify">
              Welcome to Sailor Moon Resort,Saint Martin where enchantment meets relaxation! Situated on the stunning shores of a pristine beach, our resort offers a captivating blend of beachfront beauty, exceptional dining experiences, and inviting facilities. Prepare to embark on a seaside retreat that will leave you feeling rejuvenated and spellbound.
              </p>
            </div>
            <div className="flex flex-wrap flex-col md:flex-row  md:-m-2 -m-1">
              <div className="flex flex-wrap md:w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <img
                  onClick={()=>{setIndex(1)}}
                    alt="gallery"
                    className="hover:scale-105 ease-linear transition-all shadow-md hover:shadow-lg w-full object-cover h-full object-center block"
                    src="/img/sailor/sailor_ (16).jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                  onClick={()=>{setIndex(2)}}
                    alt="gallery"
                    className="hover:scale-105 ease-linear transition-all shadow-md hover:shadow-lg w-full object-cover h-full object-center block"
                    src="/img/sailor/sailor_ (2).jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img
                  onClick={()=>{setIndex(3)}}
                    alt="gallery"
                    className="hover:scale-105 ease-linear transition-all shadow-md hover:shadow-lg w-full h-full object-cover object-center block"
                    src="/img/sailor/sailor_ (17).jpg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap md:w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img
                  onClick={()=>{setIndex(4)}}
                    alt="gallery"
                    className="hover:scale-105 ease-linear transition-all shadow-md hover:shadow-lg w-full h-full object-cover object-center block"
                    src="/img/sailor/sailor_-(30).jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                  onClick={()=>{setIndex(5)}}
                    alt="gallery"
                    className="hover:scale-105 ease-linear transition-all shadow-md hover:shadow-lg w-full object-cover h-full object-center block"
                    src="/img/sailor/sailor_ (21).jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                  onClick={()=>{setIndex(6)}}
                    alt="gallery"
                    className="hover:scale-105 ease-linear transition-all shadow-md hover:shadow-lg w-full object-cover h-full object-center block"
                    src="/img/sailor/SHA_6251.JPG"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* future  */}
        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 z-0 w-full h-full bg-gray-100 lg:w-3/4" />
          </div>
          <div className="relative">
            <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
              <div className="grid gap-12 row-gap-5 md:grid-cols-2">
                <div className="relative">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 w-32 -mt-8 -ml-16 text-blue-gray-100 lg:w-32 lg:-mt-12"
                  >
                    <defs>
                      <pattern
                        id="d06ca312-d4ed-465f-ad18-fb0c0f92b6f1"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#d06ca312-d4ed-465f-ad18-fb0c0f92b6f1)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <div className="relative">
                    <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                      <svg
                        className="w-8 h-8 text-teal-900"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                      </svg>
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">
                    Dining
                    </h6>
                    <p className="text-sm text-gray-900 text-justify">
                    The Sailor Moon Resort, Saint Martin in Cox's Bazar offers a diverse and tantalizing dining experience, featuring an array of delectable cuisines picturesque dining settings overlooking the stunning beach. 
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                    <svg
                      className="w-8 h-8 text-teal-900"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                  <h6 className="mb-2 font-semibold leading-5">
                  BBQ & Party
                  </h6>
                  <p className="text-sm text-gray-900 text-justify">
                  The Sailor Moon Resort, Saint Martin in Cox's Bazar offers an enticing BBQ and party experience, providing guests with delectable grilled delights and a vibrant atmosphere, creating memorable moments for gatherings and celebrations.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                    <svg
                      className="w-8 h-8 text-teal-900"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                  <h6 className="mb-2 font-semibold leading-5">
                  Resting Area
                  </h6>
                  <p className="text-sm text-gray-900 text-justify">
                  The Sailor Moon Resort, Saint Martin in Cox's Bazar offers a calm and pleasant resting space where visitors may unwind and relax while taking in the spectacular views of the coastline.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                    <svg
                      className="w-8 h-8 text-teal-900"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                  <h6 className="mb-2 font-semibold leading-5">
                  Beach Activities
                  </h6>
                  <p className="text-sm text-gray-900 text-justify">
                  The Sailor Moon Resort, Saint Martin in Cox's Bazar offers a plethora of beach activities, including sunbathing, swimming, beach volleyball ensuring a fun-filled and rejuvenating experience for all guests.
                  </p>
                </div>
              </div>
              <div>
                <img
                onClick={()=>{setIndex(7)}}
                  className="hover:scale-105 ease-linear transition-all shadow-md hover:shadow-lg object-cover w-full h-56 rounded  sm:h-96"
                  src="/img/sailor/SHA_6244 copy.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* pricing  */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-logoRay sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Pricing</span>
              </span>{" "}
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              We Provide the best price in Saint-martin
            </p>
          </div>
          <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
            <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
              <div className="text-center">
                <div className="text-lg font-semibold">Couple Room</div>
                <div className="flex items-center justify-center mt-2">
                  <div className="mr-1 text-5xl font-bold">4,000</div>
                  <div className="text-gray-700"> tk/Day</div>
                </div>
                <div className="mt-2 space-y-3">
                  <div className="text-gray-700">Couple Bed</div>
                  <div className="text-gray-700">For 2 Persone</div>
                  <div className="text-gray-700">Complimentory BreakFast</div>
                </div>
              </div>
              <div>
                <a 
                onClick={()=>setform("Couple Room")}
                className="inline-flex items-center cursor-pointer justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-logoBlue/20 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none">
                  Book Now
                </a>
                <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                  Check-in at 12:00 PM | Chaeck-out at 11:00 AM
                </p>
              </div>
            </div>
            <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400">
              <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
                <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-logoSun">
                  Most Popular
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold">Double Room</div>
                <div className="flex items-center justify-center mt-2">
                  <div className="mr-1 text-5xl font-bold">5,000</div>
                  <div className="text-gray-700"> tk/Day</div>
                </div>
                <div className="mt-2 space-y-3">
                  <div className="text-gray-700">Two (02) Bed</div>
                  <div className="text-gray-700">For 4 Persone</div>
                  <div className="text-gray-700">Complimentory BreakFast</div>
                </div>
              </div>
              <div>
                <a onClick={()=>setform("Double Room")} className="inline-flex cursor-pointer items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-logoBlue/20 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none">
                  Book Now
                </a>
                <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                  Check-in at 12:00 PM | Chaeck-out at 11:00 AM
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
              <div className="text-center">
                <div className="text-lg font-semibold">Full Resort</div>
                <div className="flex items-center justify-center mt-2">
                  <div className="mr-1 text-5xl font-bold">35,000</div>
                  <div className="text-gray-700"> tk/Day</div>
                </div>
                <div className="mt-2 space-y-3">
                  <div className="text-gray-700">Three Couple Bed</div>
                  <div className="text-gray-700">Seven Double Bed</div>
                  <div className="text-gray-700">For 34 Persone</div>
                  <div className="text-gray-700">Complimentory BreakFast</div>
                </div>
              </div>
              <div>
                <a onClick={()=>{setform("Full Resort")}} className="inline-flex cursor-pointer items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-logoBlue/20 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none">
                  Book Now
                </a>
                <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                  Check-in at 12:00 PM | Chaeck-out at 11:00 AM
                </p>
              </div>
            </div>
            {/* condi */}
            <div className="text-base font-light relative -top-10 text-logoSun">
              <p>*condition apply</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
