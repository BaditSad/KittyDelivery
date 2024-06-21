import apiGateway from "../../axios.config";

export const updateUser = async (id, data) => {
  try {
    const response = await apiGateway.put(`/mc_user/users/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'utilisateur:", error);
    throw error;
  }
};
