import express from "express";

import {
  _newUserPassRegister,
  _userLogin,
  _userContact,
} from "../controllers/userControllers.js";

const router = express.Router();

router.post("/register", _newUserPassRegister);
router.post("/login", _userLogin);
router.post("/contact", _userContact);
export default router;
