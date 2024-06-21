import apiGateway from "../../axios.config";

export const getUser = async (id) => {
  try {
    const response = await apiGateway.get(`/mc_user/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération de l'utilisateur:", error);
    throw error;
  }
};
