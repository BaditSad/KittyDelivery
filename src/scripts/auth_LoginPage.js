import { postUserLogin } from "@/services/HandlerPostAuth.js";

export default {
  name: "Auth_LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await postUserLogin(this.email, this.password);
        if (response.data) {
          this.$router.push({ name: "Home" });
        }
      } catch (error) {
        console.error("Login error:", error.message);
      }
    },
  },
};
