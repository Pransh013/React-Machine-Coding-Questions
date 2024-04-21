import React from "react";

const GoToPage = ({ pageNo, totalPages = 10, setPageNo }) => {
  return (
    <div className="flex gap-3 items-center">
      <button
        className="w-14 py-1 border border-black rounded-md disabled:opacity-25 disabled:cursor-not-allowed"
        disabled={pageNo === 1}
        onClick={() => setPageNo((prev) => prev - 1)}
      >
        Prev
      </button>
      <div className="flex gap-1.5 items-center">
        {Array(totalPages)
          .fill()
          .map((_, idx) => (
            <Button key={idx} onClick={() => setPageNo(idx + 1)}>
              {idx + 1}
            </Button>
          ))}
      </div>
      <button
        className="w-14 py-1 border border-black rounded-md disabled:opacity-25 disabled:cursor-not-allowed"
        disabled={pageNo === totalPages}
        onClick={() => setPageNo((prev) => prev + 1)}
      >
        Next
      </button>
    </div>
  );
};

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-9 py-0.5 border border-black rounded-sm text-lg font-semibold"
    >
      {children}
    </button>
  );
};

export default GoToPage;
