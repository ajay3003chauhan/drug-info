import express from "express";
import pool from "./database.js";

const router = express.Router();

//configuration table
router.get("/config", (req, res) => {
  res.json([
    { key: "id", label: "Id" },
    { key: "code", label: "Code" },
    { key: "name", label: "Name" },
    { key: "company", label: "Company" },
    { key: "launchDate", label: "Launch Date" },
  ]);
});

//Get all drugs (optionally filtered by company)
router.get("/drugs", async (req, res) => {
  try {
    const { company } = req.query;
    let query = "SELECT * FROM drugs";
    const params = [];

    if (company) {
      query += " WHERE company = $1";
      params.push(company);
    }

    query += " ORDER BY \"launchDate\" DESC";
    console.log('created query ',query)
    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
