import apiGateway from "../../axios.config";

export const postNotificationComponent = async (restaurantId, type, message) => {
  try {
    const response = await apiGateway.post(`/mc_notification`, {
      user_id: restaurantId,
      notification_type: type,
      notification_message: message,
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création de l'article:", error);
    throw error;
  }
};
