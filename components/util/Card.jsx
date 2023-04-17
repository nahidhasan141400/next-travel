import Link from "next/link";
import { BiTime } from "react-icons/bi";
import Url from "../ImgApi";

const Card = ({data}) => {
  return (
    <div className="w-full max-w-sm bg-neutral-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden m-3">
      <Link href={`/Tour/${data.id}`}>
        <img
          className=" hover:scale-105 ease-out transition-all rounded-t-lg"
          src={Url+"/upload/"+JSON.parse(data.img)[0]}
          alt="product image"
        />
      </Link>
      <div className="px-5 pb-5">
        <Link href={`/Tour/${data.id}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {data.titel}
          </h5>
          <p className="flex items-center w-full">
            <span className="pr-1 text-logoSun">
              <BiTime />
            </span>{" "}
           {data.dur}
          </p>
        </Link>
       
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
          <span className="text-5xl relative top-1"></span> {data.price} Tk.
          </span>
          <Link
            href={`/Tour/${data.id}`}
            className="text-neutral-50 bg-logoSun hover:bg-logoRay focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;



// <div className="w-full relative">
// <section className="text-gray-600 body-font">
//   <div className="container px-5 py-24 mx-auto flex flex-wrap">
//     <div className="lg:w-2/3 mx-auto">
//       <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
//         <img
//           alt="gallery"
//           className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
//           src="/img/kuyakata.jpg"
//         />
//         <div className="text-center relative z-10 w-full">
//           <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">
//             Dhaka to Sundarban
//           </h2>
//           <p className="leading-relaxed">3 Day 2 Night</p>
//           <a className="mt-3 text-red-500 inline-flex items-center">
//             Learn More
//             <svg
//               fill="none"
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               className="w-4 h-4 ml-2"
//               viewBox="0 0 24 24"
//             >
//               <path d="M5 12h14M12 5l7 7-7 7"></path>
//             </svg>
//           </a>
//         </div>
//       </div>
//       <div className="flex flex-wrap -mx-2">
//         <div className="px-2 w-1/2">
//           <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
//             <img
//               alt="gallery"
//               className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
//               src="/img/cox.jpg"
//             />
//             <div className="text-center relative z-10 w-full">
//               <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
//                 Dhaka To Cox-bazar
//               </h2>
//               <p className="leading-relaxed">3 night to Tow Days </p>
//               <a className="mt-3 text-red-500 inline-flex items-center">
//                 Learn More
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   className="w-4 h-4 ml-2"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M5 12h14M12 5l7 7-7 7"></path>
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="px-2 w-1/2">
//           <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
//             <img
//               alt="gallery"
//               className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
//               src="/img/bd.jpg"
//             />
//             <div className="text-center relative z-10 w-full">
//               <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
//                 Saint Martin
//               </h2>
//               <p className="leading-relaxed">3 Days 2 Night</p>
//               <a className="mt-3 text-red-500 inline-flex items-center">
//                 Learn More
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   className="w-4 h-4 ml-2"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M5 12h14M12 5l7 7-7 7"></path>
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
// </div>