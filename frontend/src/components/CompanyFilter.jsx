import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const CompanyFilter = ({ companies, selectedCompany, onChange }) => {
  return (
    <FormControl fullWidth sx={{ mb: 2 }}>
      <InputLabel>Filter by Company</InputLabel>
      <Select
        value={selectedCompany}
        label="Filter by Company"
        onChange={(e) => onChange(e.target.value)}
      >
        <MenuItem value="">All</MenuItem>
        {companies.map((company, index) => (
          <MenuItem key={index} value={company}>
            {company}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CompanyFilter;
