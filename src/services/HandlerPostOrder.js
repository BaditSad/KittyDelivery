import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const postOrder = async (totalAmount, orderItems) => {
  try {
    const userId = 10;
    const userName = "David";
    const restaurantId = 1;
    const restaurantName = "Gourmet";
    const restaurantAddress = "6 Main Volley, Ville B";
    const deliveryAddress = "13 Main Street, Ville A";

    const response = await axios.post(`${API_URL}/mc_order/orders`, {
      user_id: userId,
      user_name: userName,
      restaurant_id: restaurantId,
      restaurant_name: restaurantName,
      restaurant_address: restaurantAddress,
      order_total_amount: totalAmount,
      order_items: orderItems,
      delivery_address: deliveryAddress,
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création de menu:", error);
    throw error;
  }
};
