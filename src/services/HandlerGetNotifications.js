import apiGateway from "../../axios.config";

export const getNotifications = async (userId) => {
  try {
    const response = await apiGateway.get(`/mc_notification/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des notifications:", error);
    throw error;
  }
};
