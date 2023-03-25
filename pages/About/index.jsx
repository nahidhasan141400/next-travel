import React, { useState } from "react";
import { BsAward, BsInfoSquare } from "react-icons/bs";
import { RiTeamLine } from "react-icons/ri";
import About from "../../components/About";
import AboutBaner from "../../components/aboutBaner";
import Award from "../../components/Award";
import Layout from "../../components/Layout";
import Team from "../../components/Team";
// managing deractor data


const Index = () => {
  const [nav,setNav ] = useState("aw")
  return (
    <div>
      <Layout>
        <div className="w-full ">
          <AboutBaner i={1} text={"About us"} />
        </div>

        {/* tabs */}
        <div className="w-full max-w-5xl mx-auto my-2">
          <div className="tabs tabs-boxed mx-auto relative flex justify-center">
            <div  onClick={()=>{
              setNav("te")
            }} className={`tab ${nav == 'te'? "bg-logoRay font-bold text-neutral-900":""}`}><RiTeamLine/><span className="px-1"></span> Board of Directors & Team</div>
            <div  onClick={()=>{
              setNav("ab")
            }} className={`tab ${nav == 'ab'? "bg-logoRay font-bold text-neutral-900":""}`}><BsInfoSquare/><span className="px-1"></span> Who You Are</div>
            <div  onClick={()=>{
              setNav("aw")
            }} className={`tab ${nav == 'aw'? "bg-logoRay font-bold text-neutral-900":""}`}><BsAward/><span className="px-1"></span> Award & Certificate</div>
          </div>
        </div>
        {
            nav == 'aw'? <Award/> : ""
        }
        {
             nav == 'ab'? <About/>:""
        }
        {
             nav == 'te'? <Team/>:""
        }
         
         
         
      </Layout>
    </div>
  );
};

export default Index;
