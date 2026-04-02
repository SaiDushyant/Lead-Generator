import { useState } from "react";

const SearchPanel = ({ onSearch }) => {
  const [bizType, setBizType] = useState("");
  const [location, setLocation] = useState("");

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

      <button onClick={() => onSearch(bizType, location)}>Search</button>
    </div>
  );
};

export default SearchPanel;
