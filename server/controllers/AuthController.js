import UserModel from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/Error.js";
import jwt from "jsonwebtoken";

// ! Register User
export const Register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const newUser = new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json("User Created in Database Successfully");
  } catch (error) {
    next(error);
  }
};

// ! Login User
export const Login = async (req, res, next) => {
  //   const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      return next(createError(404, "User Not Found"));
    }
    const isPasswordCorrect = await bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect)
      return next(createError(400, "Wrong Password, Write Valid Password"));

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("accessToken", accessToken, { httpOnly: true })
      .status(200)
      .json({ ...otherDetails });
  } catch (error) {
    next(error);
  }
};
