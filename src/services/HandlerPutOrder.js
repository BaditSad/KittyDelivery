import apiGateway from "../../axios.config";

export const updateOrderStatus = async (orderId, newStatus) => {
  try {
    const response = await apiGateway.put(
      `/mc_order/orders/status/${orderId}`,
      {
        order_status: newStatus,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la commande:", error);
    throw error;
  }
};

export const updateDeliveryPersonAccept = async (orderId, newDeliverId) => {
  try {
    const response = await apiGateway.put(
      `/mc_order/deliveries/accept/${orderId}`,
      {
        delivery_person_accept_id: newDeliverId,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la commande:", error);
    throw error;
  }
};

export const updateDeliveryPersonRefuse = async (orderId, newDeliverId) => {
  try {
    const response = await apiGateway.put(
      `/mc_order/deliveries/refuse/${orderId}`,
      {
        delivery_person_refuse_id: newDeliverId,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la commande:", error);
    throw error;
  }
};

export const updateDeliveryStatus = async (orderId, newStatus) => {
  try {
    const response = await apiGateway.put(
      `/mc_order/deliveries/status/${orderId}`,
      {
        delivery_status: newStatus,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la commande:", error);
    throw error;
  }
};
