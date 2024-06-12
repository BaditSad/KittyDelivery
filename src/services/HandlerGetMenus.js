import apiGateway from "../../axios.config";

export const getMenus = async (restaurantId) => {
  restaurantId = 1;
  try {
    const response = await apiGateway.get(`/mc_menu/${restaurantId}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération de menu:", error);
    throw error;
  }
};
