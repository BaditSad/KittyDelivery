import apiGateway from "../../axios.config";
import { postNotificationComponent } from "./HandlerPostNotification";

export const postOrder = async (totalAmount, orderItems) => {
  try {
    const userId = 10;
    const userName = "David";
    const restaurantId = 1;
    const restaurantName = "Gourmet";
    const restaurantAddress = "6 Main Volley, Ville B";
    const deliveryAddress = "13 Main Street, Ville A";

    const response = await apiGateway.post(`/mc_order/orders`, {
      user_id: userId,
      user_name: userName,
      restaurant_id: restaurantId,
      restaurant_name: restaurantName,
      restaurant_address: restaurantAddress,
      order_total_amount: totalAmount,
      order_items: orderItems,
      delivery_address: deliveryAddress,
    });

    postNotificationComponent(restaurantId, "Commande", "Nouvelle commande");
    
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création de menu:", error);
    throw error;
  }
};
