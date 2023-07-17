import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import Card from "../../../components/util/Card";

const Index = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const { name } = router.query;
  useEffect(() => {
    const getData = async () => {
      try {
        const serverRes = await axios("/api/v1.0/tour");
        // console.log(serverRes.data);
        setData(
          serverRes.data.filter(
          (e) => {
            console.log('name',name);
            return JSON.parse(e.catagory).indexOf(name) !== -1
          }
          )
        );
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [name]);
  return (
    <Layout>
      <section className="bg-white pt-20">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
            Browse Our Best <span className="text-logoSun">Tour Package</span>
          </h2>

          <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300"></p>
        </div>
      </section>
      {/* card  */}

      <section className="w-full px-3 max-w-7xl flex justify-between flex-wrap mx-auto">
       
        {data.map((e, i) => {
            return <Card key={i} data={e} />;
          })}
      </section>

      {/* card  */}
      

    </Layout>
  );
};

export default Index;
