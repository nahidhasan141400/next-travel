import React from "react";
import { BsAward, BsInfoSquare } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { GiCaravel, GiConqueror } from "react-icons/gi";
import { RiTeamLine } from "react-icons/ri";
import AboutBaner from "../../components/aboutBaner";
import Layout from "../../components/Layout";

// managing deractor data

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

const Index = () => {
  return (
    <div>
      <Layout>
        <div className="w-full ">
          <AboutBaner i={1} text={"About us"} />
        </div>

        {/* tabs */}
        <div className="w-full max-w-5xl mx-auto my-2">
          <div className="tabs tabs-boxed mx-auto relative flex justify-center">
            <div className="tab"><RiTeamLine/><span className="px-1"></span> Board of Directors & Team</div>
            <div className="tab bg-logoRay font-bold text-neutral-900"><BsInfoSquare/><span className="px-1"></span> Who You Are</div>
            <div className="tab"><BsAward/><span className="px-1"></span> Award & Certificate</div>
          </div>
        </div>
        <div className="w-full relative">
          {/* about us  */}
          <div className="w-full max-w-7xl mx-auto p-2">
            <div className="py-3 text-center md:text-left">
              <h1 className="text-3xl font-bold">About us</h1>
            </div>
            <hr class="h-px my-2 bg-neutral-200 border-0" />
            <div className="text-justify p-2">
              Sun Holidays Ltd. started when a group of friends decided to make
              something out of their common passion for travel. Armed with a
              wide array of experience brought by their many travels within
              Bangladesh and the abroad, these friends bonded together to form
              Sun Holidays Ltd. in 08 November 2021.
              <br />
              Today, Sun Holidays Ltd. prides itself of being a premier travel
              service company committed to making travel safe, funny, exciting
              and hassle-free for its customers. It is through these
              fundamentals that the Company aims to grow and cement its mark as
              a travel agency of choice in the industry. We look forward to the
              future and envision Sun Holidays Ltd. to become the leading travel
              agency in Bangladesh.
              <br />
              We are committed to provide our clients with best value solutions
              in their travel needs; offering them professional yet personalized
              service at reasonable and competitive prices. With the above
              vision and mission, we are optimistic that we have the roadmap in
              moving Sun Holidays Ltd. to newer heights.
            </div>
          </div>
          {/* mission  */}
          <div className="w-full max-w-7xl mx-auto flex justify-between mt-12 flex-col md:flex-row">
            <div className="flex-1 w-full p-2">
              <img
                className="w-full rounded-md h-80 object-cover"
                src="/img/cox.jpg"
                alt=""
              />
            </div>
            <div className="flex-1 w-full p-2">
              <div>
                <span className=" text-8xl text-logoTag mb-3 pb-4">
                  <GiCaravel />
                </span>
                <h1 className="text-4xl font-bold bg-gradient-to-t to-logoBlue from-logoSun bg-clip-text  text-transparent py-3">
                  Our Vision
                </h1>
              </div>
              <p className="text-justify mt-3">
                To be the First Choice for Clients and Companies. Our personnel
                are dedicated to learning as much about a destination as
                possible. We are the type of travelers that come back from a
                city with an abundance of suggestions for things to do. We can
                recommend beaches for snorkeling or diving, road trips which
                will reveal hidden oasis from the norm, restaurants, shopping,
                stays at choice, sightseeing and anything our clientele are
                curious about.
              </p>
            </div>
          </div>
          <div className="py-5"></div>
          {/* vission  */}
          <div className="w-full max-w-7xl mx-auto flex justify-between mt-12 flex-col md:flex-row-reverse">
            <div className="flex-1 w-full p-2">
              <img
                className="w-full rounded-md h-96 object-cover"
                src="/img/saint.jpg"
                alt=""
              />
            </div>
            <div className="flex-1 w-full p-2">
              <div>
                <span className=" text-8xl text-logoTag mb-3 pb-4">
                  <GiConqueror />
                </span>
                <h1 className="text-4xl font-bold bg-gradient-to-t to-logoBlue from-logoSun bg-clip-text  text-transparent py-3">
                  Our Mission
                </h1>
              </div>
              <p className="text-justify mt-3">
                Customer Service with Care, Empathy & Love with which The
                Clients and Companies of Bangladesh have grown to trust the
                service and professionalism on Sun Holidays Ltd. To create and
                provide a total Travel Management Package in terms of providing
                comprehensive and professionally effective service at minimum
                cost to the customer, using and utilizing environment internally
                and externally that promotes total commitment and growth, thus
                becoming the largest and the most reliable Travel Organization
                in the region setting Standards in the industry for
                professionalism and reliability to the customer.
              </p>
            </div>
          </div>
          {/* team  */}
          <div className="w-full relative  py-4 mt-4">
            <div className="py-4 text-center pt-5">
              <h1 className="text-3xl font-bold">Board of Directors</h1>
            </div>
          </div>
          {/* teams row  */}
          <div className="relative w-full  pb-10">
            <div className="w-full relative max-w-7xl mx-auto flex justify-around">
              {/* card */}
              {BD.map((e, i) => {
                return (
                  <div key={i} className="cardnh mb-3 relative bdcard w-60">
                    <div className="img">
                      <img
                        src={e.img}
                        className="w-60 h-60 object-cover mask mask-hexagon-2"
                        alt=""
                      />
                    </div>
                    <div className=" name absolute backdrop-blur-sm bg-gradient-to-tr to-neutral-300/10 from-neutral-600/20 p-2 -bottom-5 right-20 rounded-md">
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
      </Layout>
    </div>
  );
};

export default Index;
