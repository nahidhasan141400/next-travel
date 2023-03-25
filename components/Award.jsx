import React from "react";

const Award = () => {
  return (
    <div>
      <div className="w-full py-10 text-center">
        <h1 className="text-3xl font-bold">Our Award and Certificate</h1>
      </div>
      <div className="w-full max-w-7xl mx-auto py-4 shadow-md rounded-md m-2">
        <div className="mx-8 md:flex-row flex-col flex justify-center items-center">
          <div className=" flex-1 flex justify-center flex-col items-center m-1">
            <h1 className="text-lg py-4 capitalize font-bold">Incorporation Certificate</h1>
            <img className="rounded-md" src="/img/kuyakata.jpg" alt="sunholidaysltd" />
          </div>

          <div className=" flex-1 flex justify-center flex-col items-center m-1">
            <h1 className="text-lg py-4 capitalize font-bold">Incorporation Certificate</h1>
            <img className="rounded-md" src="/img/kuyakata.jpg" alt="sunholidaysltd" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;
