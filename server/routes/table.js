import express from "express";
import Team from "../models/Table.js";

const router = express.Router();

router.get("/league-table", async (req, res) => {
  try {
    const teams = await Team.find();
    res.status(200).json(teams);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
