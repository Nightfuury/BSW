var mysql = require('mysql');

// var db = mysql.createConnection({
//     host: "localhost",
//     user: "user",
//     password: "localhost1",
//     database:"MYSQL"
// });

var db=mysql.createConnection({
    host : "database-bsw.cufs3q03c2kq.ap-south-1.rds.amazonaws.com",
    user : "admin",
    password : "0SfjhwysN8mteoxLnHK6",
    port : "3306",
    database:"-"
})


module.exports = db;
