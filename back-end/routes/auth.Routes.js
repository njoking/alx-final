const { Router } = require("express");
const { createUser, loginUser } = require("../controllers/auth.Controller");

const authRoutes = Router();

authRoutes.post("/register", createUser);
authRoutes.post("/login", loginUser);

module.exports = authRoutes;
