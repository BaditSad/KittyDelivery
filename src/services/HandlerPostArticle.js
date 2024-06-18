import apiGateway from "../../axios.config";

export const postArticle = async (data) => {
  try {
    const response = await apiGateway.post(`/mc_article`, data);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création de l'article:", error);
    throw error;
  }
};
