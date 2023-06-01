import React, { useState } from "react";
import { FiMessageSquare } from "react-icons/fi";
import MSG from "./teamsmsg/MSG";

const BD = [
  {
    name: "Syed Munir Uddin",
    des: "Chairman",
    img: "/img/team/Chairman_4.jpg",
    msg: false,
    magText: `
    On behalf of the entire team at Sun Holidays Ltd., I extend a heartfelt welcome to each and every one of you. It is with great pleasure and excitement that we embark on this journey together, exploring the wonders of our beautiful world.
    As the Chairman of our esteemed tourism company, I am honored to have you as our valued guests. We understand that your decision to travel with us is driven by a desire for unique experiences, impeccable service, and a deep appreciation for the cultures and landscapes that make our planet so diverse. 
    As we venture into new horizons together, I would like to express my sincere gratitude for choosing Sun Holidays Ltd. as your travel companion. We are committed to providing you with an unforgettable journey filled with treasured memories, immersive experiences, and exceptional service. 
    Should you have any questions, requests, or feedback, please do not hesitate to contact our dedicated customer service team. We are here to assist you and ensure that your travel experience with us is nothing short of extraordinary.
    Once again, welcome aboard, fellow travelers! Let us embark on this remarkable adventure together and create moments that will last a lifetime.
    `,
  },
  {
    name: "Sayed Zillur Rahman",
    des: "Vice Chairman",
    img: "/img/team/no.jpg",
    msg: false,
    magText: `
    As the Vice Chairman of Sun Holidays Ltd, I take great pride in extending a warm welcome to you. We understand that travel is not just about reaching a destination; it's about embarking on a journey that leaves an indelible mark on your soul. Our dedicated team is committed to crafting extraordinary experiences that cater to your every desire and ensure your travel dreams come to life.
At Sun Holidays, we believe that travel should be a seamless and enriching experience. From the moment you embark on your journey until your return, our team works tirelessly to provide impeccable service, exceptional accommodations, and immersive activities that showcase the beauty and culture of each destination. We carefully select our partners and destinations to guarantee that your travel experience exceeds all expectations.
We pride ourselves on delivering personalized attention to each and every traveler. Our team takes the time to understand your unique preferences, interests, and travel goals. Whether you're seeking an adventurous expedition, a tranquil beach retreat, or an immersive cultural experience, we will tailor your itinerary to ensure that every moment of your journey is tailored to your desires.
As the Vice Chairman of Sun Holidays Ltd, I assure you that our commitment to your satisfaction is unwavering. We continuously strive to enhance our services, stay up-to-date with the latest travel trends, and exceed industry standards. Your happiness and fulfillment are our utmost priorities, and we are honored to be a part of your travel story.
Thank you for choosing Sun Holidays Ltd as your travel companion. We look forward to embarking on an extraordinary journey with you.

    `,
  },

  {
    name: "Md. Asaduzzaman",
    des: "Managing Director",
    img: "/img/team/user-3.jpg",
    msg: false,
    magText: `
    I hope this message finds you in good health and high spirits. As the Managing Director of our Sun Holidays Ltd, I wanted to take a moment to reach out and express my gratitude for your trust and loyalty as one of our valued travelers.
In light of recent developments and changes in the travel industry, I wanted to assure you that our team is working tirelessly to ensure your safety, comfort, and satisfaction throughout your journey with us. We understand that traveling in today's world requires extra caution and adaptability, and we are committed to providing you with the best possible experience while prioritizing your well-being.
Should you have any questions, concerns, or special requests, please do not hesitate to reach out to our dedicated customer service team. They are available around the clock to assist you and address any queries you may have.
Once again, thank you for choosing us as your travel partner. We look forward to welcoming you on board and providing you with an exceptional travel experience that will leave you with cherished memories for a lifetime.

    `,
  },

  // {
  //   name: "Sayed Zillur Rahman",
  //   des: "Vice Chairman",
  //   img: "/img/team/persone.jpg",
  //   msg: true,
  //   magText: "",
  // },
  // {
  //   name: "Sayed Zillur Rahman",
  //   des: "Vice Chairman",
  //   img: "/img/team/persone.jpg",
  //   msg: true,
  //   magText: "",
  // },
];

