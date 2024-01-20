var db = require('../../dbconfig');

const createTable = (req, res) => {

    //db.query('CREATE DATABASE IF NOT EXISTS MYSQL;');
    //db.query('USE MYSQL;');
    let sql = "CREATE TABLE User(Uid VARCHAR(255), Name VARCHAR(50), Score INT,Country VARCHAR(3),Timestamp Date, PRIMARY KEY(Uid))";

    db.query(sql, (err) => {

        if (err) {

            throw err;

        }

        res.send("User table created");

    });
}

const addUser = async (req, res) => {
    const userData = req.body;

    let data = { Uid: userData.Uid, Name: userData.Name, Score: userData.Score, Country: userData.Country, Timestamp: userData.Timestamp };

    let sql = "INSERT INTO User SET ?";

    db.query(sql, data, (err) => {

        if (err) {

            throw err;

        }
        res.send("User added");
    });
}

const getUsers = async (req, res) => {
    let sql = "SELECT * FROM User";

    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
}

const getCurrentLeader = async (req, res) => {
    let sql = "SELECT * FROM  User WHERE  YEARWEEK(`Timestamp`, 1) = YEARWEEK(CURDATE(), 1) ORDER BY Score DESC LIMIT 200;";

    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
}

const getLastWeekLeader = async (req, res) => {
    var country = req.query.country;

    let sql = `SELECT * from User WHERE week(timestamp)=week(now())-1 AND Country = ${country} ORDER BY Score DESC LIMIT 200;`;

    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    });
}

const getUserRank = async (req, res) => {
    var userId = req.query.userId;

    let sql = `SELECT Uid from User ORDER BY SCORE Desc`;

    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }

        let rank;

        result.forEach((item,index) => {
            if(userId == item.Uid){
                rank=index+1;
            }
        })

        let data={
            rank : rank
        }

        res.send(data);
    });

}




module.exports = {
    createTable: createTable,
    getUsers: getUsers,
    addUser: addUser,
    getCurrentLeader: getCurrentLeader,
    getLastWeekLeader: getLastWeekLeader,
    getUserRank: getUserRank
}