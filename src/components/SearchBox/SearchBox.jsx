import React from "react";
import { FiSearch, FiX } from "react-icons/fi";
import styles from "./SearchBox.module.css";

const SearchBox = ({ searchTerm, onSearchChange, onClear }) => {
  const handleClear = () => {
    onSearchChange({ target: { value: "" } });
    onClear?.();
  };

  return (
    <div className={styles.searchBox}>
      <div className={styles.searchIcon}>
        <FiSearch size={20} />
      </div>
      <input
        type="text"
        placeholder="Search by name or email..."
        value={searchTerm}
        onChange={onSearchChange}
        className={styles.searchInput}
      />
      {searchTerm && (
        <button className={styles.clearButton} onClick={handleClear}>
          <FiX size={18} />
        </button>
      )}
    </div>
  );
};

export default SearchBox;