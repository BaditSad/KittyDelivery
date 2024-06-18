import apiGateway from "../../axios.config";

export const getArticles = async (restaurantId) => {
  restaurantId = 1;
  try {
    const response = await apiGateway.get(`/mc_article/${restaurantId}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des articles:", error);
    throw error;
  }
};