const Team = () => {
  const [msg, setMasg] = useState();
  return (
    <div>
      {
        // msg?<MSG data={msg} close={setMasg}/>:""
      }
      {/* team  */}
      <div className="w-full relative  py-4 mt-4">
        <div className="py-4 text-center pt-5">
          <h1 className="text-3xl font-bold">Board of Directors</h1>
        </div>
      </div>
      {/* teams row  */}
      <div className="relative w-full  pb-10">
        <div className="w-full relative max-w-7xl mx-auto">
          {/* card */}
          {BD.map((e, i) => {
            return (
              <div
                key={i}
                className=" py-10 grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center md:justify-items-end"
              >
                <div className="cardnh mb-3 my-3 relative bdcard w-60 h-64">
                  <div className="img">
                    <img
                      src={e.img}
                      className="w-60 h-60 object-cover mask mask-hexagon-2"
                      alt=""
                    />
                  </div>
                  <div className=" name absolute backdrop-blur-sm bg-gradient-to-tr to-neutral-300/10 from-neutral-600/20 p-2 -bottom-5 right-0 md:right-20 rounded-md">
                    <h1 className="text-2xl font-bold bg-gradient-to-t from-logoTag to-logoSun bg-clip-text text-transparent whitespace-nowrap">
                      {e.name}
                    </h1>
                    <p className="text-neutral-600">{e.des}</p>
                    {e.msg ? (
                      <div
                        onClick={() => {
                          setMasg(e);
                        }}
                        className="py-1 px-2 flex items-center cursor-pointer bg-gradient-to-tr from-logoRay to-logoTag rounded-md text-neutral-50 mt-2 hover:to-logoRay hover:from-logoTag ease-in tr-2 transition-all ms"
                      >
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
                <div className="col-span-2 px-3 mt-4 md:mt-0">
                  <p className="text-lg font-bold pb-2">Message from {e.des}</p>
                  <p
                    className="text-justify font-light text-sm"
                    dangerouslySetInnerHTML={{ __html: e.magText }}
                  ></p>
                  <div>
                    <p className="mt-3 font-bold">Warmest regards,</p>
                    <p className="text-sm ">{e.name}</p>
                    <p className="text-sm font-light">{e.des}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* team  */}
     <div className="pb-20">
      <div className="w-full relative">
        <img className="w-full sm:w-7/12 mx-auto" src="/img/team/teamwork.png" alt="" />
      </div>
      <div className="w-full text-center">
            <h1 className="text-3xl font-bold capitalize">Valuable Teams</h1>
      </div>
     </div>
    </div>
  );
};

export default Team;

// {BD.map((e, i) => {
//   return (
// <div key={i} className="cardnh mb-3 my-3 relative bdcard w-60">
//   <div className="img">
//     <img
//       src={e.img}
//       className="w-60 h-60 object-cover mask mask-hexagon-2"
//       alt=""
//     />
//   </div>
//   <div className=" name absolute backdrop-blur-sm bg-gradient-to-tr to-neutral-300/10 from-neutral-600/20 p-2 -bottom-5 right-0 md:right-20 rounded-md">
//     <h1 className="text-2xl font-bold bg-gradient-to-t from-logoTag to-logoSun bg-clip-text text-transparent whitespace-nowrap">
//       {e.name}
//     </h1>
//     <p className="text-neutral-600">{e.des}</p>
//     {e.msg ? (
//       <div
//         onClick={()=>{
//           setMasg(e);
//         }}
//       className="py-1 px-2 flex items-center cursor-pointer bg-gradient-to-tr from-logoRay to-logoTag rounded-md text-neutral-50 mt-2 hover:to-logoRay hover:from-logoTag ease-in tr-2 transition-all ms">
//         {" "}
//         <span className="relative pr-1 top-px">
//           {" "}
//           <FiMessageSquare />
//         </span>
//         massage
//       </div>
//     ) : (
//       ""
//     )}
//   </div>
// </div>
//   );
// })}
