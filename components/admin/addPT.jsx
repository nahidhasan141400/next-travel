import React,{useState,useEffect} from "react";
import axios from "axios";
import {toast} from "react-toastify";

const AddPT = ({close}) => {
  const [data,setData] = useState([]);
  const [tourid,setTourId] = useState();
  
  useEffect(()=>{
    const getData = async ()=>{
      try {
        const redb = await axios.get("/api/v1.0/tour");
        setData(redb.data);
        
      } catch (error) {
        console.log(error);
      }
    };
    getData()
  },[])

  // setup data 
  const saveData = async ()=>{
    if(!tourid){
      return toast.warn("Choose a tour")
    }
    try {
      const sedb = await toast.promise(axios.post("/api/v1.0/addPtour",{
        id:tourid
      }),{
        success: "✔ tour save 😊",
        pending: "wait ",
        error:"ops something is wrong 😔"
      },
      {
        position:"top-center"
      });
      close(false)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="z-50 w-full h-screen top-0 flex justify-center items-center glass left-0 fixed overflow-hidden">
      <div className="w-2/5 h-1/3 bg-logoRay/10  rounded-lg shadow-md flex flex-col items-center p-3">
        <h1 className="w-full text-2xl text-center py-3 border-b-2 border-logoRay">
          Add A top Tour
        </h1>
        <div className="mt-4 w-full">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Choose a tour</span>
            </label>
            <select onChange={(e)=>setTourId(e.target.value)} value={tourid} className="select select-bordered">
              <option disabled selected>
                Pick one
              </option>
              {
                data.map((e)=>{
                  return(<option key={e.id} value={e.id}>{e.name}</option>)
                })
              }
              
            </select>
          </div>
          <div className="mt-4 flex justify-between">
          <button onClick={saveData} className="btn btn-primary">Save</button>
        <button onClick={()=>{close(false)}} className="btn btn-link text-logoTag">close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPT;
