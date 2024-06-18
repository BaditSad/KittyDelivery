import apiGateway from "../../axios.config";

export const postMenu = async (data) => {
  try {
    const response = await apiGateway.post(`/mc_menu`, data);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création de menu:", error);
    throw error;
  }
};
