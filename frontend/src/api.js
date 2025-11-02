import axios from "axios";

const API_BASE = "http://localhost:4000/api";

export const fetchConfig = async () => {
  const res = await axios.get(`${API_BASE}/config`);
  return res.data;
};

export const fetchDrugs = async (company = "") => {
  const res = await axios.get(`${API_BASE}/drugs`, {
    params: company ? { company } : {},
  });
  return res.data;
};
