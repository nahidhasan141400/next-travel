import axios from "axios";
import { getCookie } from "cookies-next";;
import Router from "next/router";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import Nav from "../../../../components/admin/Nav";
import DBcon from "../../../../database/connection";

import jwt from "jsonwebtoken";

const Index = () => {

    const [password,setPassword] = useState();
    const [newPass,setNewPass] = useState();
    const [cpass,setCpass] = useState();

    const submitForm = async ()=>{
        
            if(!password || !newPass || !cpass){
                return toast.warn("Fill the form to change the password",{position:"top-center"})
            }
            
            if(newPass !== cpass){
                return toast.warn("Password not match ",{position:"top-center"})
            }

        try {
            const serverres = await toast.promise(axios.post("/api/v1.0/changp",{
                password,
                newp:newPass
            }),{
                pending:"wait",
                success:"Password change 😊",
                error:"Wrong information ⛔"
            },{
                position:"top-center",
                theme:"light"
            });
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="w-full relative">
      <Nav />
      <div className="w-full relative">
        <div className="w-full max-w-3xl mx-auto">
          <h1>Change Password</h1>
          <form className="mt-5" onSubmit={(e)=>{
            e.preventDefault();
            submitForm()
          }}>
            {/* old password */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Current Password</span>
              </label>
              <input
              onChange={(e)=>{
                setPassword(e.target.value)
                
              }}
              value={password}
                type="password"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            {/* new pass  */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">New Password</span>
              </label>
              <input
              onChange={(e)=>setNewPass(e.target.value)}
              value={newPass}
                type="password"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            {/* conferm new pass  */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Confirm New Password</span>
              </label>
              <input
              onChange={(e)=>{setCpass(e.target.value)}}
              value={cpass}
                type="password"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="mt-5 pb-10">
                <button className="btn btn-primary"> change password</button>
            </div>
          </form>
        </div>
      </div>
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
