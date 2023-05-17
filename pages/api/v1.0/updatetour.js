import DBcon from "../../../database/connection";
var jwt = require("jsonwebtoken");

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
    name,
    price,
    fromLink,
    seoDes,
    type,
    catagory,
    tag,
    dur,
    description,
    photo} = req.body;
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

    try {
      const DataBase = await DBcon();
      const { connection } = DataBase;
      const [datafromDB] = await connection.execute(
        `INSERT INTO tour (id, name, titel, log, img, details, status, price, fromlink, tag, meta,types,catagory,future,dur, created) VALUES (NULL, '${name}', '${titel}', 'start', '${photo}', '${description}', '1', '${price}', '${fromLink}', '${JSON.stringify(tag)}', '${seoDes}','${type}','${catagory}','0','${dur}', current_timestamp());`
      );
      connection.end();
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
