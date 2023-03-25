import React from 'react';
import { GiCaravel, GiConqueror } from "react-icons/gi";

  
const About = () => {
  return (
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
         
        </div>
  )
}

export default About