import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";
import cookieParser from "cookie-parser";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
// import myHotelRoutes from "./routes/my-hotels";
import myCompanyRoutes from "./routes/my-companies";
import myInvestorRoutes from "./routes/my-investors";
// import hotelRoutes from "./routes/hotels";
import companyRoutes from "./routes/companies";
import investorRoutes from "./routes/investors";
// import bookingRoutes from "./routes/my-bookings";
import myInvestorBookings from "./routes/my-investors-bookings";
import myCompanyBookings from "./routes/my-companies-bookings";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
// app.use("/api/my-hotels", myHotelRoutes);
app.use("/api/my-companies", myCompanyRoutes);
app.use("/api/my-investors", myInvestorRoutes);
// app.use("/api/hotels", hotelRoutes);
app.use("/api/companies", companyRoutes);
app.use("/api/investors", investorRoutes);
// app.use("/api/my-bookings", bookingRoutes);
app.use("/api/my-investor-bookings", myInvestorBookings);
app.use("/api/my-company-bookings", myCompanyBookings);

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
});

app.listen(7000, () => {
  console.log("server running on localhost:7000");
});