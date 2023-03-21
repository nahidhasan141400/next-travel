import Router from "next/router";
import { createContext, useContext, useState } from "react";
import style from "./l.module.scss";

 export const Contextload = createContext();

 export const useLoader = ()=>{
      const setLoad = useContext(Contextload)
      return setLoad;
 }



const Loader = ({ children }) => {
  

  const [load, SetLoad] = useState(false);


  Router.events.on("routeChangeStart",()=>{
   SetLoad(true)
  })
  Router.events.on("routeChangeComplete",()=>{
   SetLoad(false)
  })

  return (
    <Contextload.Provider value={SetLoad}>
      <div>
        {load ? (
          <div className={`${style.main}`}>
            <div
              className={`${style.bar} bg-logoSun shadow-md shadow-logoSun`}
            ></div>
          </div>
        ) : (
          ""
        )}
        {children}
      </div>
    </Contextload.Provider>
  );
};
export default Loader;