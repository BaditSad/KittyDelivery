import apiGateway from "../../axios.config";

export const postUserRegister = async (
  email,
  username,
  address,
  phone,
  password,
  role
) => {
  try {
    const response = await apiGateway.post("/mc_auth/register", {
      email: email,
      name: username,
      address: address,
      phone: phone,
      password: password,
      role: role,
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur:", error);
    throw error;
  }
};
