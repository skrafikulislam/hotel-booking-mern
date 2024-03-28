import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUser,
} from "../controllers/UserController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// ! Checking Authentication Using MiddleWares
// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Hello User, You're Logged In");
// });

// ! Verify The User  Using MiddleWares
// router.get("/checkuser/:id", verifyUser, (req, res) => {
//   res.send("Hello User, You're Logged In and You can delete your account");
// });

// ! Verify The Admin Using MiddleWares
// router.get("/checkadmin/:id", verifyAdmin, (req, res) => {
//     res.send("Hello Admin, You're Logged In and You can delete All accounts");
//   });

// ! Update User By Id
router.put("/:id", verifyUser, updateUser);

// ! Delete User By Id
router.delete("/:id", verifyUser, deleteUser);

// ! Get Specific User
router.get("/:id", verifyUser, getUser);

// ! Get All
router.get("/", verifyAdmin, getAllUser);

export default router;
