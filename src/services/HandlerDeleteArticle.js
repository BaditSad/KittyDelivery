import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const deleteArticle = async (articleId) => {
  try {
    const response = await axios.delete(`${API_URL}/mc_article/${articleId}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la suppression de l'article:", error);
    throw error;
  }
};
