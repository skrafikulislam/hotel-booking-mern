import UserModel from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/Error.js";

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
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return next(createError(404, "User Not Found"));
    }
    const isPasswordCorrect = await bcrypt.compareSync(password, user.password);

    if (!isPasswordCorrect) {
      return next(createError(400, "Wrong Password, Write Valid Password"));
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
