import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchPanel from "./components/SearchPanel";
import StatusBar from "./components/StatusBar";
import ResultsHeader from "./components/ResultsHeader";
import ResultsGrid from "./components/ResultsGrid";
import Pagination from "./components/Pagination";

function App() {
  const [leads, setLeads] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [status, setStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <Header />
      <Hero />

      <SearchPanel
        setLeads={setLeads}
        setFiltered={setFiltered}
        setStatus={setStatus}
        setCurrentPage={setCurrentPage}
      />

      <StatusBar status={status} />

      <ResultsHeader count={filtered.length} />

      <ResultsGrid leads={filtered} currentPage={currentPage} />

      <Pagination
        total={filtered.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default App;
