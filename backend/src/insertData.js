import fs from "fs";
import pool from "./database.js";

const insertDataInTable = async () => {
  try {
    const readData = JSON.parse(fs.readFileSync("./sample-data/drugs.json", "utf-8"));
    console.log(`${readData.length} drugs data to be loaded`);

    await pool.query("DELETE FROM drugs");

    const insertQuery = `
      INSERT INTO drugs (code, "genericName", "brandName", company, "launchDate")
      VALUES ($1, $2, $3, $4, $5)
    `;

    for (const d of readData) {
      await pool.query(insertQuery, [
        d.code,
        d.genericName,
        d.brandName,
        d.company,
        d.launchDate,
      ]);
    }

    console.log(`${readData.length} drugs data successfully loaded in database`);
    process.exit(0);
  } catch (err) {
    console.error("Error importing data:", err);
    process.exit(1);
  }
};

insertDataInTable();
