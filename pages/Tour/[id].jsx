import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import Url from "../../components/ImgApi";
import Layout from "../../components/Layout";

const Tour = () => {
  const router = useRouter();
  const [data, setData] = useState();
  const [img,setimg] = useState("/img/bd.jpg")
  const { id } = router.query;

  useEffect(() => {
    const getData = async () => {
      try {
        const serverRes = await axios("/api/v1.0/tour");
        // console.log(serverRes.data);
        setData(serverRes.data.filter((e) => e.id == id)[0]);
        
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

useEffect(()=>{
  setimg(data?Url+"/upload/"+JSON.parse(data.img)[0]:"/img/bd.jpg")
},[data])

  return (
    <Layout>
      {/* top  */}
      <div className=" w-full h-500px relative">
        <div className=" w-full py-20 h-full relative overflow-hidden">
          <div className=" w-full absolute h-full top-0 left-0">
            <img
              className="w-full h-full object-cover opacity-75"
              src={`https://source.unsplash.com/random/400×1200/?${
                data ? JSON.parse(data.tag)[0] : "travel"
              }`}
              alt=""
            />
          </div>
          <div className="relative w-full h-full flex justify-center items-center">
            <div className="w-full max-w-7xl mx-auto flex justify-center items-center">
              <div className="w-3/4 h-44 glass rounded-lg flex justify-center items-center">
                <h1 className="flex-2 text-2xl text-transparent px-3 text-center bg-gradient-to-tr from-logoTag to-logoBlue bg-clip-text font-bold capitalize">
                  {data ? data.name : "data is loading ...."}
                </h1>
                <div className="flex-1 h-full w-1/4 relative">
                  <img
                    className="w-72 absolute bottom-0"
                    src="/graphic/travel.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {data ? (
        <div>
          {/* imfo fast  */}
          <div className="w-full relative py-7 bg-travel min-h-screen">
            <div className="w-full max-w-6xl mx-auto backdrop-blur-sm p-4 ">
              <h1 className="text-3xl drop-shadow-md  font-bold capitalize text-transparent bg-gradient-to-tr from-logoBlue to-logoTag bg-clip-text">
                {data ? data.name : "data is loading ...."}
              </h1>

              <p className="flex items-center text-lg text-neutral-700 ">
                <span className="text-logoTag text-xl pr-1">
                  <BiTimeFive />
                </span>{" "}
                {data ? data.dur : "data is loading ...."}{" "}
              </p>
              <span className="w-48 h-1 rounded-xl relative inline-block bg-logoRay"></span>
              <span className="w-20 ml-2 h-1 rounded-xl relative inline-block bg-logoRay"></span>
              <span className="w-4 ml-2 h-1 rounded-xl relative inline-block bg-logoRay"></span>
            </div>
            <div className="relative w-full max-w-6xl mx-auto mt-5">
              <div className="w-full relative">
                <img className="relative w-full" src={img} alt="" />
              </div>
              <div className="w-full relative flex mt-1 overflow-hidden p-1 overflow-x-scroll">
                {
                  data?JSON.parse(data.img).map((e,i)=>{
                    return (
                      <div key={i} onClick={()=>{
                        setimg(Url+"/upload/"+e)
                      }} 
                      className="w-52 min-w-52 h-32 mr-2 relative ring-1 ring-logoRay rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-lg">
                      <img
                        className="relative w-full h-full object-cover"
                        src={Url+"/upload/"+e}
                        alt=""
                      />
                    </div>
                    )
                  }):"loading .."


                }
               
                
              </div>
            </div>
            {/* description */}
            <div className="w-full max-w-6xl mx-auto  p-2 backdrop-blur-sm">
              <div className="w-full max-w-5xl mx-auto bg-gradient-to-tr from-logoSun/25 to-logoBlue/25 flex justify-between items-center p-3 rounded-md shadow-md my-7">
                <div className="text-2xl font-bold bg-gradient-to-br from-logoBlue to-logoTag text-transparent bg-clip-text">
                  Price : {data ? data.price : "data is loading ...."}
                </div>
                <div className="">
                  <a href={data.fromlink} target="_blank" className="btn btn-info" rel="noreferrer">Book Now</a>
                </div>
              </div>
              <div className="w-full text-2xl text-center font-bold">
                {" "}
                Tour Details
              </div>
              <div 

                className="dynamic"
                dangerouslySetInnerHTML={{
                  __html: data ? data.details : "data is loading ....",
                }}
              ></div>
            </div>
          </div>
          {/* image?  */}
        </div>
      ) : (
        "loadin .."
      )}
    </Layout>
  );
};

export default Tour;
