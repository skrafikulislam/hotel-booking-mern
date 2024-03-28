import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
    maxPeople: {
      type: Number,
    },
    desc: {
      type: String,
    },
    roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
  },
  //! Times Stamps Are Used to Store the Exact time any user created or updated
  { timestamps: true }
);

const RoomModel = mongoose.model("User", RoomSchema);

export default RoomModel;
