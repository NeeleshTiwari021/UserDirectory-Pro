import React from "react";
import PropTypes from "prop-types";
import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = ({ size = "medium", message = "Loading...", color = "primary" }) => {
  const sizeClasses = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large,
  };

  const colorClasses = {
    primary: styles.primary,
    secondary: styles.secondary,
    dark: styles.dark,
    light: styles.light,
  };

  return (
    <div className={styles.spinnerContainer} role="status" aria-live="polite">
      <div 
        className={`${styles.spinner} ${sizeClasses[size]} ${colorClasses[color]}`}
        aria-hidden="true"
      ></div>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  message: PropTypes.string,
  color: PropTypes.oneOf(["primary", "secondary", "dark", "light"]),
};

LoadingSpinner.defaultProps = {
  size: "medium",
  message: "Loading...",
  color: "primary",
};

export default LoadingSpinner;