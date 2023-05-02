import axios from "axios";
import React, { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { toast } from "react-toastify";
import Url from "../../components/ImgApi";
import Layout from "../../components/Layout";
import AboutBaner from "../../components/aboutBaner";
import style from "./style.module.scss";


const Index = () => {
  const [email,SetEmail] = useState();
  const [phone,SetPhone] = useState();
  const [Name,SetName] = useState();
  const [msg,Setmsg] = useState();

  const SubmitForm = async (e)=>{
    e.preventDefault()
    try {
      toast.promise(
        axios.post(`${Url}/mailto`,{
          website:"sunholidaysltd.com",
          name:Name,
          phone,
          mail:email,
          msg
        })
        ,{
          pending:"sending ..",
          error:"Ops Something is Wrong !",
          success:"Thanks for your text "
        }
      )
    } catch (error) {
     console.log(error); 
    }
  }
  return (
    <Layout>
      <AboutBaner i={2} text={"Contact Us"} />
      <div className="h-10"></div>
      <div className={style.pagelay}>
        <div className={style.left}>
          {/* social media  */}

          {/* form  */}
         

          <div className=" relative">
            <div className="w-full max-w-4xl bg-logoRay/30 rounded-lg p-16 shadow-md">
              <h1 className="md:text-4xl text-2xl font-medium flex">Need Sun Holidays Ltd. Help?</h1>
              <p className="mt-3 mb-2">Our team remains stand by for 24/7 at your service. We would be more than happy to help you.</p>
                <div>
                <a
                  className="mb-1 hover:underline flex  text-xl  md:text-2xl my-2 items-center"
                  href="mailto:info@sunholidaysltd.com"
                >
                 <span className="pr-2"><MdOutlineMailOutline /></span> info@sunholidaysltd.com
                </a>
                <a className="mb-1 hover:underline flex text-xl  md:text-2xl my-2 items-center" href="tel:+8801873838301">
                <span className="pr-2"><BsTelephone /></span>  +88 01873 83 83 01
                </a>
                </div>

              <form 
              onSubmit={(e)=>SubmitForm(e)}
              className="mt-10">
                
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="relative z-0 col-span-2 md:col-span-1">
                    <input
                      onChange={(e)=>{SetPhone(e.target.value)}}
                      value={phone}
                      type="text"
                      name="name"
                      required
                      className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                      Your Phone
                    </label>
                  </div>
                  <div className="relative z-0 col-span-2 md:col-span-1">
                    <input
                      type="email"
                      name="number"
                      required
                      onChange={(e)=>{
                        SetEmail(e.target.value)
                      }}
                      value={email}
                      className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                      Your email
                    </label>
                  </div>
                  <div className="relative z-0 col-span-2">
                    <input
                      type="text"
                      name="email"
                      onChange={(e)=>SetName(e.target.value)}
                      value={Name}
                      className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                      Your Name
                    </label>
                  </div>
                  <div className="relative z-0 col-span-2">
                    <textarea
                      name="message"
                      rows="5"
                      onChange={(e)=>Setmsg(e.target.value)}

                      className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                    >
                      {msg}
                    </textarea>
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
          {/* <div className="w-full max-w-3xl p-16">
            <h1 className="text-3xl font-medium flex">
              {" "}
              Or Email us at info@sunholidaysltd.com{" "}
            </h1>
          </div> */}
          {/* loacation  */}
          <div className="w-full relative mt-8 md:pr-10">
            <div className="py-2" id="map"></div>

            

            {/* map  */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5471.61667975962!2d90.36868058432191!3d23.752155425749603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1679362297071!5m2!1sen!2sbd"
              className="w-full py-4 h-129 max-w-4xl rounded-md shadow-md"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className={style.right}>
          <div className="w-full text-center py-4">
            <h1 className="text-3xl">Out Top Package</h1>
          </div>
          <div className="flex flex-col">
            {[1, 2, 3, 4].map((e, i) => {
              return (
                <div
                  key={i}
                  className="card w-full bg-base-100 h-60 shadow-xl my-3 image-full"
                >
                  <figure>
                    <img
                      className="w-full h-full object-cover"
                      src="/img/kuyakata.jpg"
                      alt="sunholidaysltd"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Cox-Bazar</h2>
                    <p>Tow Day One Night in pradise </p>
                    <div className="card-actions justify-end">
                      <button className="btn bg-logoSun hover:bg-logoRay border-none">More Details</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
    </Layout>
  );
};

export default Index;
