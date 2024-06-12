import express, { Request, Response } from "express";
import multer from "multer";
import cloudinary from "cloudinary";
import Investor from "../models/investor";
import verifyToken from "../middleware/auth";
import { body } from "express-validator";
import { InvestorType } from "../shared/types";

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
      const newInvestor: InvestorType = req.body;

      const imageUrls = await uploadImages(imageFiles);

      newInvestor.imageUrls = imageUrls;
      newInvestor.lastUpdated = new Date();
      newInvestor.userId = req.userId;

      const investor = new Investor(newInvestor);
      await investor.save();

      res.status(201).send(investor);
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

router.get("/", verifyToken, async (req: Request, res: Response) => {
  try {
    const investors = await Investor.find({ userId: req.userId });
    res.json(investors);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Investors" });
  }
});

router.get("/:id", verifyToken, async (req: Request, res: Response) => {
  const id = req.params.id.toString();
  try {
    const investor = await Investor.findOne({
      _id: id,
      userId: req.userId,
    });
    res.json(investor);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Investors" });
  }
});

router.put(
  "/:investorId",
  verifyToken,
  upload.array("imageFiles"),
  async (req: Request, res: Response) => {
    try {
      const updatedInvestor: InvestorType = req.body;
      updatedInvestor.lastUpdated = new Date();

      const investor = await Investor.findOneAndUpdate(
        {
          _id: req.params.investorId,
          userId: req.userId,
        },
        updatedInvestor,
        { new: true }
      );

      if (!investor) {
        return res.status(404).json({ message: "Investor not found" });
      }

      const files = req.files as Express.Multer.File[];
      const updatedImageUrls = await uploadImages(files);

      investor.imageUrls = [
        ...updatedImageUrls,
        ...(updatedInvestor.imageUrls || []),
      ];

      await investor.save();
      res.status(201).json(investor);
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