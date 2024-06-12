import apiGateway from "../../axios.config";

export const postLogComponent = async (data) => {
  try {
    const response = await apiGateway.post(`/mc_log`, data);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création de l'article:", error);
    throw error;
  }
};
