import apiGateway from "../../axios.config";

export const getArticles = async (id, page, limit) => {
  id = 1
  try {
    const response = await apiGateway.get(`/mc_article/${id}`, { params: { page, limit } });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des articles:", error);
    throw error;
  }
};