import apiGateway from "../../axios.config";

export const getComponents = async (page, limit) => {
  try {
    const response = await apiGateway.get(`/mc_component`, {params: { page, limit }});
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des composants:", error);
    throw error;
  }
};