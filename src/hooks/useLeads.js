import { useState } from "react";

const PAGE_SIZE = 12;

export const useLeads = () => {
  const [allLeads, setAllLeads] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [status, setStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

  const searchLeads = async (bizType, location) => {
    if (!bizType || !location) {
      setStatus("⚠️ Enter business type & location");
      return;
    }

    if (!apiKey) {
      setStatus("❌ API key missing in .env");
      return;
    }

    setStatus(`Searching ${bizType} in ${location}...`);

    try {
      const query = `${bizType} in ${location}`;

      const res = await fetch(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${apiKey}`,
      );

      const data = await res.json();

      if (data.status !== "OK" && data.status !== "ZERO_RESULTS") {
        throw new Error(data.status);
      }

      const results = data.results || [];

      setAllLeads(results);
      setFiltered(results);
      setCurrentPage(0);
      setStatus("");
    } catch (err) {
      setStatus("❌ Error fetching data");
    }
  };

  const applyFilters = (phone, website) => {
    const filteredData = allLeads.filter(
      (l) => (!phone || l.formatted_phone_number) && (!website || l.website),
    );

    setFiltered(filteredData);
    setCurrentPage(0);
  };

  const paginatedLeads = filtered.slice(
    currentPage * PAGE_SIZE,
    (currentPage + 1) * PAGE_SIZE,
  );

  return {
    allLeads,
    filtered,
    paginatedLeads,
    status,
    currentPage,
    setCurrentPage,
    searchLeads,
    applyFilters,
  };
};
