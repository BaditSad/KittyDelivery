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
<<<<<<< HEAD
      role: "",
      errorMessage: "",
      errors: [],
=======
      role: "client",
      name: "", // restaurant_name
      description: "", // restaurant_description
      rest_phone: "", // restaurant_telephone
      rest_address: "", // restaurant_address
>>>>>>> 9a703386c8cf43e0879ee41c447f5fec27543ffd
    };
  },
  methods: {
    async register() {
      this.errorMessage = "";
      this.errors = [];
      if (!this.email || !this.username || !this.address || !this.phone || !this.password || !this.passwordConfirm ||  !this.role) {
        this.errorMessage = "Tous les champs sont requis.";
        return;
      }

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
        if (error.response && error.response.status === 400 && error.response.data.errors) {
          this.errors = error.response.data.errors;
        } else {
          this.errorMessage =
            error.response?.data?.message || "Erreur lors de la création du compte.";
        }
      }
    },
  },
};