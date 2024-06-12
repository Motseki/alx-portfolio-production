import express, { Request, Response } from "express";
import Investor from "../models/investor"
import { InvestorSearchResponse } from "../shared/types";
import { param, validationResult } from "express-validator";

const router = express.Router();

router.get("/search", async (req: Request, res: Response) => {
  try {
    const query = constructSearchQuery(req.query);

    let sortOptions = {};
    
    const pageSize = 5;
    const pageNumber = parseInt(
      req.query.page ? req.query.page.toString() : "1"
    );
    const skip = (pageNumber - 1) * pageSize;

    const investors = await Investor.find(query)
      .sort(sortOptions)
      .skip(skip)
      .limit(pageSize);

    const total = await Investor.countDocuments(query);

    const response: InvestorSearchResponse = {
      data: investors,
      pagination: {
        total,
        page: pageNumber,
        pages: Math.ceil(total / pageSize),
      },
    };

    res.json(response);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const investors = await Investor.find().sort("-lastUpdated");
    res.json(investors);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error fetching Investors" });
  }
});

router.get(
  "/:id",
  [param("id").notEmpty().withMessage("Investor ID is required")],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const id = req.params.id.toString();

    try {
      const investor = await Investor.findById(id);
      res.json(investor);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error fetching Investor" });
    }
  }
);

const constructSearchQuery = (queryParams: any) => {
  let constructedQuery: any = {};

  if (queryParams.destination) {
    constructedQuery.$or = [
      { city: new RegExp(queryParams.destination, "i") },
      { country: new RegExp(queryParams.destination, "i") },
    ];
  }

  if (queryParams.types) {
    constructedQuery.type = {
      $in: Array.isArray(queryParams.types)
        ? queryParams.types
        : [queryParams.types],
    };
  }

  return constructedQuery;
};

export default router;