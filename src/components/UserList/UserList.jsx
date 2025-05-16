import React from "react";
import PropTypes from "prop-types";
import UserCard from "../UserCard/UserCard";
import styles from "./UserList.module.css";

const UserList = ({ users, isLoading }) => {
  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p>Loading users...</p>
      </div>
    );
  }

  if (!users || users.length === 0) {
    return (
      <div className={styles.emptyState}>
        <h3>No users found</h3>
        <p>Try adjusting your search criteria</p>
      </div>
    );
  }

  return (
    <section className={styles.userListContainer}>
      <div className={styles.userList}>
        {users.map((user) => (
          <UserCard key={user.login.uuid} user={user} />
        ))}
      </div>
    </section>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      login: PropTypes.shape({
        uuid: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
  isLoading: PropTypes.bool,
};

UserList.defaultProps = {
  isLoading: false,
};

export default UserList;