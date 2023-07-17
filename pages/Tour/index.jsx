import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Card from "../../components/util/Card";
import Link from "next/link";

const Index = () => {
  const [data, Setdata] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const serverRes = await axios("/api/v1.0/tour");
        console.log(
          "🚀 ~ file: index.jsx:13 ~ getData ~ serverRes:",
          serverRes.data
        );

        Setdata(serverRes.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <Layout>
      <section className="bg-white pt-20">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
            Browse Our Best <span className="text-logoSun">Package</span>
          </h2>

          <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300"></p>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-6 md:py-12 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                {
                  data.filter(
                    (e) => JSON.parse(e.catagory).indexOf("package") !== -1
                  ).length
                }
              </h2>
              <p className="leading-relaxed">Package Tour</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                {
                  data.filter(
                    (e) => JSON.parse(e.catagory).indexOf("group") !== -1
                  ).length
                }
                {/* {data.filter((e)=>(e.catagory === "group")).length} */}
              </h2>
              <p className="leading-relaxed">Group Tour</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                {
                  data.filter(
                    (e) => JSON.parse(e.catagory).indexOf("family") !== -1
                  ).length
                }
                {/* {data.filter((e)=>(e.catagory === "family")).length} */}
              </h2>
              <p className="leading-relaxed">Family Tour</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                {
                  data.filter(
                    (e) => JSON.parse(e.catagory).indexOf("corporate") !== -1
                  ).length
                }
                {/* {data.filter((e)=>(e.catagory === "corporate")).length} */}
              </h2>
              <p className="leading-relaxed">Corporate Tour</p>
            </div>
          </div>
        </div>
      </section>

      {/*  Package Tour start  */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
          <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
            <h2 className="text-xs text-logoSun tracking-widest font-medium title-font mb-1">
              Browse Our Best
            </h2>
            <h1 className="md:text-4xl text-3xl font-medium title-font ">
              Package Tour
            </h1>
          </div>
        </div>
      </section>
      {/* card row  */}
      <section className="w-full px-3 max-w-7xl flex justify-between flex-wrap mx-auto">
        {/* <Card />
        <Card />
        <Card />
        <Card /> */}
        {data
          .filter((e) => JSON.parse(e.catagory).indexOf("package") !== -1)
          .splice(0, 6)
          .map((e, i) => {
            return <Card key={i} data={e} />;
          })}
      </section>
      <div className="w-full py-4 text-center mb-5">
        <Link href={`/Tour/more/package`}>
          <button className="btn-secondary btn-outline btn">
            See More Package Tour
          </button>
        </Link>
      </div>
      {/*  Package Tour end  */}
      {/*  Group Tour start  */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
          <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
            <h2 className="text-xs text-logoSun tracking-widest font-medium title-font mb-1">
              Browse Our Best
            </h2>
            <h1 className="md:text-4xl text-3xl font-medium title-font ">
              Group Tour
            </h1>
          </div>
        </div>
      </section>
      {/* card row  */}
      <section className="w-full px-3 max-w-7xl flex justify-between flex-wrap mx-auto">
        {data
          .filter((e) => JSON.parse(e.catagory).indexOf("group") !== -1)
          .splice(0, 6)
          .map((e, i) => {
            return <Card key={i} data={e} />;
          })}
      </section>
      <div className="w-full py-4 text-center mb-5">
        <Link href={`/Tour/more/group`}>
          <button className="btn-secondary btn-outline btn">
            See More Group Tour
          </button>
        </Link>
      </div>
      {/*  Group Tour end  */}
      {/*  Family Tour start  */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
          <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
            <h2 className="text-xs text-logoSun tracking-widest font-medium title-font mb-1">
              Browse Our Best
            </h2>
            <h1 className="md:text-4xl text-3xl font-medium title-font ">
              Family Tour
            </h1>
          </div>
        </div>
      </section>
      {/* card row  */}
      <section className="w-full px-3 max-w-7xl flex justify-between flex-wrap mx-auto">
        {/* <Card />
        <Card />
        <Card /> */}
        {data
          .filter((e) => JSON.parse(e.catagory).indexOf("family") !== -1)
          .splice(0, 6)
          .map((e, i) => {
            return <Card key={i} data={e} />;
          })}
      </section>
      <div className="w-full py-4 text-center mb-5">
        <Link href={`/Tour/more/family`}>
          <button className="btn-secondary btn-outline btn">
            See More Family Tour
          </button>
        </Link>
      </div>
      {/*  Family Tour end  */}
      {/*  Corporate Tour start  */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
          <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
            <h2 className="text-xs text-logoSun tracking-widest font-medium title-font mb-1">
              Browse Our Best
            </h2>
            <h1 className="md:text-4xl text-3xl font-medium title-font ">
              Corporate Tour
            </h1>
          </div>
        </div>
      </section>
      {/* card row  */}
      <section className="w-full px-3 max-w-7xl flex justify-between flex-wrap mx-auto">
        {/* <Card />
        <Card />
        <Card /> */}

        {data
          .filter((e) => JSON.parse(e.catagory).indexOf("corporate") !== -1)
          .splice(0, 6)
          .map((e, i) => {
            return <Card key={i} data={e} />;
          })}
      </section>
      <div className="w-full py-4 text-center mb-5">
        <Link href={`/Tour/more/corporate`}>
          <button className="btn-secondary btn-outline btn">
            See More Corporate Tour
          </button>
        </Link>
      </div>
      {/*  Corporate Tour end  */}
      {/* news later  */}
      <div
        className="w-full bg-logoRay mt-20"
        style={{
          backgroundImage: "url('/img/kuyakata.jpg')",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
        }}
        // style="background-image: ; background-position: center center; background-blend-mode: multiply; background-size: cover;"
      >
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1 className="text-5xl antialiased font-semibold leading-none text-center text-neutral-50">
            Get Our Updates
          </h1>
          <p className="pt-2 text-neutral-200 pb-8 text-xl antialiased text-center ">
            Find out about events and other news
          </p>
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="example@email.com"
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
            />
            <button
              type="button"
              className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-logoSun "
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
