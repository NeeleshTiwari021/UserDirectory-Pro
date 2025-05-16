import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import Header from "../../components/Header/Header";
import SearchBox from "../../components/SearchBox/SearchBox";
import UserList from "../../components/UserList/UserList";
import Pagination from "../../components/Pagination/Pagination";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import styles from "./HomePage.module.css";

const HomePage = observer(({ userStore }) => {
  useEffect(() => {
    userStore.fetchUsers();
  }, [userStore]);

  return (
    <div className={styles.homePage}>
      <Header />
      <main className={styles.mainContent}>
        <SearchBox
          searchTerm={userStore.searchTerm}
          onSearchChange={(e) => userStore.setSearchTerm(e.target.value)}
        />
        
        {userStore.loading && <LoadingSpinner />}
        
        {userStore.error && (
          <ErrorMessage 
            message={userStore.error} 
            onRetry={() => userStore.fetchUsers()} 
          />
        )}
        
        {!userStore.loading && !userStore.error && (
          <>
            <UserList users={userStore.paginatedUsers} />
            <Pagination
              currentPage={userStore.currentPage}
              totalPages={userStore.totalPages}
              onPageChange={(page) => userStore.setPage(page)}
            />
          </>
        )}
      </main>
    </div>
  );
});

export default HomePage;