import axios from 'axios';
import Router from "next/router";
import React, { useState } from 'react';
import { toast } from "react-toastify";
import Logo from "../../../../components/util/Logo";


const Index = () => {

  const [users,setUser] = useState();
  const [password,setpassword] = useState();
  const [load,setLoad] = useState();




  const handelform = async ()=>{

    try {
      const serverres = await axios.post('/api/v1.0/login',{
        email:users,password:password
      }
      );
      if(serverres.status === 200){
        setLoad(false);
        toast.success("login sucssesfully")
        Router.push("/Welcome/Admin")
      }else{
      toast.error("Wrong information")
      setLoad(false);
    }
    } catch (error) {
      setLoad(false);
      console.log(error);
      toast.error("something is wrong")
    }
  }

  return (
    <div>
        <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style={{backgroundImage:"url('https://source.unsplash.com/random/500×1000/?travel')"}}>
  <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
    <div className="text-white">
      <div className="mb-8 flex flex-col items-center">
        <div className='w-28'>
            <Logo/>
        </div>
        <h1 className="mb-2 text-2xl mt-4">Sun Holidays Ltd.</h1>
        <span className="text-gray-300">Enter Login Details</span>
      </div>
      <form onSubmit={(e)=>{
        e.preventDefault();
        handelform()
        }}>
        <div className="mb-4 text-lg">
          <input 
          onChange={(e)=>setUser(e.target.value)}
          value={users} className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="name" placeholder="User Name" />
        </div>

        <div className="mb-4 text-lg">
          <input
          onChange={(e)=>setpassword(e.target.value)}
          value={password}
          className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" name="name" placeholder="*********" />
        </div>
        <div className="mt-8 flex justify-center text-lg text-black">
          <button type="submit" className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600 glass font-bold">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Index;
