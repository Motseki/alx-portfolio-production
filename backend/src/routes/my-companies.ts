import express, { Request, Response } from "express";
import multer from "multer";
import cloudinary from "cloudinary";
import Company from "../models/company";
import verifyToken from "../middleware/auth";
import { body } from "express-validator";
import { CompanyType } from "../shared/types";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});

router.post(
  "/",
  verifyToken,
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("city").notEmpty().withMessage("City is required"),
    body("country").notEmpty().withMessage("Country is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("type").notEmpty().withMessage("Company type is required"),
  ],
  upload.array("imageFiles", 6),
  async (req: Request, res: Response) => {
    try {
      const imageFiles = req.files as Express.Multer.File[];
      const newCompany: CompanyType = req.body;

      const imageUrls = await uploadImages(imageFiles);

      newCompany.imageUrls = imageUrls;
      newCompany.lastUpdated = new Date();
      newCompany.userId = req.userId;

      const company = new Company(newCompany);
      await company.save();

      res.status(201).send(company);
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

router.get("/", verifyToken, async (req: Request, res: Response) => {
  try {
    const companies = await Company.find({ userId: req.userId });
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: "Error fetching companies" });
  }
});

router.get("/:id", verifyToken, async (req: Request, res: Response) => {
  const id = req.params.id.toString();
  try {
    const company = await Company.findOne({
      _id: id,
      userId: req.userId,
    });
    res.json(company);
  } catch (error) {
    res.status(500).json({ message: "Error fetching companies" });
  }
});

router.put(
  "/:companyId",
  verifyToken,
  upload.array("imageFiles"),
  async (req: Request, res: Response) => {
    try {
      const updatedCompany: CompanyType = req.body;
      updatedCompany.lastUpdated = new Date();

      const company = await Company.findOneAndUpdate(
        {
          _id: req.params.companyId,
          userId: req.userId,
        },
        updatedCompany,
        { new: true }
      );

      if (!company) {
        return res.status(404).json({ message: "Company not found" });
      }

      const files = req.files as Express.Multer.File[];
      const updatedImageUrls = await uploadImages(files);

      company.imageUrls = [
        ...updatedImageUrls,
        ...(updatedCompany.imageUrls || []),
      ];

      await company.save();
      res.status(201).json(company);
    } catch (error) {
      res.status(500).json({ message: "Something went throw" });
    }
  }
);

async function uploadImages(imageFiles: Express.Multer.File[]) {
  const uploadPromises = imageFiles.map(async (image) => {
    const b64 = Buffer.from(image.buffer).toString("base64");
    let dataURI = "data:" + image.mimetype + ";base64," + b64;
    const res = await cloudinary.v2.uploader.upload(dataURI);
    return res.url;
  });

  const imageUrls = await Promise.all(uploadPromises);
  return imageUrls;
}

export default router;