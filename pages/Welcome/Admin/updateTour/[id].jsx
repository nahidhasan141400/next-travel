import axios from "axios";
import { getCookie } from "cookies-next";
import dynamic from "next/dynamic";
import Router from "next/router";
import { Resizable } from "re-resizable";
import React, { useRef, useState, useEffect } from "react";
import CreatableSelect from "react-select/creatable";
import { toast } from "react-toastify";
import ImgApi from "../../../../components/ImgApi";
import Nav from "../../../../components/admin/Nav";
import DBcon from "../../../../database/connection";
import SqlFormate from "../../../../lib/SqlFormater";
import { useRouter } from "next/router";

import Select from "react-select";

import jwt from "jsonwebtoken";

const JoditEditor = dynamic(import("jodit-react"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
let placeholder = "type";

const Index = () => {
  const { query } = useRouter();
  const [id, setid] = useState(query.id);

  const [inputValue, setInputValue] = React.useState("");
  const [value, setValue] = React.useState([]);
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [load, SetLoad] = useState(false);

  // form data handler

  const [titel, setTitel] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [fromLink, setfromLink] = useState();
  const [seoDes, setSeoDes] = useState();
  const [type, setType] = useState();
  const [catagory, setCatagory] = useState([]);
  const [tag, setTag] = useState([]);
  const [dur, setdur] = useState();
  // photo
  const [img1, setImg1] = useState();
  const [img2, setImg2] = useState();
  const [img3, setImg3] = useState();
  const [img4, setImg4] = useState();
  const [img5, setImg5] = useState();
  const [img6, setImg6] = useState();



  const [imgall, setimgall] = useState([]);
  // Description
  const [description, setDescription] = useState();

  //   set data from server
  useEffect(() => {
    const getData = async () => {
      try {
        const serverRes = await axios.get(`/api/v1.0/updatetour?id=${id}`);
        const dta = serverRes.data[0];
        setCatagory(JSON.parse(dta.catagory));
        setName(dta.name);
        setPrice(dta.price);
        setTitel(dta.titel);
        setType(dta.types);
        setTag(JSON.parse(dta.tag));
        const img = JSON.parse(dta.img);
        setimgall(img);
      
        setSeoDes(dta.meta);
        setfromLink(dta.fromlink);
        setdur(dta.dur);
        setDescription(dta.details);

        console.log("data =>", serverRes.data);
      } catch (error) {}
    };
    getData();
  }, [id]);
  // from submit handler

  const save = () => {
    if (load) {
      return;
    }
    SetLoad(true);
    const saveData = async () => {
      try {
        const payloadBody = {
          titel: SqlFormate(titel),
          name: SqlFormate(name),
          price: price,
          fromLink: fromLink,
          seoDes: SqlFormate(seoDes),
          type: type,
          catagory:JSON.stringify(catagory),
          id,
          description: SqlFormate(description),
          dur: dur,
          tag: JSON.stringify(tag),
        };

        const saveDataToDB = await axios.post(
          "/api/v1.0/updatetour",
          payloadBody
        );

        toast.success("Product save!");
        Router.push("/Welcome/Admin");
      } catch (error) {
        console.log(error);
        toast.error("some thing is Wrong !!");
      }
    };
    saveData();
  };

  // Image upload load
  const [isUploading, seUploading] = useState(false);

  const updateimg = async (imgblob, img) => {
    if (isUploading) {
      return toast.warn("One Image Is Upadating");
    }
    seUploading(true)
    const imgBody = new FormData();
    imgBody.append("photos", imgblob);
    try {
      const uploadphotoRes = await axios.post(ImgApi + "/uploads", imgBody, {
        headers: {
          token: "imgauth",
          cc: getCookie("sort"),
        },
      });

      const uploadedimg = await uploadphotoRes.data.name[0].filename;
     

      const updateimglist = imgall.map((e) => {
        return e === img ? uploadedimg : e;
      });
      const resdb = await axios.post('/api/v1.0/uploadphoto',{
        img:JSON.stringify(updateimglist),
        id
      });
      let dellist = [img]
      const deletephotores = axios.post(ImgApi+"/delete",{list:JSON.stringify(dellist)},{
        headers: {
          token: "imgauth",
          cc: getCookie("sort"),
        }});

      setimgall(updateimglist)

      if (updateimglist[0]) {
        setImg1P(updateimglist[0]);
      }
      if (updateimglist[1]) {
        setImg2P(updateimglist[1]);
      }
      if (updateimglist[2]) {
        setImg3P(updateimglist[2]);
      }
      if (updateimglist[3]) {
        setImg4P(updateimglist[3]);
      }
      if (updateimglist[4]) {
        setImg5P(updateimglist[4]);
      }
      if (updateimglist[5]) {
        setImg6P(updateimglist[5]);
      }


      seUploading(false)
      toast.success("Photo Update")
    } catch (error) {
      console.log("🚀 ~ file: [id].jsx:196 ~ updateimg ~ error:", error)
      seUploading(false)
    }
  };
  // add new 
  const addnewphoto = async (imgblob) => {
    if (isUploading) {
      return toast.warn("One Image Is Upadating");
    }
    seUploading(true)
    const imgBody = new FormData();
    imgBody.append("photos", imgblob);
    try {
      const uploadphotoRes = await axios.post(ImgApi + "/uploads", imgBody, {
        headers: {
          token: "imgauth",
          cc: getCookie("sort"),
        },
      });

      const uploadedimg = await uploadphotoRes.data.name[0].filename;
     

      const updateimglist = [...imgall,uploadedimg]

      const resdb = await axios.post('/api/v1.0/uploadphoto',{
        img:JSON.stringify(updateimglist),
        id
      });
      
      

      setimgall(updateimglist)

    


      seUploading(false)
      toast.success("Photo Update")
    } catch (error) {
      console.log("🚀 ~ file: [id].jsx:196 ~ updateimg ~ error:", error)
      seUploading(false)
    }
  };
  // end of image upadating 

  return (
    <div className="w-full relative">
      <Nav />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          save();
        }}
      >
        <div className=" p-10 text-center">
          <h1 className="text-2xl font-bold capitalize">Update Tour </h1>
        </div>
        <div>
          <div className="w-full flex justify-center max-w-7xl mx-auto my-2">
            <div className="flex-1 flex justify-center ">
              <input
                value={titel}
                onChange={(e) => {
                  setTitel(e.target.value);
                }}
                type="text"
               
                placeholder="Titel*"
                className="input input-bordered w-11/12  mx-auto"
              />
            </div>
            <div className="flex-1 flex justify-center">
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
               
                placeholder="Name*"
                className="input input-bordered w-11/12 mx-auto"
              />
            </div>
          </div>
          <div className="w-full flex justify-center max-w-7xl mx-auto my-2">
            <div className="flex-1 flex justify-center">
              <input
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                type="text"
               
                placeholder="price*"
                className="input input-bordered w-11/12  mx-auto"
              />
            </div>
            <div className="flex-1 flex justify-center">
              <input
                value={fromLink}
                onChange={(e) => {
                  setfromLink(e.target.value);
                }}
                type="text"
               
                placeholder="Book Link*"
                className="input input-bordered w-11/12 mx-auto"
              />
            </div>
          </div>
          <div className="w-full flex justify-center max-w-7xl mx-auto my-2">
            <div className="flex-1 flex justify-center">
              <input
                value={seoDes}
                onChange={(e) => {
                  setSeoDes(e.target.value);
                }}
                type="text"
               
                placeholder="description for seo*"
                className="input input-bordered w-11/12  mx-auto"
              />
            </div>
            <div className="flex-1 flex justify-center">
              <select
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                }}
               
                className="input input-bordered w-11/12 mx-auto"
              >
                <option disabled selected>
                  Select Type
                </option>
                <option value="in">In Bound</option>
                <option value="out">Out Bound</option>
              </select>
            </div>
          </div>
          <div className="w-full flex justify-center max-w-7xl mx-auto my-2">
            <div className="flex-1 flex justify-center">
              <Select
                isMulti
                name="colors"
                value={catagory.map((e)=>({label:e,value:e}))}
                // value={
                //   catagory? {label:catagory,value:catagory}
                // }
                required
                options={[
                  {
                    label: "Package Tour",
                    value: "package",
                  },
                  {
                    label: "Group Tour",
                    value: "group",
                  },
                  {
                    label: "Family Tour",
                    value: "family",
                  },
                  {
                    label: "Corporate Tour",
                    value: "corporate",
                  },
                  {
                    label: "hajj and omra",
                    value: "hajj",
                  },
                ]}
                onChange={(e) => {
                  // console.log(e);
                  setCatagory(e.map((x)=>x.value))
                }}
                className="w-11/12"
                />
               
            </div>
            <div className="flex-1 flex justify-center">
              <input
                value={dur}
                onChange={(e) => {
                  setdur(e.target.value);
                }}
                type="text"
               
                placeholder="Tour Duration"
                className="input input-bordered w-11/12 mx-auto"
              />
            </div>
          </div>
          {/* tag edit  */}
          <div className="w-full flex justify-center max-w-7xl mx-auto my-2">
            <div className="flex-1 w-full mx-12">
              <CreatableSelect
               
                placeholder="Add tags.."
                isMulti
                value={tag.map((e) => ({ label: e, value: e }))}
                options={[]}
                onChange={(v) => setTag(v.map((e) => e.value))}
              />
            </div>
          </div>
          {/* img upload  */}

          <div className="w-full grid grid-cols-6 gap-2 px-2">
            {imgall ?imgall.map((e,i)=> (
              <div key={i}>
                <img
                  className="border-2 "
                  src={ImgApi + `/upload/${e}`}
                  alt=""
                />
              </div>
            )) : (
              ""
            )}
            
          </div>
          <div className="w-full relative ">
            <div className="w-full text-center p-4  text-xl mt-8 capitalize">
              <h2> Upload Img images </h2>
              <p className="text-xs text-logoTag italic capitalize">
                (please add optimize photo)
              </p>
            </div>

            <div className="w-full max-w-7xl mx-auto grid grid-cols-4 gap-2 mb-20 ">
              {imgall.map((e, i) => {
                return (
                  <div key={i} className="flex flex-col">
                    <label> Upload photo {i + 1} {isUploading?"uploading":""}</label>
                    <input
                      onChange={(x) => {
                        let img = x.target.files[0];
                        updateimg(img,e)
                      }}
                      type="file"
                     
                      placeholder=" update photo one"
                      className="file-input file-input-bordered w-full max-w-xs"
                    />
                  </div>
                );
              })}
            </div>
            <div>
            <div  className="flex flex-col justify-center items-center">
                    <label> Add New Photo</label>
                    <input
                      onChange={(x) => {
                        let img = x.target.files[0];
                        addnewphoto(img)
                      }}
                      type="file"
                     
                      placeholder=" update photo one"
                      className="file-input file-input-bordered w-full max-w-xs"
                    />
                  </div>
            </div>
          </div>
        </div>
        <div className="w-full pt-10 pb-5 text-center  text-xl mt-8 capitalize">
          <h2>Tour Description</h2>
          <p className="text-xs text-logoTag italic capitalize">
            (things about responsiveness)
          </p>
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
          <button
            type="button"
            onClick={() => {
              Router.back();
            }}
            className="btn btn-error"
          >
            Back to Dashboard
          </button>
          <button
            type="submit"
            className={`btn btn-success float-right ${load ? "loading" : ""}`}
          >
            Update
          </button>
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
