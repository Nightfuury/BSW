const express = require("express");
const router = express.Router();

const userController = require("../controllers/User/user");-

router.get("/", (req, res) => {
  res.send("Connected");
});

router.get("/createTable",userController.createTable);

router.get("/getCurrentLeader", userController.getCurrentLeader);

router.get("/getLastWeekLeader", userController.getLastWeekLeader);

router.get("/getUserRank", userController.getUserRank);


router.get("/getUsers", userController.getUsers);
router.post("/addUser", userController.addUser);

module.exports = router;
