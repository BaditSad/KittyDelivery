import apiGateway from "../../axios.config";

export const deleteMenu = async (menuId) => {
  try {
    const response = await apiGateway.delete(`/mc_menu/${menuId}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la suppression de menu:", error);
    throw error;
  }
};
