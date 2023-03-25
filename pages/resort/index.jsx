import React from "react";
import Layout from "../../components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="w-full flex justify-center flex-col items-center pt-40 pb-14">
        <p className="relative -left-32 md:-left-72 text-logoSun">
          Our own Resorts
        </p>
        <h1 className="text-2xl font-bold md:text-5xl">
          Sailor Moon Resorts, Saint Martin
        </h1>
        <p className="md:text-2xl text-xl font-thin">Cox-Bazar,Bangladesh</p>
      </div>
      {/* main  */}
      <div className="w-full px-4 max-w-7xl mx-auto">
        {/* description  */}
        <div className="text-center font-light">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            itaque vel, illum voluptates aliquid fugit laborum, odit illo quasi
            dolorum quas quia doloremque optio. Recusandae eius dolorem
            accusantium maiores officiis!
          </p>
        </div>
        {/* b photo  */}
        <div>
          <img src="/img/sailor/sunholiday-w.jpg" alt="" />
        </div>

        {/* gelary  */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex w-full mb-20 flex-wrap">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                Premium <span className="text-logoSun">3 star</span> Resorts
                experience
              </h1>
              <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven heard of them man bun deep jianbing selfies heirloom.
              </p>
            </div>
            <div className="flex flex-wrap flex-col md:flex-row  md:-m-2 -m-1">
              <div className="flex flex-wrap md:w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="hover:scale-105 ease-linear transition-all shadow-md hover:shadow-lg w-full object-cover h-full object-center block"
                    src="/img/sailor/sailor_ (16).jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="hover:scale-105 ease-linear transition-all shadow-md hover:shadow-lg w-full object-cover h-full object-center block"
                    src="/img/sailor/sailor_ (2).jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="hover:scale-105 ease-linear transition-all shadow-md hover:shadow-lg w-full h-full object-cover object-center block"
                    src="/img/sailor/sailor_ (17).jpg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap md:w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="hover:scale-105 ease-linear transition-all shadow-md hover:shadow-lg w-full h-full object-cover object-center block"
                    src="/img/sailor/sailor_-(30).jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="hover:scale-105 ease-linear transition-all shadow-md hover:shadow-lg w-full object-cover h-full object-center block"
                    src="/img/sailor/sailor_ (21).jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
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
                      The quick, brown fox jumps over a lazy dog
                    </h6>
                    <p className="text-sm text-gray-900">
                      Baseball ipsum dolor sit amet cellar rubber win hack
                      tossed. Slugging catcher slide bench league.
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
                    A flower in my garden, a mystery
                  </h6>
                  <p className="text-sm text-gray-900">
                    They urge you to put down your sword and come join the
                    winners.
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
                    Skate ipsum dolor sit amet, alley oop
                  </h6>
                  <p className="text-sm text-gray-900">
                    If one examines precultural libertarianism, one is faced
                    with a choice: either accept rationalism.
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
                    The first mate and his Skipper too will
                  </h6>
                  <p className="text-sm text-gray-900">
                    Those options are already baked in with this model shoot me
                    an email clear blue water.
                  </p>
                </div>
              </div>
              <div>
                <img
                  className="hover:scale-105 ease-linear transition-all shadow-md hover:shadow-lg object-cover w-full h-56 rounded  sm:h-96"
                  src="/img/sailor/SHA_6244 copy.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
