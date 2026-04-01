const ResultsHeader = ({ count }) => {
  if (!count) return null;

  return <div className="results-header">Found {count} leads</div>;
};

export default ResultsHeader;
