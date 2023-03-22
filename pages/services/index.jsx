import React from "react";
import { BsInfoSquare } from "react-icons/bs";
import { CiCoinInsert } from "react-icons/ci";
import {
  GiAirplaneDeparture,
  GiBackpack,
  GiCaravan,
  GiOfficeChair
} from "react-icons/gi";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { RiCustomerService2Line, RiVipCrownLine } from "react-icons/ri";
import { SiGooglemeet, SiYourtraveldottv } from "react-icons/si";
import { TiGroupOutline } from "react-icons/ti";
import Layout from "../../components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="bg-white dark:bg-gray-900 pt-10">
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center ">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold tracking-wide bg-gradient-to-tr from-logoBlue to-logoSun text-transparent bg-clip-text lg:text-4xl">
                Find our premium services
              </h1>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                we provide you the best service
              </p>
              <div className="grid gap-6 mt-8 sm:grid-cols-2">
                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                  <svg
                    className="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span className="mx-3">Tour operations</span>
                </div>

                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                  <svg
                    className="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span className="mx-3">
                    World Wide Air Ticket Reservations
                  </span>
                </div>

                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                  <svg
                    className="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span className="mx-3">Tourist Visa Processing</span>
                </div>

                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                  <svg
                    className="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span className="mx-3">World Wide Hotel Reservations</span>
                </div>

                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                  <svg
                    className="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span className="mx-3">International Medical Assistance</span>
                </div>

                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                  <svg
                    className="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span className="mx-3">Event Management</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              className="object-cover w-full h-full max-w-2xl rounded-md"
              src="https://images.unsplash.com/photo-1555181126-cf46a03827c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="glasses photo"
            />
          </div>
        </div>
      </div>

      {/* // Tour operations */}
      <div className=" w-full text-center pt-10 pb-5">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          explore our <br /> Premium Services
        </h1>
      </div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            Tour operations <br /> (Inbound, Outbound)
          </h1>

          <div className="mt-2">
            <span className="inline-block w-40 h-1 bg-logoRay rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-logoRay rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-logoRay rounded-full"></span>
          </div>

          <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
            <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
              <div className="space-y-3">
                <span className="inline-block p-3 text-logoSun bg-logoBlue/10 rounded-xl ">
                  <GiBackpack />
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  Package Tour
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3 text-logoSun bg-logoBlue/10 rounded-xl ">
                  <TiGroupOutline />
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  Group Tour
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3 text-logoSun bg-logoBlue/10 rounded-xl ">
                  <MdOutlineFamilyRestroom />
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  Family Tour
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3 text-logoSun bg-logoBlue/10 rounded-xl ">
                  <GiOfficeChair />
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  Corporate Tour
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>
            </div>

            <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
              <img
                className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* air ticet  */}
      {/* <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl md:text-right">
          Event Management <br />  (Family and Corporate)
          </h1>

          <div className="mt-2 w-full md:flex justify-end ">
            <span className="inline-block w-40 h-1 bg-logoRay rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-logoRay rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-logoRay rounded-full"></span>
          </div>

          <div className="mt-8 xl:mt-12 lg:flex flex-row-reverse lg:items-center">
            <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
              <div className="space-y-3">
                <span className="inline-block p-3 text-logoSun bg-logoBlue/10 rounded-xl ">
                  <GiBackpack />
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  Package Tour
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3 text-logoSun bg-logoBlue/10 rounded-xl ">
                  <TiGroupOutline />
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  Group Tour
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3 text-logoSun bg-logoBlue/10 rounded-xl ">
                  <MdOutlineFamilyRestroom />
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  Family Tour
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3 text-logoSun bg-logoBlue/10 rounded-xl ">
                  <GiOfficeChair />
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  Corporate Tour
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>
            </div>

            <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
              <img
                className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
                src="/img/cox.jpg"

                alt=""
              />
            </div>
          </div>
        </div>
      </section> */}
      {/* responsivility  */}
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            Responsibilities
          </h1>

          <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
            Sun holidays Ltd. We provide the extra value-added services that:
          </p>

          <div className="flex justify-between flex-wrap mt-8 ">
            <div className="p-8 w-72 h-72 m-10 space-y-3 border-2 border-logoSun rounded-xl">
              <span className="inline-block text-logoRay dark:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </svg>
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Round the clock services, 24 hours availability of Travel
                consultant
              </h1>
            </div>

            <div className="p-8 w-72 h-72 m-10 space-y-3 border-2 border-logoSun rounded-xl">
              <span className="inline-block text-logoRay dark:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </svg>
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                A dedicated representative to customize the account &
                relationship management
              </h1>
            </div>

            <div className="p-8 w-72 h-72 m-10 space-y-3 border-2 border-logoSun rounded-xl ">
              <span className="inline-block text-logoRay">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </svg>
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Computerized reservations for on-the-spot confirmations
              </h1>
            </div>

            <div className="p-8 w-72 h-72 m-10 space-y-3 border-2 border-logoSun rounded-xl ">
              <span className="inline-block text-logoRay">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </svg>
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Competitive market prices and efficient pre and past sales and
                services.
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* event manage ment  */}
      <section className="bg-white dark:bg-gray-900">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
            Event management
          </h2>

          <p className="block max-w-4xl mt-4 text-gray-500 dark:text-gray-300">
            Sun Holidays Ltd. Specializes in event Management for corporate,
            association and not for profit clients. If your event needs to be
            properly conceived and executed to deliver tangible business result,
            Sun Holidays Ltd. is your answer. Sun Holidays Ltd. Team is able to
            provide a full-service event management experience that includes:
          </p>
        </div>
        <div className="w-full max-w-4xl mx-auto">
          <ul className="list-disc">
            <li>Project administration and management</li>
            <li>Budget, cash flow, and financial management</li>
            <li>Program development and speaker management</li>
            <li>Speaker contracting & fulfillment</li>
            <li>Sponsorship sales, support and fulfillment</li>

            <li>Registration management and support</li>
            <li>Event branding and marketing</li>
            <li>Event communications and promotion</li>
            <li>Print production and management</li>
            <li>Volunteer management</li>
            <li>Social event planning</li>
            <li>Event production and photography or videography’s</li>
            <li>Facility and hotel management</li>
            <li>Logistics & operations management</li>
            <li>Post-event evaluation</li>
          </ul>
        </div>
      </section>
      <div className="h-10"></div>
      {/* more service  */}
      <section className="bg-white ">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-neutral-700 capitalize lg:text-3xl ">
            explore our <br /> More{" "}
            <span className="underline decoration-logoSun">Service </span>
          </h1>

          <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            quam voluptatibus
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <div className="space-y-3">
              <span className="inline-block p-3 text-logoSun bg-logoBlue/10 rounded-full text-2xl">
                <GiAirplaneDeparture />
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Air Travel Reservations and Tickets:
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Our worldwide air ticketing facility is one of the many features
                that we can serve you with. Sun Holidays Ltd. uses state of the
                art CRS (computerized reservation system). We have been aided by
                best-in-class CRS partners like ABACUS, GELILEO and AMADEUS.
                Each traveler gets his or her own travel itinerary printed in
                detail from our service desk. We also provide soft copy (through
                email) along with the printed copy of Air ticket and other
                Airport departure documents (e.g., embarkation card)
              </p>

              <a
                href="#"
                className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                <span className="mx-1">read more</span>
                <svg
                  className="w-4 h-4 mx-1 rtl:-scale-x-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            {/* card  */}
            <div className="space-y-3">
              <span className="inline-block p-3 text-logoSun bg-logoBlue/10 rounded-full text-2xl">
                <GiCaravan />
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Hotel and Car Rental Reservations:
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                We do have a very large network of partner Hotels worldwide. We
                always offer low and competitive price than other retailers. Our
                hotel booking and reservation expertise are working round the
                clock to ensure pleasures accommodation within affordable cost.
                We also arrange Limousine service for guests on demand. This
                includes airport to hotel pick up and drop, hour basis rental
                cab and other large capacity vehicle depending on guest’s
                number.
              </p>

              <a
                href="#"
                className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                <span className="mx-1">read more</span>
                <svg
                  className="w-4 h-4 mx-1 rtl:-scale-x-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            {/* card  */}
            <div className="space-y-3">
              <span className="inline-block p-3 text-logoSun bg-logoBlue/10 rounded-full text-2xl">
                <RiCustomerService2Line />
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Worldwide Customer Care:
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Sun Holidays Ltd. Customer care desk is able to serve its guests
                anywhere in the world. Just after receiving service request
                officially (by e mail, text, written) we are capable of sending
                the document through mail, fax and text at any given time and
                anywhere in the world.
              </p>
            </div>
            {/* card  */}
            <div className="space-y-3">
              <span className="inline-block p-3 text-logoSun bg-logoBlue/10 rounded-full text-2xl">
                <RiCustomerService2Line />
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Emergency Travel Assistance:
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                We always provide our clients ‘after office hour service
                assistance’ through any possible means. Our service mobile
                numbers are open 24 x 7 to meet any query or provide all
                possible assistance.
              </p>
            </div>
            {/* card  */}
            <div className="space-y-3">
              <span className="inline-block p-3 text-logoSun bg-logoBlue/10 rounded-full text-2xl">
                <SiGooglemeet />
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Seminar and Conference Arrangements
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                We do arrange corporate meeting/ dealer conference in any chosen
                tourist destination, hotel or club. In such case we start
                arranging this after receiving official work order from guest’s
                part.
              </p>
            </div>
            {/* card  */}
            <div className="space-y-3">
              <span className="inline-block p-3 text-logoSun bg-logoBlue/10 rounded-full text-2xl">
                <SiYourtraveldottv />
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Leisure Travel
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Sun Holidays Ltd has a dedicated holiday wing for arranging
                leisure travel and customized tour packaging. All over the year
                we lunch many Festival promotion offers and packages
              </p>
            </div>
            {/* card  */}
            <div className="space-y-3">
              <span className="inline-block p-3 text-logoSun bg-logoBlue/10 rounded-full text-2xl">
                <CiCoinInsert />
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                International Air Travel Accident insurance
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Insurance policies will be followed by domestic and
                international Aviation rules and regulation.
              </p>
            </div>
            {/* card  */}
            <div className="space-y-3">
              <span className="inline-block p-3 text-logoSun bg-logoBlue/10 rounded-full text-2xl">
                <RiVipCrownLine />
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Airport Meet assist and VIP Protocol Services
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                If requested we will provide airport pickup and VIP protocol
                service to guests. After having official work order and guests
                travel schedule our service desk will take prompt action to
                deploy protocol and airport meet and greet facilities.
              </p>
            </div>
            {/* card  */}
            <div className="space-y-3">
              <span className="inline-block p-3 text-logoSun bg-logoBlue/10 rounded-full text-2xl">
                <BsInfoSquare />
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Package tour and other service information’s
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                We will always update clients about our latest events and
                offers. Public relation desk send newsletter, seasonal package
                fare, special air fare time to time. 
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
