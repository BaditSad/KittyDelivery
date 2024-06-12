import apiGateway from "../../axios.config";

export const getComponents = async () => {
  try {
    const response = await apiGateway.get(`/mc_component`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des composants:", error);
    throw error;
  }
};
