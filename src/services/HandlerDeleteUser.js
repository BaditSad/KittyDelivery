import apiGateway from "../../axios.config";

// Delete User (Soft Delete)
export const deleteUser = async (id, password) => {
  try {
    await apiGateway.put(`/mc_user/users/delete/${id}`, { password });
  } catch (error) {
    console.error("Erreur lors de la suppression de l'utilisateur:", error);
    throw error;
  }
};
