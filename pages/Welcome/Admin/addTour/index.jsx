import dynamic from "next/dynamic";
import { Resizable } from "re-resizable";
import React, { useRef, useState } from "react";
import CreatableSelect from "react-select/creatable";
import Nav from "../../../../components/admin/Nav";

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
  // photo 
  const [img1,setImg1] = useState();
  const [img2,setImg2] = useState();
  const [img3,setImg3] = useState();
  const [img4,setImg4] = useState();
  const [img5,setImg5] = useState();
  const [img6,setImg6] = useState();
  // Description 
  const [description,setDescription] = useState();

  console.log(description)
  return (
    <div className="w-full relative">
      <Nav />
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
              placeholder="Titel*"
              required
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
              placeholder="Name*"
              required
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
              placeholder="price*"
              required
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
              placeholder="Book Link*"
              required
              className="input input-bordered w-11/12 mx-auto"
            />
          </div>
        </div>
        <div className="w-full flex justify-center max-w-7xl mx-auto my-2">
          <div className="flex-1 flex justify-center">
            <input
            value={seoDes}
            setSeoDes={(e)=>{
              setSeoDes(e.target.value)
            }}
              type="text"
              placeholder="description for seo*"
              required
              className="input input-bordered w-11/12  mx-auto"
            />
          </div>
          <div className="flex-1 flex justify-center">
          <select 
            value={type}
            setType={(e)=>{
              setType(e.target.value)
            }}
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
          setCatagory={(e)=>{
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
          
        </div>
        <div className="w-full flex justify-center max-w-7xl mx-auto my-2">
          <div className="flex-1 w-full mx-12">
            <CreatableSelect
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
            <p className="text-xs text-logoTag italic capitalize">please add optimize photo</p>
          </div>
          <div className="w-full max-w-7xl mx-auto  flex justify-around items-center mb-2 ">
            <input
              onChange={(e) => {
                setImg1(e.target.files[0]);
              }}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
            <input
             onChange={(e) => {
              setImg2(e.target.files[0]);
            }}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
            <input
            onChange={(e) => {
              setImg3(e.target.files[0]);
            }}
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
        <p className="text-xs text-logoTag italic capitalize">things about responsiveness</p>
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
    </div>
  );
};

export default Index;
