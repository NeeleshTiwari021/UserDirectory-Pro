import axios from "axios";

const API_URL = "https://randomuser.me/api/?results=50";

export const fetchUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.results;
  } catch (error) {
    throw new Error("Failed to fetch users. Please try again later.");
  }
};