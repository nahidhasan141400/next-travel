import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Url from "../../components/ImgApi";

const Form = ({ close, form }) => {
  const [fname, setFname] = useState();
  const [Lname, setLname] = useState();
  const [Email, setEmail] = useState();
  const [Phone, setPhone] = useState();
  const [Date, setDate] = useState();
  const [Dateo, setDateo] = useState();
  const [Day, setDay] = useState();
  const [Adult, setAdult] = useState();
  const [Children, setChildren] = useState();
  const [Details, setDetails] = useState();

  function formatDate(date = new window.Date()) {
    return [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("-");
  }

  // send email
  const SendData = async () => {
    try {
      toast.promise(
        axios.post(`${Url}/mailto`, {
          website: "sunholidaysltd.com",
          name: fname + " " + Lname,
          phone: Phone,
          mail: Email,
          msg: `<div>
          <h1 style="text-align:center; padding:4px;">
            ${fname} Book ${form}
          </h1>
          <h1 style="text-align:center; padding:4px;">
            Check-in Date : ${Date} 
          </h1>

          <p>Package: ${form}</p>
          <p>check-in: ${Date}</p>
          <p>check-out: ${Dateo}</p>
          <p>Adult : ${Adult}</p>
          <p>Children : ${Children}</p>
          <hr />
          <div style='padding:5px;'>
        ${Details}
          </div>
        </div>`,
        }),
        {
          pending: "sending ..",
          error: "Ops Something is Wrong !",
          success: "Thanks for your text ",
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed w-full glass h-screen overflow-y-auto top-0 left-0 z-50">
      <div className="w-full max-w-5xl mx-auto pb-10 ">
        <div className="p-10 text-2xl font-bold text-center">
          <h1>Room Booking</h1>
          <p className="text-center text-sm">({form})</p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            SendData();
          }}
        >
          <div className="w-full relative">
            {/* name  */}
            <div className="flex justify-between">
              <div className="flex-1 w-full pr-2">
                <input
                  onChange={(e) => setFname(e.target.value)}
                  value={fname}
                  required
                  type="text"
                  placeholder="Fast Name*"
                  className="input input-bordered input-sm w-full  "
                />
              </div>

              <div className="flex-1 w-full pr-2">
                <input
                  onChange={(e) => setLname(e.target.value)}
                  value={Lname}
                  type="text"
                  placeholder="Last Name*"
                  className="input input-bordered input-sm w-full  "
                />
              </div>
            </div>
            {/* name  */}
            {/* email phone  */}
            <div className="flex justify-between mt-2">
              <div className="flex-1 w-full pr-2">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={Email}
                  type="mail"
                  placeholder="E-mail*"
                  className="input input-bordered input-sm w-full  "
                />
              </div>
              <div className="flex-1 w-full pr-2">
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  value={Phone}
                  type="text"
                  required
                  placeholder="Mobile*"
                  className="input input-bordered input-sm w-full  "
                />
              </div>
            </div>
            {/* email phone  */}
            {/* childern s */}
            <div className="flex justify-between mt-2">
              <div className="flex-1 w-full pr-2 flex">
                <input
                  onChange={(e) => setAdult(e.target.value)}
                  value={Adult}
                  type="text"
                  placeholder="Adult (+12)*"
                  className="input input-bordered input-sm w-full mr-1 "
                />
                <input
                  onChange={(e) => setChildren(e.target.value)}
                  value={Children}
                  type="text"
                  placeholder="Children (2-12)*"
                  className="input input-bordered input-sm w-full  "
                />
              </div>
            </div>
            {/* childern  e*/}
            {/* date setup start*/}
            <div className="flex justify-between mt-2">
              <div className="flex-1 w-full pr-2">
                <label className="label">
                  <span className="label-text">Check-in date:</span>
                </label>

                <input
                  onChange={(e) => {
                    let newDate = new window.Date();
                    let inpdate = new window.Date(e.target.value);
                    if (newDate > inpdate) {
                      toast.warn("you input invalid Date");
                      return setDate("");
                    }

                    setDate(e.target.value);
                  }}
                  required
                  value={Date}
                  type="date"
                  placeholder="Travel date*"
                  className="input input-bordered input-sm w-full  "
                />
                <label className="label">
                  <span className="label-text-alt">
                    {Date ? "Check-in time : 12-00 PM" : ""}
                  </span>
                </label>
              </div>
              <div className="flex-1 w-full pr-2">
                <label className="label">
                  <span className="label-text">Check-out date:</span>
                </label>
                <input
                  onChange={(e) => {
                    let nowDate = new window.Date(Date);
                    let newDate = new window.Date(nowDate.getTime() + 86400000);

                    let inpdate = new window.Date(e.target.value);
                    if (newDate > inpdate) {
                      toast.warn("you input invalid Date");
                      return setDateo("");
                    }

                    setDateo(e.target.value);
                  }}
                  required
                  value={Dateo}
                  type="date"
                  placeholder="Travel date*"
                  className="input input-bordered input-sm w-full  "
                />
                <label className="label">
                  <span className="label-text-alt">
                    {Dateo ? "Check-out time : 11-30 AM" : ""}
                  </span>
                </label>
              </div>
            </div>
            {/* date setup end  */}
            <div className="w-full pt-5">
              <textarea
                onChange={(e) => setDetails(e.target.value)}
                className="textarea w-full h-64"
                placeholder="Travel Details "
              >
                {Details}
              </textarea>
            </div>
            <div>
              <p className="flex justify-start items-center pt-3">
                <span className="pr-2 relative top-1">
                  <input
                    type="checkbox"
                    required
                    className="checkbox checkbox-sm"
                  />{" "}
                </span>{" "}
                I have read and agree to the Terms and Conditions and Privacy
                Policy
              </p>
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="rounded-md bg-gradient-to-tr to-logoBlue from-logoRay py-2 mt-2 px-8 text-neutral-50 font-bold text-xl btn border-none hover:scale-95"
              >
                Submit
              </button>
              <button
                onClick={() => close(null)}
                className="btn btn-link text-logoTag"
              >
                Close
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
