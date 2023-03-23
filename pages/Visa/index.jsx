import React from "react";
import Layout from "../../components/Layout";
import Data from "../../Data/visa";

const Index = () => {
    const [ show,setShow ] = React.useState();
    
  return (
    <Layout>
      <div className="w-full pt-24 pb-10 relative">
        <div className="relative flex flex-col justify-center p-10 md:w-full h-72 bg-gradient-to-tr from-logoRay/40 to-logoSun max-w-6xl md:mx-auto rounded-2xl overflow-hidden lg:overflow-visible -z-10 mx-2">
          <h1 className="md:text-3xl text-xl font-bold">
            We Provide The Best Visa Assistance
          </h1>
          <p className="w-4/6 pt-2 md:text-lg text-sm font-thin">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum qui
            vel ullam atque quas voluptatum iusto dicta quia, repellendus rem
            reprehenderit pariatur explicabo expedita temporibus, a dignissimos
            molestiae. Sapiente, quod.
          </p>
          <img
            className="w-72 h-72 absolute object-cover hidden md:inline-block -right-10 -bottom-20 animate-bounce drop-shadow-2xl duration-[4000ms]  ease-in-out"
            src="/img/icon/airplane.png"
            alt=""
          />
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto ">
        <div>
          <h1 className="text-2xl mb-5 text-center md:text-left text-logoSun font-bold">Select Your Destination {show? show.name:""}</h1>
        </div>
        <div className="form-control ">
          <div className="input-group w-full flex justify-center md:justify-start">
            <select
        
                onChange={(e)=>{
                    setShow(Data.filter((x)=> x.name == e.target.value)[0])
                }}
            className="select select-bordered capitalize">
              <option disabled selected>
                Pick Destination
              </option>
              {
                Data.map((e,i)=>{
                    return ( <option  key={i} value={e.name}>{e.name}</option> )
                })
              }
              
            </select>
            <button className="btn">Go</button>
          </div>
        </div>
        <div className="flex w-full h-screen-100 mb-28">
          <div className="w-full md:w-4/5">
            <div className="w-full h-full max-w-5xl mx-auto shadow-md px-1 md:px-8 py-10 pt-10 bg-logoSun/20 my-5 rounded-3xl overflow-y-auto overflow-x-hidden">
              <div
              className=" visalist"
                dangerouslySetInnerHTML={{
                  __html: show? show.data: "no data for show up",
                }}
              ></div>
            </div>
          </div>
          <div className="w-1/5 relative hidden md:block">
            <div className="w-full h-full relative px-2 py-8 "> 

                <ol className="w-full h-full max-w-5xl mx-auto shadow-md px-8 py-10 pt-10 my-5 rounded-3xl overflow-y-auto overflow-x-hidden">
                {
                Data.map((e,i)=>{
                    return ( <li key={i} 
                      onClick={()=>{
                        setShow(Data.filter((x)=> x.name == e.name)[0])
                      }}
                      className={` ${e.name == ( show?show.name: "")? "-left-3  shadow-sm":""} relative w-full mb-2 pl-3 p-2 bg-gradient-to-tr to-logoRay/40 from-logoSun/70 rounded-lg text-logoBlue cursor-pointer`}>{e.name}</li>)
                })
              }
                    
                  
                </ol>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
