import axios from "axios";

const API_URL = "http://localhost:8000/api/auth/"; 

// Login function
export const loginUser = async (username, password) => {
  try {
    console.log("API URL:", API_URL);
    console.log("Payload:", { username, password });

    const response = await axios.post(`${API_URL}login`, { username, password });

    console.log("API Response:", response.data);

    return response.data;

  } catch (error) {
    console.error("Error Details:", error.response || error.message);
    throw error;
  }
};

// Register function
export const registerUser = async (username, password) => {
  try {

    console.log("API URL:", API_URL);
    console.log("Payload:", { username, password });

    const response = await axios.post(`${API_URL}register`, {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    console.error("Error registering user", error);
    throw error;
  }
};

// Logout function
export const logoutUser = () => {
  // Remove user token from localStorage
  localStorage.removeItem("userToken");
};
