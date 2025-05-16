import React from "react";
import PropTypes from "prop-types";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaUserAlt,
  FaBirthdayCake,
  FaLinkedin,
  FaGithub,
  FaTwitter
} from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
import styles from "./UserCard.module.css";

const UserCard = ({ user }) => {
  const formattedDate = new Date(user.dob.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const age = new Date().getFullYear() - new Date(user.dob.date).getFullYear();

  // Generate social links (mock data for demonstration)
  const socialLinks = [
    { icon: <FaLinkedin />, url: "https://linkedin.com" },
    { icon: <FaGithub />, url: "https://github.com" },
    { icon: <FaTwitter />, url: "https://twitter.com" },
    { icon: <IoMdGlobe />, url: "https://personalwebsite.com" },
  ];

  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.avatarContainer}>
          <img
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
            className={styles.avatar}
          />
          
        </div>

        <div className={styles.userMeta}>
          <h1 className={styles.userName}>{`${user.name.first} ${user.name.last}`}</h1>
           </div>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.userDetails}>
          

          <div className={styles.detailRow}>
            <FaBirthdayCake className={styles.detailIcon} />
            <div>
              <span className={styles.detailLabel}>Birthday</span>
              <span className={styles.detailValue}>
                {formattedDate} ({age} years)
              </span>
            </div>
          </div>

          <div className={styles.detailRow}>
            <FaEnvelope className={styles.detailIcon} />
            <div>
              <span className={styles.detailLabel}>Email</span>
              <span className={styles.detailValue}>
                <a href={`mailto:${user.email}`}>{user.email}</a>
              </span>
            </div>
          </div>

          <div className={styles.detailRow}>
            <FaPhone className={styles.detailIcon} />
            <div>
              <span className={styles.detailLabel}>Phone</span>
              <span className={styles.detailValue}>
                <a href={`tel:${user.phone}`}>{user.phone}</a>
              </span>
            </div>
          </div>
        </div>
      </div>

    </article>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }).isRequired,
    login: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
    gender: PropTypes.string.isRequired,
    dob: PropTypes.shape({
      date: PropTypes.string.isRequired,
    }).isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }).isRequired,
    picture: PropTypes.shape({
      large: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default UserCard;