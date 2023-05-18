import DBcon from "../../../database/connection";
var jwt = require("jsonwebtoken");
import cookie from "cookie";
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
   const { titel,
    password,newp
  } = req.body;
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
        requser = data[0];
      } else {
        res.status(500);
        return res.send("not user");
      }
    } catch (error) {
      res.status(500);
      return res.send(error);
    }


    if(password !== requser.password){
        return res.status(401).send("un auth user")
    }

    try {
      const DataBase = await DBcon();
      const { connection } = DataBase;


        const sql = `UPDATE admin SET password = '${newp}' WHERE admin.id = ${requser.id};`


      const [datafromDB] = await connection.execute(sql);
      connection.end();
      
      res.setHeader("Set-Cookie",cookie.serialize("sort","",{
        maxAge:  1,
        sameSite: "strict",
        path: "/"
    }));

      res.send({ msg: "ok", datafromDB });
      // res.send({ msg: "ok",});
    } catch (error) {
      console.log("server ee", error);
      res.status(500);
      res.send(error);
    }
  } else if (method === "GET") {
    if(!cart){
        return res.status(401).send("inlugul - update -68");
    }
    const id = req.query.id;
    try {
      const DataBase = await DBcon();
      const { connection } = DataBase;
      const [datafromDB] = await connection.execute(`SELECT * FROM tour WHERE id="${id}";`);
      connection.end();

      //   console.log(datafromDB);
      res.send(datafromDB);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }
}
