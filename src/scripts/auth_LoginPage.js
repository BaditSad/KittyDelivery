import { postUserLogin } from "@/services/HandlerPostAuth.js";

export default {
  name: "Auth_LoginPage",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
      errors : []
    };
  },
  methods: {
    async login() {
      this.errorMessage = "";
      this.errors = [];
      if (!this.email || !this.password) {
        this.errorMessage = "Email et mot de passe sont requis.";
        return;
      }
      try {
        const response = await postUserLogin(this.email, this.password);
        if (response.data) {
          this.$router.push({ name: "Home" });
        }
      } catch (error) {
        if (error.response && error.response.status === 400 && error.response.data.errors) {
          this.errors = error.response.data.errors;
        } else {
          this.errorMessage = error.response?.data?.message || "Erreur de connexion.";
        }
      }
    },
  },
};