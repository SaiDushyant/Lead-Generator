import LeadCard from "./LeadCard";

const PAGE_SIZE = 12;

const ResultsGrid = ({ leads, currentPage }) => {
  const start = currentPage * PAGE_SIZE;
  const pageData = leads.slice(start, start + PAGE_SIZE);

  return (
    <div className="results-grid">
      {pageData.map((lead, i) => (
        <LeadCard key={i} lead={lead} />
      ))}
    </div>
  );
};

export default ResultsGrid;
