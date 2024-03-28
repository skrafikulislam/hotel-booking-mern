import HotelModel from "../models/HotelModel.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new HotelModel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await HotelModel.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    await HotelModel.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).json("Hotel Deleted from database Succesfully");
  } catch (error) {
    next(error);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const Hotel = await HotelModel.findById({
      _id: req.params.id,
    });
    res.status(200).json(Hotel);
  } catch (error) {
    next(error);
  }
};

export const getAllHotel = async (req, res, next) => {
  try {
    const Hotels = await HotelModel.find();
    res.status(200).json(Hotels);
  } catch (err) {
    next(err);
  }
};
