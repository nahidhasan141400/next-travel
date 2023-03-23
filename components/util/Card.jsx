import React from "react";
import { BiTime } from "react-icons/bi";

const Card = () => {
  return (
    <div className="w-full max-w-sm bg-neutral-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden m-3">
      <a href="#">
        <img
          className=" hover:scale-105 ease-out transition-all rounded-t-lg"
          src="/img/pic1.jpg"
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Dhaka-Bandarban-Dhaka
          </h5>
          <p className="flex items-center w-full">
            <span className="pr-1 text-logoSun">
              <BiTime />
            </span>{" "}
            4 day 3 night
          </p>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>First star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Second star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Third star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fourth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fifth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            5.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
          <span className="text-5xl relative top-1">৳</span> 599
          </span>
          <a
            href="#"
            className="text-neutral-50 bg-logoSun hover:bg-logoRay focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Details
          </a>
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