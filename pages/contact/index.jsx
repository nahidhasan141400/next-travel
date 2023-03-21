import React from "react";
import { BsTelephone } from "react-icons/bs";
import { MdLocationCity, MdOutlineMailOutline, MdOutlineQuestionMark } from "react-icons/md";
import AboutBaner from "../../components/aboutBaner";
import Layout from "../../components/Layout";
import style from "./style.module.scss";

const index = () => {
  return (
    <Layout>
      <AboutBaner i={2} text={"Contact Us"} />
      <div className={style.pagelay}>
        <div className={style.left}>
          {/* form  */}

          <div className=" bg-white">
            <div className="w-full max-w-3xl">
              <h1 className="text-4xl font-medium flex">
                <span>
                  <MdOutlineQuestionMark />
                </span>{" "}
                HAVE A QUESTION?
              </h1>
              <p className="mt-3">
                Email us at info@sunholidaysltd.com or message us here:
              </p>

              <form action="https://api.web3forms.com/submit" className="mt-10">
                <input
                  type="hidden"
                  name="access_key"
                  value="YOUR_ACCESS_KEY_HERE"
                />
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="relative z-0">
                    <input
                      type="text"
                      name="name"
                      className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                      Your name
                    </label>
                  </div>
                  <div className="relative z-0">
                    <input
                      type="text"
                      name="email"
                      className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                      Your email
                    </label>
                  </div>
                  <div className="relative z-0 col-span-2">
                    <textarea
                      name="message"
                      rows="5"
                      className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                    ></textarea>
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                      Your message
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-5 rounded-md bg-logoSun px-10 py-2 text-neutral-50"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* loacation  */}
          <div className="w-full relative mt-8 pr-10">
            <div className="py-2">
              <h1 className="text-4xl font-medium">Find Us </h1>
            </div>
            <hr className="pr-4 relative" />
            {/* location card  */}
            <div className="w-full flex items-center">
              <div className="flex justify-start items-center py-3 text-2xl text-neutral-500 w-60">
                <span className="pr-2">
                  <MdLocationCity />
                </span>{" "}
                Corporate Office
              </div>
              <div className="text-neutral-900 font-thin">
                362/1, Holding 13/1,139, Old-27 New-16, Dhanmondi Dhaka,
                Bangladesh
              </div>
            </div>
            {/* email card  */}
            <div className="w-full flex items-start">
              <div className="flex justify-start items-center py-3 text-2xl text-neutral-500 w-60">
                <span className="pr-2">
                  <MdOutlineMailOutline />
                </span>{" "}
                E-Mail
              </div>
              <div className="text-neutral-900 font-thin flex flex-col py-4 ">
                <a className="mb-1 hover:underline" href="mailto:info@sunholidaysltd.com">info@sunholidaysltd.com</a>
                <a className="mb-1 hover:underline" href="mailto:sunholidays07@gmail.com">sunholidays07@gmail.com</a>
              </div>
            </div>
            {/* call us  */}
            <div className="w-full flex items-start">
              <div className="flex justify-start items-center py-3 text-2xl text-neutral-500 w-60">
                <span className="pr-2">
                  <BsTelephone />
                </span>{" "}
                Phone
              </div>
              <div className="text-neutral-900 font-thin flex flex-col py-4 ">
                <a className="mb-1 hover:underline" href="tel:+8801873838301">+88 01873 83 83 01</a>
                <a className="mb-1 hover:underline" href="tel:+8801873838302">+88 01873 83 83 02</a>
              </div>
            </div>

            {/* map  */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5471.61667975962!2d90.36868058432191!3d23.752155425749603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1679362297071!5m2!1sen!2sbd" className="w-full p-4 h-60" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className={style.right}>right</div>
      </div>
    </Layout>
  );
};

export default index;
