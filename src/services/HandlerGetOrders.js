import apiGateway from "../../axios.config";

export const getAllOrders = async () => {
  try {
    const response = await apiGateway.get(`/mc_order/orders`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération de order:", error);
    throw error;
  }
};

export const getRestaurantOrders = async (restaurantId, page, limit) => {
  try {
    const response = await apiGateway.get(`/mc_order/restaurant/${restaurantId}`, { params: { page, limit }});
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des commandes:", error);
    throw error;
  }
};

export const getUserOrders = async (userId, page, limit) => {
  try {
    const response = await apiGateway.get(`/mc_order/user/${userId}`, {params: { page, limit }});
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération de order:", error);
    throw error;
  }
};

export const getUserPendingOrders = async (userId, page, limit) => {
  try {
    const response = await apiGateway.get(`/mc_order/user/pending/${userId}`, {params: { page, limit }});
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération de order:", error);
    throw error;
  }
};

export const getDeliverCityOrdersAvailable = async (deliverId, cityName) => {
  try {
    const response = await apiGateway.get(
      `/mc_order/deliveries/pending/${deliverId}?city=${cityName}`
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération de order:", error);
    throw error;
  }
};

export const getDeliverTrackedOrders = async (deliverId) => {
  try {
    const response = await apiGateway.get(
      `/mc_order/deliveries/tracker/${deliverId}`
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération de order:", error);
    throw error;
  }
};

export const getDeliverFinishedOrders = async (deliverId) => {
  try {
    const response = await apiGateway.get(
      `/mc_order/deliveries/finished/${deliverId}`
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération de order:", error);
    throw error;
  }
};
