import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import AboutBaner from "../../components/aboutBaner";
import axios from "axios";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Index = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = React.useState(-1);
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
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={data.map((src) => {
          return { src };
        })}
      />
      <AboutBaner i={3} text={"Photo Gallery"} />

      <div className="max-w-[1200px] mx-auto p-3 grid grid-cols-2 sm-grid-cols-3 md:grid-cols-4 gap-3">
        {data.map((d, i) => {
          return (
            <img
              onClick={() => {
                setIndex(i);
              }}
              className="hover:scale-105 transition-all duration-300 cursor-pointer"
              src={d}
              alt=""
              key={i}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default Index;
