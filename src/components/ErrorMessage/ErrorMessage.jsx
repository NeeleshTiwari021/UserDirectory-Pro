import React from "react";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className={styles.errorMessage}>
      <p>{message}</p>
      <button onClick={onRetry} className={styles.retryButton}>
        Retry
      </button>
    </div>
  );
};

export default ErrorMessage;