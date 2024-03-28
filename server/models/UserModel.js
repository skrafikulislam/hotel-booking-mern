import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  //! Times Stamps Are Used to Store the Exact time any user created or updated
  { timestamps: true }
);

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
