import apiGateway from "../../axios.config";

export const getArticles = async (page, limit) => {
  try {
    const response = await apiGateway.get(`/mc_article`, { params: { page, limit } });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des articles:", error);
    throw error;
  }
};