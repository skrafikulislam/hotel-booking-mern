import express from "express";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getAllHotel,
} from "../controllers/HotelController.js";

const router = express.Router();

// ! Create Hotel In Data Base
router.post("/", createHotel);

// ! Update Hotel By Id
router.put("/:id", updateHotel);

// ! Delete Hotel By Id
router.delete("/:id", deleteHotel);

// ! Get Specific Hotel
router.get("/:id", getHotel);

// ! Get All
router.get("/", getAllHotel);

export default router;
