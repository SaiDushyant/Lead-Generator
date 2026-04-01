import { useState } from "react";

const SearchPanel = ({ setLeads, setFiltered, setStatus, setCurrentPage }) => {
  const [bizType, setBizType] = useState("");
  const [location, setLocation] = useState("");

  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

  const handleSearch = async () => {
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
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(
          query,
        )}&key=${apiKey}`,
      );

      const data = await res.json();

      if (data.status !== "OK" && data.status !== "ZERO_RESULTS") {
        throw new Error(data.status);
      }

      const results = data.results || [];

      setLeads(results);
      setFiltered(results);
      setCurrentPage(0);
      setStatus("");
    } catch (err) {
      setStatus("❌ Error fetching data");
    }
  };

  return (
    <div className="search-panel">
      <input
        type="text"
        placeholder="Business Type"
        value={bizType}
        onChange={(e) => setBizType(e.target.value)}
      />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchPanel;
