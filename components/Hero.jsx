import axios from "axios";
import Router from "next/router";
import { Suspense, useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const Hero = () => {
  const [items, SetItems] = useState([]);
  const [inp, SetInp] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        const serverRes = await axios("/api/v1.0/tour");
        const convertData = await serverRes.data.map((e) => ({
          id: e.id,
          name: e.tag,
          display: e.name,
        }));
        SetItems(convertData);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  const handleOnSearch = (string) => {
    SetInp(string);
  };

  const handleOnSelect = (item) => {
    SetInp(item.display);
    Router.push("Tour/" + item.id);
  };

  const formatResult = (item) => {
    return (
      <>
        <span
          style={{ display: "block", textAlign: "left", cursor: "pointer" }}
        >
          {" "}
          {item.display}
        </span>
      </>
    );
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("/img/sailor/sunholiday-w.jpg")`,
        backgroundPosition:"left"
      }}
    >
      <div className="w-full h-screen">
        <Suspense>
          <video
            width={"100%"}
            loop={true}
            src="/video/Sun_holidays_V_1.mp4"
            className="w-full h-full object-cover inline-block"
            autoPlay
            muted
          ></video>
        </Suspense>
      </div>
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="font-bold herotitel text-logoBlue magma text-4xl md:text-9xl whitespace-nowrap">
            Sun Holidays Ltd
          </h1>
          <p className="mb-5">
            <span className="fontHand text-logoSun text-3xl md:text-5xl">
              {" "}
              live every day as a holiday
            </span>
          </p>
          {/* search button  */}
          <div className="relative flex top-44 md:top-60 left-8 max-w-lg mx-auto">
            <div style={{ flex: "4" }} className="w-full">
              <ReactSearchAutocomplete
                items={items}
                onSearch={handleOnSearch}
                onSelect={handleOnSelect}
                inputSearchString={inp}
                placeholder="search"
                styling={{
                  border: "2px solid #f04e23",
                }}
                // autoFocus
                formatResult={formatResult}
              />
            </div>
            <div className="flex-1 w-full relative right-14 md:right-17 ">
              <button className="btn btn-circle bg-logoSun border-none text-2xl hover:bg-logoBlue hover:text-xl ">
                <BiSearchAlt />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
