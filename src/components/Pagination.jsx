const PAGE_SIZE = 12;

const Pagination = ({ total, currentPage, setCurrentPage }) => {
  const pages = Math.ceil(total / PAGE_SIZE);

  if (pages <= 1) return null;

  return (
    <div>
      <button
        disabled={currentPage === 0}
        onClick={() => setCurrentPage((p) => p - 1)}
      >
        Prev
      </button>

      <span>
        {currentPage + 1} / {pages}
      </span>

      <button
        disabled={currentPage === pages - 1}
        onClick={() => setCurrentPage((p) => p + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
