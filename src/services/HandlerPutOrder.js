import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const updateOrderStatus = async (orderId, newStatus) => {
  try {
    const response = await axios.put(`${API_URL}/mc_order/${orderId}`, {
      order_status: newStatus,
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la commande:", error);
    throw error;
  }
};
