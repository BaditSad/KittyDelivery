import { postUserRegister } from "@/services/HandlerPostAuth";

export default {
  data() {
    return {
      email: "",
      username: "",
      address: "",
      phone: "",
      password: "",
      passwordConfirm: "",
      role: "client",
      name: "", // restaurant_name
      description: "", // restaurant_description
      rest_phone: "", // restaurant_telephone
      rest_address: "", // restaurant_address
    };
  },
  methods: {
    async register() {
      if (this.password !== this.passwordConfirm) {
        alert("Les mots de passe ne correspondent pas !");
        return;
      }
      try {
        const response = await postUserRegister(
          this.email,
          this.username,
          this.address,
          this.phone,
          this.password,
          this.role,
          this.name,
          this.rest_address,
          this.description,
          this.rest_phone
        );
        if (response.status === 201) {
          alert(response.data.message);
          this.$router.push("/");
        }
      } catch (error) {
        alert(
          error.response.data.message || "Erreur lors de la création du compte."
        );
      }
    },
  },
};
