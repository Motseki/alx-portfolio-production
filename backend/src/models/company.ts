import mongoose from "mongoose";
import { CompanyType } from "../shared/types";

const companySchema = new mongoose.Schema<CompanyType>({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  imageUrls: [{ type: String, required: true }],
  lastUpdated: { type: Date, required: true },
});

//This code will create the table name Company in MongoDB with the above mentioned field names
const Company = mongoose.model<CompanyType>("Company", companySchema);
export default Company;