var mysql = require('mysql');

var db = mysql.createConnection({
    host: "ec2-3-108-54-157.ap-south-1.compute.amazonaws.com",
    user: "user",
    password: "localhost1",
    database:"MYSQL"
});


module.exports = db;
