import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Url from "../../components/ImgApi";

const Form = () => {
  const [fname,setFname] = useState();
  const [Lname,setLname] = useState();
  const [Email,setEmail] = useState();
  const [Phone,setPhone] = useState();
  const [Nationality,setNationality] = useState();
  const [Date,setDate] = useState();
  const [Day,setDay] = useState();
  const [Adult,setAdult] = useState();
  const [Children,setChildren] = useState();
  const [Details,setDetails] = useState();


  // send email 
  const SendData = async ()=>{
    try {
      toast.promise(
        axios.post(`${Url}/mailto`,{
          website:"sunholidaysltd.com",
          name: fname +" "+ Lname,
          phone:Phone,
          mail: Email,
          msg:`<div>
          <h1 style="text-align:center; padding:4px;">
            ${fname} send a query
          </h1>
          <p>Date: ${Date}</p>
          <p>Number of Day : ${Day}</p>
          <p>Adult : ${Adult}</p>
          <p>Children : ${Children}</p>
          <hr />
          <div style='padding:5px;'>
        ${Details}
          </div>
        </div>`
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
    <div className="w-full max-w-5xl mx-auto pb-10">
        <div className="p-10 text-2xl font-bold text-center">
            Query From
        </div>




      <form onSubmit={(e)=>{
        e.preventDefault();
        SendData()
      }}>
        <div className="w-full relative">
          <div className="flex justify-between">
            <div className="flex-1 w-full pr-2">
              <input
                onChange={(e)=>setFname(e.target.value)}
                value={fname}
                required
                type="text"
                placeholder="Fast Name*"
                className="input input-bordered input-sm w-full  "
              />
            </div>
            <div className="flex-1 w-full pr-2">
              <input
              onChange={(e)=>setLname(e.target.value)}
              value={Lname}
                type="text"
                placeholder="Last Name*"
                className="input input-bordered input-sm w-full  "
              />
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex-1 w-full pr-2">
              <input
                onChange={(e)=>setEmail(e.target.value)}
                value={Email}
                type="mail"
                placeholder="E-mail*"
                className="input input-bordered input-sm w-full  "
              />
            </div>
            <div className="flex-1 w-full pr-2">
              <input
                onChange={(e)=>setPhone(e.target.value)}
                value={Phone}
                type="text"
                placeholder="Mobile*"
                className="input input-bordered input-sm w-full  "
              />
            </div>
            <div className="flex-1 w-full pr-2">
              <input
                onChange={(e)=>setNationality(e.target.value)}
                value={Nationality}
                type="text"
                placeholder="Nationality *"
                className="input input-bordered input-sm w-full  "
              />
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex-1 w-full pr-2">
              <input
                onChange={(e)=>setDate(e.target.value)}
                value={Date}
                type="date"
                placeholder="Travel date*"
                className="input input-bordered input-sm w-full  "
              />
            </div>
            <div className="flex-1 w-full pr-2">
              <input
              onChange={(e)=>setDay(e.target.value)}
              value={Day}
                type="text"
                placeholder="Number Of Day*"
                className="input input-bordered input-sm w-full  "
              />
            </div>
            <div className="flex-1 w-full pr-2 flex">
              <input
                onChange={(e)=>setAdult(e.target.value)}
                value={Adult}
                type="text"
                placeholder="Adult (+12)*"
                className="input input-bordered input-sm w-full mr-1 "
              />
              <input
                onChange={(e)=>setChildren(e.target.value)}
                value={Children}
                type="text"
                placeholder="Children (2-12)*"
                className="input input-bordered input-sm w-full  "
              />
            </div>
          </div>
          <div className="w-full pt-5">
            <textarea
              onChange={(e)=>setDetails(e.target.value)}
              className="textarea w-full h-64"
              placeholder="Travel Details "
            >
              {Details}
            </textarea>
          </div>
          <div>
            <p className="flex justify-start items-center pt-3"><span className="pr-2 relative top-1"> 
<input type="checkbox" required  className="checkbox checkbox-sm" /> </span> I have read and agree to the Terms and Conditions and Privacy Policy</p>
          </div>
          <div>
          <button type="submit" className="rounded-md bg-gradient-to-tr to-logoBlue from-logoRay py-2 mt-2 px-8 text-neutral-50 font-bold text-xl btn border-none hover:scale-95">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
