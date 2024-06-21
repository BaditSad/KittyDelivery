import apiGateway from "../../axios.config";

export const getAllRestaurants = async () => {
  try {
    const response = await apiGateway.get('/mc_restaurant/rest');
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des restaurants:", error);
    throw error;
  }
};
