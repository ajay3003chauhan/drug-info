import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TableContainer,
} from "@mui/material";

const DrugTable = ({ data, onCompanyClick }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Code</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Launch Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((drug, index) => (
            <TableRow key={drug._id || index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{drug.code}</TableCell>
              <TableCell>
                {drug.genericName} ({drug.brandName})
              </TableCell>
              <TableCell
                sx={{ cursor: "pointer", color: "gray" }}
                onClick={() => onCompanyClick(drug.company)}
              >
                {drug.company}
              </TableCell>
              <TableCell>
                {new Date(drug.launchDate).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DrugTable;
