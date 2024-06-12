import mongoose from "mongoose";
import { InvestorType } from "../shared/types";

const investorSchema = new mongoose.Schema<InvestorType>({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  imageUrls: [{ type: String, required: true }],
  lastUpdated: { type: Date, required: true },
});

//This code will create the table name Investor in MongoDB with the above mentioned field names
const Investor = mongoose.model<InvestorType>("Investor", investorSchema);
export default Investor;