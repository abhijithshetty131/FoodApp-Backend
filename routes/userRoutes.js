const { Router } = require("express");
const { Signup } = require("../controllers/signup");

const userRoute = Router();

userRoute.post("/signup", Signup);

module.exports = userRoute;
