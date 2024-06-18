import apiGateway from "../../axios.config";

export const postUserLogin = async (email, password) => {
  try {
    const response = await apiGateway.post(`/mc_auth/login`, {
      email: email,
      password: password,
    });
    localStorage.setItem("id", response.data.id);
    localStorage.setItem("address", response.data.address);
    localStorage.setItem("role", response.data.role);
    localStorage.setItem("accessToken", response.data.token);
    return response.data;
  } catch (error) {
    console.error("Error connection:", error);
    throw error;
  }
};

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
