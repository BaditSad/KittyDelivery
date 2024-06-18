import apiGateway from "../../axios.config";

export const updateArticle = async (menuId, data) => {
  try {
    const response = await apiGateway.put(`/mc_article/${menuId}`, data);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la modification de l'article:", error);
    throw error;
  }
};
