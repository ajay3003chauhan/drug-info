import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import DrugTable from "./components/DrugTable";
import CompanyFilter from "./components/CompanyFilter";
import { fetchConfig, fetchDrugs } from "./api";

const App = () => {
  const [config, setConfig] = useState([]);
  const [drugs, setDrugs] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState("");

  useEffect(() => {
    const load = async () => {
      const cfg = await fetchConfig();
      setConfig(cfg);
      const data = await fetchDrugs();
      setDrugs(data);
      const uniqueCompanies = [...new Set(data.map((d) => d.company))];
      setCompanies(uniqueCompanies);
    };
    load();
  }, []);

  const handleFilter = async (company) => {
    setSelectedCompany(company);
    const data = await fetchDrugs(company);
    setDrugs(data);
  };

  const handleCompanyClick = (company) => {
    handleFilter(company);
  };

  return (
    <Container sx={{ backgroundColor: "#f7f8f3ff", boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)", }}>
      <Typography variant="h3" align="center" gutterBottom>
        Drug Information
      </Typography>
      <CompanyFilter
        companies={companies}
        selectedCompany={selectedCompany}
        onChange={handleFilter}
      />
      <DrugTable data={drugs} onCompanyClick={handleCompanyClick} />
    </Container>
  );
};

export default App;
