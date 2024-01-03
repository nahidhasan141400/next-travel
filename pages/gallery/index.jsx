import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import AboutBaner from "../../components/aboutBaner";
import axios from "axios";

const Index = () => {
  const [data, setData] = useState([]);
  console.log("🚀 ~ file: index.jsx:8 ~ Index ~ data:", data);

  useEffect(() => {
    const getData = async () => {
      try {
        let resDB = await axios.get("/gallery.json");
        setData(resDB.data);
      } catch (error) {
        console.log("🚀 ~ file: index.jsx:13 ~ getData ~ error:", error);
      }
    };
    getData();
  }, []);
  return (
    <Layout>
      <AboutBaner i={3} text={"Photo Gallery"} />

      <div className="max-w-[1200px] mx-auto p-3 grid grid-cols-2 sm-grid-cols-3 md:grid-cols-4 gap-3">
        {data.map((d, i) => {
          return <img src={d} alt="" key={i} />;
        })}
      </div>
    </Layout>
  );
};

export default Index;
