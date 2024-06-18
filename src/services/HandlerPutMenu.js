import apiGateway from "../../axios.config";

export const updateMenu = async (menuId, data) => {
  try {
    const response = await apiGateway.put(`/mc_menu/${menuId}`, data);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la mise à jour de menu:", error);
    throw error;
  }
};
