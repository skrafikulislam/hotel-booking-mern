import express from "express";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getAllHotel,
} from "../controllers/HotelController.js";

import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// ! Create Hotel In Data Base
router.post("/", verifyAdmin, createHotel);

// ! Update Hotel By Id
router.put("/:id",verifyAdmin, updateHotel);

// ! Delete Hotel By Id
router.delete("/:id",verifyAdmin, deleteHotel);

// ! Get Specific Hotel
router.get("/:id", getHotel);

// ! Get All
router.get("/", getAllHotel);

export default router;
