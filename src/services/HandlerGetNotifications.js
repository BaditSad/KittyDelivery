
import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const getNotifications = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/mc_notification/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des notifications:", error);
    throw error;
  }
};