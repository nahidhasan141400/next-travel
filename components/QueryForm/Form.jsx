import React from "react";

const Form = () => {
  return (
    <div className="w-full max-w-5xl mx-auto pb-10">
        <div className="p-10 text-2xl font-bold text-center">
            Query From
        </div>
      <form onSubmit={(e)=>{
        e.preventDefault();
      }}>
        <div className="w-full relative">
          <div className="flex justify-between">
            <div className="flex-1 w-full pr-2">
              <input
                type="text"
                placeholder="Fast Name*"
                className="input input-bordered input-sm w-full  "
              />
            </div>
            <div className="flex-1 w-full pr-2">
              <input
                type="text"
                placeholder="Last Name*"
                className="input input-bordered input-sm w-full  "
              />
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex-1 w-full pr-2">
              <input
                type="mail"
                placeholder="E-mail*"
                className="input input-bordered input-sm w-full  "
              />
            </div>
            <div className="flex-1 w-full pr-2">
              <input
                type="text"
                placeholder="Mobile*"
                className="input input-bordered input-sm w-full  "
              />
            </div>
            <div className="flex-1 w-full pr-2">
              <input
                type="text"
                placeholder="Nationality *"
                className="input input-bordered input-sm w-full  "
              />
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex-1 w-full pr-2">
              <input
                type="text"
                placeholder="Travel date*"
                className="input input-bordered input-sm w-full  "
              />
            </div>
            <div className="flex-1 w-full pr-2">
              <input
                type="text"
                placeholder="Number Of Day*"
                className="input input-bordered input-sm w-full  "
              />
            </div>
            <div className="flex-1 w-full pr-2 flex">
              <input
                type="text"
                placeholder="Adult (+12)*"
                className="input input-bordered input-sm w-full mr-1 "
              />
              <input
                type="text"
                placeholder="Children (2-12)*"
                className="input input-bordered input-sm w-full  "
              />
            </div>
          </div>
          <div className="w-full pt-5">
            <textarea
              className="textarea w-full h-64"
              placeholder="Travel Details "
            ></textarea>
          </div>
          <div>
            <p className="flex justify-start items-center pt-3"><span className="pr-2 relative top-1"> 
<input type="checkbox"  className="checkbox checkbox-sm" /> </span> I have read and agree to the Terms and Conditions and Privacy Policy</p>
          </div>
          <div>
          <button className="rounded-md bg-gradient-to-tr to-logoBlue from-logoRay py-2 mt-2 px-8 text-neutral-50 font-bold text-xl btn border-none hover:scale-95">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
