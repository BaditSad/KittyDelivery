import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const getOrders = async (restaurantId) => {
  try {
    const response = await axios.get(`${API_URL}/mc_order/${restaurantId}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération de order:", error);
    throw error;
  }
};
