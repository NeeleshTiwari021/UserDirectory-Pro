import React from 'react';
import PropTypes from 'prop-types';
import { FiAlertTriangle, FiRefreshCw } from 'react-icons/fi';
import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ message, onRetry, className }) => {
  return (
    <div className={`${styles.errorContainer} ${className}`} role="alert">
      <div className={styles.errorContent}>
        <FiAlertTriangle className={styles.errorIcon} aria-hidden="true" />
        <div className={styles.errorDetails}>
          <h3 className={styles.errorTitle}>Something went wrong</h3>
          <p className={styles.errorMessage}>{message}</p>
        </div>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className={styles.retryButton}
          aria-label="Retry"
        >
          <FiRefreshCw className={styles.buttonIcon} />
          Try Again
        </button>
      )}
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  onRetry: PropTypes.func,
  className: PropTypes.string,
};

ErrorMessage.defaultProps = {
  onRetry: null,
  className: '',
};

export default ErrorMessage;