import LeadCard from "./LeadCard";

const ResultsGrid = ({ leads }) => {
  return (
    <div className="results-grid">
      {leads.map((lead, i) => (
        <LeadCard key={i} lead={lead} />
      ))}
    </div>
  );
};

export default ResultsGrid;
