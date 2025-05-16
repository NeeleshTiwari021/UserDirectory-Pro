import React from "react";
import PropTypes from "prop-types";
import styles from "./Pagination.module.css";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 5,
}) => {
  const getPageNumbers = () => {
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const half = Math.floor(maxVisiblePages / 2);
    let start = currentPage - half;
    let end = currentPage + half;

    if (start < 1) {
      start = 1;
      end = maxVisiblePages;
    }

    if (end > totalPages) {
      end = totalPages;
      start = totalPages - maxVisiblePages + 1;
    }

    const pages = Array.from(
      { length: end - start + 1 },
      (_, i) => start + i
    );

    if (start > 1) {
      if (start > 2) {
        pages.unshift("...");
      }
      pages.unshift(1);
    }

    if (end < totalPages) {
      if (end < totalPages - 1) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };

  const handlePageChange = (page) => {
    if (page === "..." || page === currentPage) return;
    onPageChange(page);
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav className={styles.paginationContainer} aria-label="Pagination">
      <ul className={styles.pagination}>
        <li>
          <button
            className={styles.navButton}
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <ChevronLeftIcon />
          </button>
        </li>

        {pageNumbers.map((number, index) => (
          <li key={number === "..." ? `ellipsis-${index}` : number}>
            <button
              className={`${styles.pageButton} ${
                currentPage === number ? styles.active : ""
              } ${number === "..." ? styles.ellipsis : ""}`}
              onClick={() => handlePageChange(number)}
              disabled={number === "..."}
              aria-current={currentPage === number ? "page" : undefined}
              aria-label={
                number === "..."
                  ? "More pages"
                  : `Go to page ${number}`
              }
            >
              {number}
            </button>
          </li>
        ))}

        <li>
          <button
            className={styles.navButton}
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <ChevronRightIcon />
          </button>
        </li>
      </ul>
    </nav>
  );
};

// Optional: You can use actual icons or SVG components here
const ChevronLeftIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  maxVisiblePages: PropTypes.number,
};

export default Pagination;