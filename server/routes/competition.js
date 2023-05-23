import express from "express";
import KPI from "../models/Competition.js";

const router = express.Router();

router.get("/competition", async (req, res) => {
  try {
    const competitions = await KPI.find();
    res.status(200).json(competitions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
