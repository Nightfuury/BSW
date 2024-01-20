var mysql = require('mysql');

// var db = mysql.createConnection({
//     host: "localhost",
//     user: "user",
//     password: "localhost1",
//     database:"MYSQL"
// });

var db=mysql.createConnection({
    host : "db-bsw.cufs3q03c2kq.ap-south-1.rds.amazonaws.com",
    user : "admin",
    password : "KfPO9K0OsE6HZJOaiQAR",
    port : "3306",
    database:"bswmysql"
})


module.exports = db;
