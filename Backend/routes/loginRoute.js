const express = require("express");
const router = express.Router();
const { userLogin } = require("../Controller/UserController");

router.route("/login").post(userLogin);

module.exports = router;
