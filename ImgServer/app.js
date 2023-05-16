// server.js
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const fsPromises = require('fs/promises');
const path = require('path');
require("dotenv").config();
const cors = require("cors");
const jwt = require("jsonwebtoken");
var cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
  })
);

// multer setup ////
const multer = require("multer");

//Configuration for Multer
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/upload");
  },
  filename: function (req, file, cb) {
    console.log(file);
    let d = new Date();
    cb(null, `${d.getTime()}-${file.originalname}`);
  },
});

//Calling the "multer" Function
const upload = multer({
  storage: storage,
});

const authAdmin = async (req, res, next) => {
  let cart = req.header("cc");
  try {
    var decoded = jwt.verify(cart, process.env.JWTT);
    next();
  } catch (error) {
    console.log(error);
    res.status(401);
    res.send({ msg: "Unauthorized cc" });
  }
};
// auth middelware //--->
const auth = (req, res, next) => {
  try {
    const token = req.header("token");
    if (process.env.Token === token) {
      next();
    } else {
      res.status(401);
      res.send({ msg: "Unauthorized" });
    }
  } catch (error) {
    res.status(401);
    res.send({ msg: "Unauthorized" });
  }
};

function uploadFiles(req, res) {
  try {
   
    res.status(200).json({
      status: "success",
      name: req.files,
    });
  } catch (error) {
    console.log(error);
    res.json({
      error,
    });
  }
}
function uploadFile(req, res) {
  try {
    res.status(200).json({
      status: "success",
      name: req.file,
    });
  } catch (error) {
    console.log(error);
    res.json({
      error,
    });
  }
}

// delete function 
async function deletefun(req,res){
  console.log(req.body.list);
  const list = JSON.parse(req.body.list);
  const deletedList  =  [];
  const errChack = [];

 for (let index = 0; index < list.length; index++) {
  const element = list[index];
  try {
    await fsPromises.unlink(path.join(__dirname,"public","upload",element));
    deletedList.push(element);
  } catch (err) {
    errChack.post(err);
  }
 }
 if(errChack.length){
  res.status(202).send({
    err:errChack,
    list:deletedList,
  })
 }else{
  res.status(200).send({msg:"ok all deleted"})
 }


}


///////mailere function/////
const nodemailer = require("nodemailer");
const mail = async (req,res)=>{
  console.log("mail")
  if(!req.body.website){
    return res.status(404).send("not found  !")
  }
        try {
           // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
              host: "sunholidaysltd.com",
              port: 465,
              tls: {
                rejectUnauthorized:false
            },
              secure: true, // true for 465, false for other ports
              auth: {
                user: "info@sunholidaysltd.com", // generated ethereal user
                pass: "Sun@0118", // generated ethereal password
              },
            });

              // send mail with defined transport object
          let info = await transporter.sendMail({
            from:"info@sunholidaysltd.com",//, // sender address
            to: "sunholidays07@gmail.com", // list of receivers
            subject: `mail from : ${req.body.website}, by:${req.body.mail?req.body.mail:"no mail provided!"}`, // Subject line
            text: "pleass see html preview", // plain text body
            html: `
            <div style="font-family: sans-serif; width: 100%; overflow: hidden">
      <div class="titel">
        <h1
          style="
            width: 100%;
            text-align: center;
            background-color: aquamarine;
            padding: 10px;
            margin: 0;
          "
        >
          Mail from ${req.body.website}
        </h1>
      </div>
      <div
        style="
          width: 100%;
          position: relative;
        "
      >
        <table
          border="1"
          style="
            width: 100%;
            max-width: 1000px;
            margin: auto;
            border-spacing: 0;
            margin-top: 20px;
          "
        >
          <tr>
            <td
              style="padding: 5px; font-size: 17px; text-transform: capitalize"
            >
              name
            </td>
            <td
              style="padding: 5px; font-size: 17px; text-transform: capitalize"
            >
              ${req.body.name?req.body.name:"no name provided!"}
            </td>
          </tr>
          <tr>
            <td
              style="padding: 5px; font-size: 17px; text-transform: capitalize"
            >
              Phone
            </td>
            <td
              style="padding: 5px; font-size: 17px; text-transform: capitalize"
            >
            ${req.body.phone?req.body.phone:"no phone provided!"}
            </td>
          </tr>
          <tr>
            <td
              style="padding: 5px; font-size: 17px; text-transform: capitalize"
            >
              email
            </td>
            <td
              style="padding: 5px; font-size: 17px; text-transform: capitalize"
            >
            ${req.body.mail?req.body.mail:"no mail provided!"}
            </td>
          </tr>
        </table>
        <div
          style="
            margin-top: 20px;
            text-transform: capitalize;
            padding: 10px;
            font-size: 20px;
          "
        >
          massages
        </div>
        <div
          style="
            padding: 10px;
            margin: 10px;
            box-sizing: border-box;
            width: 100%;
            max-width: 1000px;
            margin: auto;
            border: 1px solid black;
            margin-top: 20px;
          "
        >
          <p>
            ${req.body.msg?req.body.msg:"no massage provide !"}
          </p>
        </div>
      </div>
      <div
      style="text-align:right;font-size:6px;font-weight:200;font-style:italic;"
      >
      powerd by paradice solution
      </div>
    </div>
            
            `, // html body
          });


          console.log("Message sent: %s", info.messageId);
          res.send("ok")
        } catch (error) {
          console.log(error)
          res.status(500).send("wong")
        }
}


// delete function 
async function deletefun(req,res){
  console.log( "json list >",req.body.list);
  const list = JSON.parse(req.body.list);
  const deletedList  =  [];
  const errChack = [];

 for (let index = 0; index < list.length; index++) {
  const element = list[index];
  try {
    await fsPromises.unlink(path.join(__dirname,"public","upload",element));
    deletedList.push(element);
  } catch (err) {
    errChack.push(err);
  }
 }
 if(errChack.length){
  res.status(202).send({
    err:errChack,
    list:deletedList,
  })
 }else{
  res.status(200).send({msg:"ok all deleted"})
 }


}



//  route   //
app.post("/upload", authAdmin, auth, upload.single("photo"), uploadFile);
app.post("/uploads", authAdmin, upload.array("photos"), uploadFiles);
app.post("/delete",authAdmin,deletefun);
app.post("/mailto",mail)
app.post("/delete",authAdmin,deletefun);




app.listen(5000, () => {
  console.log(`Server started...`);
});
