import express from "express";
import dotenv from "dotenv";
import MongoConnection from "./mongo_connection/MongoConnection.js";
import cors from "cors";
import UserRouter from "./routes/UserRoute.js";
import RoomRouter from "./routes/RoomRoute.js";
import HotelRouter from "./routes/HotelRoute.js";
import AuthRouter from "./routes/AuthRoute.js";

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

MongoConnection();

// ! Server Route MiddleWares
app.use("/api/users", UserRouter);
app.use("/api/rooms", RoomRouter);
app.use("/api/hotels", HotelRouter);
app.use("/api/auth", AuthRouter);

// ! Error Handling MiddleWare
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage =
    err.message || "No Error Messages , Something Went Wrong";

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(process.env.PORT, () =>
  console.log(`Server is Running on Port ${process.env.PORT}`)
);
