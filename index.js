var mysql = require('mysql');
const express = require("express");
var cors = require("cors");

const app = express();

const routes = require("./routes/index");


app.use(cors());

app.use(express.json());

// var connection = mysql.createConnection({
//     host: "localhost",
//     user: "user",
//     password: "localhost1"
//   });
  
//   connection.connect(function(err) {
//     if (err) throw err;
//     console.log("SQL Connected!");
//   });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization , Origin"
  );
  next();
});


app.use("/", routes);



app.listen("3000", () => {

    console.log("Server started on port 3000");
  
  });