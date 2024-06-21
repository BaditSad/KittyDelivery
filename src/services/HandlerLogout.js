import apiGateway from "../../axios.config";

export const logoutUser = async (id) => {
  try {
    await apiGateway.put(`/mc_user/users/logout/${id}`);
  } catch (error) {
    console.error("Erreur lors de la déconnexion de l'utilisateur:", error);
    throw error;
  }
};
