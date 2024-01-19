var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "localhost1",
    database:"MYSQL"
});


module.exports = db;
