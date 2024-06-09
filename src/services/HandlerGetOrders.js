import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const getAllOrders = async () => {
  try {
    const response = await axios.get(`${API_URL}/mc_order/orders`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération de order:", error);
    throw error;
  }
};

export const getRestaurantOrders = async (restaurantId) => {
  try {
    const response = await axios.get(
      `${API_URL}/mc_order/orders/restaurant/${restaurantId}`
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération de order:", error);
    throw error;
  }
};

export const getUserOrders = async (userId) => {
  try {
    const response = await axios.get(
      `${API_URL}/mc_order/user/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération de order:", error);
    throw error;
  }
};

export const getUserPendingOrders = async (userId) => {
  try {
    const response = await axios.get(
      `${API_URL}/mc_order/user/pending/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération de order:", error);
    throw error;
  }
};


export const getDeliverCityOrdersAvailable = async (deliverId, cityName) => {
  try {
    const response = await axios.get(
      `${API_URL}/mc_order/deliveries/pending/${deliverId}?city=${cityName}`
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération de order:", error);
    throw error;
  }
};

export const getDeliverTrackedOrders = async (deliverId) => {
  try {
    const response = await axios.get(
      `${API_URL}/mc_order/deliveries/tracker/${deliverId}`
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération de order:", error);
    throw error;
  }
};

export const getDeliverFinishedOrders = async (deliverId) => {
  try {
    const response = await axios.get(
      `${API_URL}/mc_order/deliveries/finished/${deliverId}`
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération de order:", error);
    throw error;
  }
};
