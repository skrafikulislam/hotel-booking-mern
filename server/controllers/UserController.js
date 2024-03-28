import UserModel from "../models/UserModel.js";

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    await UserModel.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).json("Hotel Deleted from database Succesfully");
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const User = await UserModel.findById({
      _id: req.params.id,
    });
    res.status(200).json(User);
  } catch (error) {
    next(error);
  }
};

export const getAllUser = async (req, res, next) => {
  try {
    const Users = await UserModel.find();
    res.status(200).json(Users);
  } catch (err) {
    next(err);
  }
};
