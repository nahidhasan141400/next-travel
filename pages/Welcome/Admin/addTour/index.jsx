import axios from "axios";
import { getCookie } from "cookies-next";
import dynamic from "next/dynamic";
import Router from "next/router";
import { Resizable } from "re-resizable";
import React, { useRef, useState } from "react";
import CreatableSelect from "react-select/creatable";
import { toast } from "react-toastify";
import ImgApi from "../../../../components/ImgApi";
import Nav from "../../../../components/admin/Nav";
import DBcon from '../../../../database/connection';

import jwt from "jsonwebtoken";

const JoditEditor = dynamic(import("jodit-react"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
 let placeholder = "type";

const Index = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [value, setValue] = React.useState([]);
  const editor = useRef(null);
  const [content, setContent] = useState("");

  // form data handler 

  const [titel,setTitel] = useState();
  const [name,setName] = useState();
  const [price,setPrice] = useState();
  const [fromLink,setfromLink] = useState();
  const [seoDes,setSeoDes] = useState();
  const [type,setType] = useState();
  const [catagory,setCatagory] = useState();
  const [tag,setTag] = useState();
  const [dur,setdur] = useState();
  // photo 
  const [img1,setImg1] = useState();
  const [img2,setImg2] = useState();
  const [img3,setImg3] = useState();
  const [img4,setImg4] = useState();
  const [img5,setImg5] = useState();
  const [img6,setImg6] = useState();
  // Description 
  const [description,setDescription] = useState();
  // from submit handler 
  const save = ()=>{
    console.log("start");
    const saveData = async()=>{
      try {
        console.log("start");
        const imgBody = new FormData();
        imgBody.append("photos",img1)
        imgBody.append("photos",img2)
        imgBody.append("photos",img3)
        imgBody.append("photos",img4)
        imgBody.append("photos",img5)
        imgBody.append("photos",img6)


  
        const uploadphotoRes = await axios.post(ImgApi+"/uploads",imgBody,{
          headers: {
            token: "imgauth",
            cc: getCookie("sort"),
          },
        })
        if(uploadphotoRes.status !== 200){
          return toast.error("somethin wrong with img server!")
        }
        const photodata = uploadphotoRes.data.name;
       
        const payloadBody =  {
          titel,
          name,
          price,
          fromLink,
          seoDes,
          type,
          catagory,
          tag,
          description,
          dur,
          photo:JSON.stringify(photodata.map((e)=>{
            return e.filename
          }))
  
        };
        
        const saveDataToDB = await axios.post("/api/v1.0/tour",payloadBody);
        
        toast.success("Product save!")
        Router.push("/Welcome/Admin");
      } catch (error) {
        console.log(error);
        toast.error("some thing is Wrong !!")
      }
    }
    saveData();
  }
  
  return (
    <div className="w-full relative">
      <Nav />
      <form onSubmit={(e)=>{
        e.preventDefault();
        save();
      }}>

      
        <div className=" p-10 text-center">
          <h1 className="text-2xl font-bold capitalize">Add New Tour pakedge</h1>
        </div>
        <div>
          <div className="w-full flex justify-center max-w-7xl mx-auto my-2">
            <div className="flex-1 flex justify-center ">
              <input
                value={titel}
                onChange={(e)=>{
                  setTitel(e.target.value)
                }}
                type="text"
                 required
                placeholder="Titel*"
           
                className="input input-bordered w-11/12  mx-auto"
              />
            </div>
            <div className="flex-1 flex justify-center">
              <input
              value={name}
              onChange={(e)=>{
                setName(e.target.value)
              }}
                type="text"
                 required
                placeholder="Name*"
             
                className="input input-bordered w-11/12 mx-auto"
              />
            </div>
          </div>
          <div className="w-full flex justify-center max-w-7xl mx-auto my-2">
            <div className="flex-1 flex justify-center">
              <input
              value={price}
              onChange={(e)=>{
                setPrice(e.target.value)
              }}
                type="text"
                 required
                placeholder="price*"
           
                className="input input-bordered w-11/12  mx-auto"
              />
            </div>
            <div className="flex-1 flex justify-center">
              <input
              value={fromLink}
              onChange={(e)=>{
                setfromLink(e.target.value)
              }}
                type="text"
                 required
                placeholder="Book Link*"
              
                className="input input-bordered w-11/12 mx-auto"
              />
            </div>
          </div>
          <div className="w-full flex justify-center max-w-7xl mx-auto my-2">
            <div className="flex-1 flex justify-center">
              <input
              value={seoDes}
              onChange={(e)=>{
                setSeoDes(e.target.value)
              }}
                type="text"
                 required
                placeholder="description for seo*"
              
                className="input input-bordered w-11/12  mx-auto"
              />
            </div>
            <div className="flex-1 flex justify-center">
            <select 
              value={type}
              onChange={(e)=>{
                setType(e.target.value)
              }}
              required
            className="input input-bordered w-11/12 mx-auto">
              <option disabled selected>
                Select Type
              </option>
              <option value="in" >In Bound</option>
              <option value="out" >Out Bound</option>
            </select>
            </div>
            
          </div>
          <div className="w-full flex justify-center max-w-7xl mx-auto my-2">
            
            <div className="flex-1 flex justify-center">
            <select 
            value={catagory}
            required
            onChange={(e)=>{
              setCatagory(e.target.value)
            }}
            className="input input-bordered w-11/12  mx-auto">
              <option disabled selected>
                Select Catagory
              </option>
              <option value="package" >Package Tour</option>
              <option value="group" >Group Tour</option>
              <option value="family" >Family Tour</option>
              <option value="corporate" >Corporate Tour</option>
            </select>
            </div>
            <div className="flex-1 flex justify-center">
            <input
              value={dur}
              onChange={(e)=>{
                setdur(e.target.value)
              }}
                type="text"
                 required
                  placeholder="Tour Duration"
              
                className="input input-bordered w-11/12 mx-auto"
              />
            </div>
            
          </div>
          <div className="w-full flex justify-center max-w-7xl mx-auto my-2">
            <div className="flex-1 w-full mx-12">
              <CreatableSelect
                 required
               placeholder="Add tags.."
                isMulti
                options={[]}
                onChange={(v) => setTag(v.map((e) => e.value))}
              />
            </div>
          </div>

          <div className="w-full relative ">
            <div className="w-full text-center p-4  text-xl mt-8 capitalize">
              <h2> Add images </h2>
              <p className="text-xs text-logoTag italic capitalize">(please add optimize photo)</p>
            </div>
            <div className="w-full max-w-7xl mx-auto  flex justify-around items-center mb-2 ">
              <input
                onChange={(e) => {
                  setImg1(e.target.files[0]);
                }}
                type="file"
                required
                className="file-input file-input-bordered w-full max-w-xs"
              />
              <input
              onChange={(e) => {
                setImg2(e.target.files[0]);
              }}
              required
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
              <input
              onChange={(e) => {
                setImg3(e.target.files[0]);
              }}
              required
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
            <div className="w-full max-w-7xl mx-auto  flex justify-around items-center mb-2">
              <input
              onChange={(e) => {
                setImg4(e.target.files[0]);
              }}
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
              <input
              onChange={(e) => {
                setImg5(e.target.files[0]);
              }}
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
              <input
              onChange={(e) => {
                setImg6(e.target.files[0]);
              }}
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
          </div>
        </div>
        <div className="w-full pt-10 pb-5 text-center  text-xl mt-8 capitalize">
          <h2>Tour Description</h2>
          <p className="text-xs text-logoTag italic capitalize">(things about responsiveness)</p>
        </div>
        <div className=" flex justify-center items-center mx-10">
          <Resizable
            defaultSize={{
              width: "100%",
              height: "100%",
            }}
          >
            <JoditEditor
              ref={editor}
              value={description}
              config={{
                readonly: false, // all options from https://xdsoft.net/jodit/docs/,
                placeholder: "Start typings...",
              }}
              tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => setDescription(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={(newContent) => {}}
            />
          </Resizable>
        </div>
        <div className="w-full max-w-7xl mx-auto p-8 mb-11">
          <button className="btn btn-success float-right">Add Tour </button>
        </div>
      </form>
    </div>
  );
};

export default Index;


export const getServerSideProps = async (ctx) => {
  let { sort } = ctx.req.cookies;
  
  let err = null;
  let Props = {
    user: null,
  };
  try {
    var decoded = jwt.verify(sort, process.env.JWTT);
   
    try {
      const DataBase = await DBcon();
      const { connection } = DataBase;
      const [data] = await connection.execute(
        `SELECT * FROM admin WHERE email="${decoded.email}"`
      );
      connection.end();

      if (data.length !== 0) {
        if (!+data[0].status) {
          return {
            redirect: {
              destination: "/Welcome/Admin/Login",
              permanent: false,
            },
          };
        }
      } else {
        return {
          redirect: {
            destination: "/Welcome/Admin/Login",
            permanent: false,
          },
        };
      }
    } catch (error) {
      console.log(error);
      return {
        redirect: {
          destination: "/Welcome/Admin/Login",
          permanent: false,
        },
      };
    }
    if (!decoded) {
      return {
        redirect: {
          destination: "/Welcome/Admin/Login",
          permanent: false,
        },
      };
    } else {
      Props.user = decoded;
    }
  } catch (e) {
    console.log(e);
    return {
      redirect: {
        destination: "/Welcome/Admin/Login",
        permanent: false,
      },
    };
  }
  return {
    props: Props,
  };
};