require("dotenv").config();
const mysql = require("mysql2/promise");
const DB = process.env.DB;

const connectionDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB,
      password: process.env.PW,
    });
    return { connection, er: false };
    console.log(connection)
  } catch (error) {
    console.log(error);
    console.log("db connection faild chack on _/database/connection.js");
    return {
      er: true,
      error,
      msg: "Database connection fail !-",
      deta: "database connection faild ! pleas chack the DB connection--",
    };
  }
};

let loop = 0;
// moduls ------------>>>>>>>
const admin = `CREATE TABLE ${DB}. admin (
    id INT NOT NULL AUTO_INCREMENT , 
    name VARCHAR(255) NOT NULL ,
    user VARCHAR(255) NOT NULL ,
    email VARCHAR(255) NOT NULL ,
    password TEXT(255) NOT NULL ,
    session TEXT(255) NOT NULL ,
    status BOOLEAN NOT NULL ,
    phone TEXT(9000) NOT NULL ,
    img TEXT(9000) NOT NULL ,
    role TEXT(9000) NOT NULL ,
    job TEXT(9000) NOT NULL ,
    PRIMARY KEY (id))
    ENGINE = InnoDB;`;
    
const tour = `CREATE TABLE ${DB}. tour (
        id INT NOT NULL AUTO_INCREMENT UNIQUE, 
        name TEXT(1000) NOT NULL ,
        titel TEXT(1000) NOT NULL ,
        log LONGTEXT NOT NULL ,
        img  TEXT(1000) NOT NULL ,
        details TEXT(1000)  NULL ,
        status BOOLEAN NOT NULL ,
        price TEXT(1000)  NULL ,
        fromlink TEXT(1000)  NULL ,
        tag TEXT(1000)  NULL ,
        meta TEXT(1000)  NULL , 
        types TEXT(1000)  NULL ,
        catagory TEXT(1000)  NULL ,
        created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id))
        ENGINE = InnoDB;`;

// modal register heare
const moduls = [admin,tour];

const mygrate = async (query) => {
  const rescon = await connectionDB();
  const { connection } = rescon;
  try {
    const [data] = await connection.execute(query);
    console.log(data);
    close();
  } catch (error) {
    console.log(error);
  }
};
moduls.forEach(
  (q, i) => {
    console.log("loop start");
    loop = i;
    mygrate(q);
  },
  function allDone() {
    console.log("All done");
    process.exit();
  }
);

function close() {
  if (loop == moduls.length - 1) {
    process.exit();
  }
}
