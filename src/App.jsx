import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchPanel from "./components/SearchPanel";
import StatusBar from "./components/StatusBar";
import ResultsHeader from "./components/ResultsHeader";
import ResultsGrid from "./components/ResultsGrid";
import Pagination from "./components/Pagination";

import { useLeads } from "./hooks/useLeads";

function App() {
  const {
    filtered,
    paginatedLeads,
    status,
    currentPage,
    setCurrentPage,
    searchLeads,
  } = useLeads();

  return (
    <>
      <Header />
      <Hero />

      <SearchPanel onSearch={searchLeads} />

      <StatusBar status={status} />

      <ResultsHeader count={filtered.length} data={filtered} />

      <ResultsGrid leads={paginatedLeads} />

      <Pagination
        total={filtered.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default App;
