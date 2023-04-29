const express = require("express");
const router = express.Router();
const { userSignup } = require("../Controller/UserController");

router.route("/sign-up").post(userSignup);

module.exports = router;
