import cookie from "cookie";
import DBcon from "../../../database/connection";

var jwt = require('jsonwebtoken');

export default async function handler(req, res) {
  const method = req.method;

  if (method === "POST") {
    try {
      const { email,password } = req.body;
     console.log(req.body)
      const DataBase = await DBcon();
      const { connection } = DataBase;
      
      const [userInDb] = await connection.execute(
        `SELECT * FROM admin WHERE user = '${email}'`
      );
     
      if (!userInDb.length) {
        connection.end();
        res.status(500);
        return res.send({ err: "Wrong credential !"});
      }

      if(+userInDb[0].status !== 1){
        connection.end();
        res.status(500);
        return res.send({ err: "Verify your account !"});
      };


    //   auth chack   // console.log("ok",data);
    const plt = password;
    const hash = userInDb[0].password;

    
    const pass = plt === hash;
      if(pass){
        const token = await jwt.sign({
            user:userInDb[0].name,
            email:userInDb[0].email,
            phone:userInDb[0].phone,
            id:userInDb[0].id,
        },process.env.JWTT,{
            expiresIn:"7d"
        });

        res.setHeader("Set-Cookie",cookie.serialize("sort",token,{
            maxAge:  86400,
            sameSite: "strict",
            path: "/"
        }))



        const [suerReg] = await connection.execute(`UPDATE admin SET job = '${userInDb[0].job+" || "+ new Date().toISOString() + "||" +email }' WHERE admin.id = ${userInDb[0].id};`);
        connection.end();

        res.send({ msg: "ok", suerReg });
      }else{
        connection.end();
        res.status(500);
        return res.send({ err: "Wrong credential !"});
      }
    } catch (error) {
      console.log("server ee", error);
      res.status(500);
      res.send(error);
    }
  } else if (method === "GET") {
    try {
      // const DataBase = await DBcon();
      // const { connection } = DataBase;
      // const [datafromDB] = await connection.execute("SELECT * FROM `brand`");
      // connection.end();

      // //   console.log(datafromDB);
      // res.send(datafromDB);
      res.send("404")
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }
}
