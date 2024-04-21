import express from "express";

import {
  _newUserPassRegister,
  _userLogin,
} from "../controllers/userControllers.js";

const router = express.Router();

router.post("/register", _newUserPassRegister);
router.post("/login", _userLogin);

export default router;
