import axios from "axios";
import DBcon from "../../../database/connection";
var jwt = require("jsonwebtoken");
import url from "../../../components/ImgApi"

export default async function handler(req, res) {
  let cart = null;
  try {
    const decoded = jwt.verify(req.cookies.sort, process.env.JWTT);
    cart = decoded;
  } catch (error) {
   
    cart = false;
  }
  let requser;

  const method = req.method;

  if (method === "POST") {
   const {dataid} = req.body;
    try {
      const DataBase = await DBcon();
      const { connection } = DataBase;
      const [data] = await connection.execute(
        `SELECT * FROM admin WHERE email="${cart.email}"`  
      );
      
      connection.end();
      if (data.length !== 0) {
            if (!data[0].status) {
            res.status(500);
            return res.send("not active");
            }
       
      } else {
        res.status(500);
        return res.send("not user");
      }
    } catch (error) {
      res.status(500);
      return res.send(error);
    }


    const DataBase = await DBcon();
    const { connection } = DataBase;
    try {
      let sql = `DELETE FROM populer WHERE data = "${dataid}"`;
      const [datafromDBv] = await connection.execute(sql);
      connection.end();
      res.send({ msg: "ok" });
      // res.send({ msg: "ok",});
    } catch (error) {
      console.log("server ee", error);
      connection.end();
      res.status(500);
      res.send(error);
    }
  } else if (method === "GET") {
    try {
      const DataBase = await DBcon();
      const { connection } = DataBase;
      const [datafromDB] = await connection.execute("SELECT * FROM `tour`");
      connection.end();

      //   console.log(datafromDB);
      res.send(datafromDB);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }
}
