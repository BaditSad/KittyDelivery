import apiGateway from "../../axios.config";

export const deleteArticle = async (articleId) => {
  try {
    const response = await apiGateway.delete(`/mc_article/${articleId}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la suppression de l'article:", error);
    throw error;
  }
};
