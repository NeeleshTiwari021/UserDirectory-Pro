import { makeAutoObservable, runInAction } from "mobx";
import { fetchUsers } from "../utils/api";

class UserStore {
  users = [];
  filteredUsers = [];
  loading = false;
  error = null;
  searchTerm = "";
  currentPage = 1;
  usersPerPage = 10;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchUsers() {
    this.loading = true;
    this.error = null;

    try {
      const data = await fetchUsers();
      runInAction(() => {
        this.users = data;
        this.filteredUsers = data;
        this.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.error = error.message;
        this.loading = false;
      });
    }
  }

  setSearchTerm(term) {
    this.searchTerm = term;
    this.currentPage = 1;
    this.filterUsers();
  }

  filterUsers() {
    if (!this.searchTerm) {
      this.filteredUsers = this.users;
      return;
    }

    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter(
      (user) =>
        user.name.first.toLowerCase().includes(term) ||
        user.name.last.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
    );
  }

  setPage(page) {
    this.currentPage = page;
  }

  get paginatedUsers() {
    const startIndex = (this.currentPage - 1) * this.usersPerPage;
    return this.filteredUsers.slice(startIndex, startIndex + this.usersPerPage);
  }

  get totalPages() {
    return Math.ceil(this.filteredUsers.length / this.usersPerPage);
  }
}

export default UserStore;