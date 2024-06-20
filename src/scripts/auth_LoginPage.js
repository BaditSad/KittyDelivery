import { postUserLogin } from "@/services/HandlerPostAuth.js";
import { postLogComponent } from "@/services/HandlerPostLog";

export default {
  name: "Auth_LoginPage",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
      errors: []
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

        if (response) {
          const logData = {
            log_date: new Date(),
            log_type: "connection",
            log_message: `user ${localStorage.getItem("id")} connected`,
          };

          postLogComponent(logData);

          const userRole = localStorage.getItem("role");

          if (userRole === "client") {
            this.$router.push({ path: "/client" });
          } else if (userRole === "rest") {
            this.$router.push({ path: "/rest" });
          } else if (userRole === "livreur") {
            this.$router.push({ path: "/livreur" });
          } else {
            this.$router.push({ name: "Home" });
          }
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
