import { Login, Logout, Register } from "../Controllers/user.js";
import express from "express";

const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);

export default router;
