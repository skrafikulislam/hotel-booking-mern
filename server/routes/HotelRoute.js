import express from "express";
import HotelModel from "../models/HotelModel.js";

const router = express.Router();

// ! Create
router.post("/", async (req, res) => {
  const newHotel = new HotelModel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    res.status(500).json(error.message);
  }
});
// ! Update
// ! Delete
// ! Get
// ! Get All

export default router;
