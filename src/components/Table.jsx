import React, { useState } from "react";

export default function Table({ records }) {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const totalPages = Math.ceil(records.length / rowsPerPage);
  const start = (currentPage - 1) * rowsPerPage;
  const paginated = records.slice(start, start + rowsPerPage);

  return (
    <div className="table-section">
      <table className="nmc-table">
        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>Year of Info</th>
            <th>Registration Number</th>
            <th>State Medical Council</th>
            <th>Name</th>
            <th>Father Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map((item, index) => (
            <tr key={index}>
              <td>{start + index + 1}</td>
              <td>{item.year}</td>
              <td>{item.registrationNumber}</td>
              <td>{item.stateCouncil}</td>
              <td>{item.name}</td>
              <td>{item.fatherName}</td>
              <td>
                <a href="#" className="view-link">
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
