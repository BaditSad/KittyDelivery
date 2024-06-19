import { postUserLogin } from "@/services/HandlerPostAuth.js";
import { postLogComponent } from "@/services/HandlerPostLog";

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
          const logData = {
            log_date: new Date(),
            log_type: "connection",
            log_message: `user ${localStorage.setItem("id")} connected`,
          };

          postLogComponent(logData);

          this.$router.push({ name: "Home" });
        }
      } catch (error) {
        console.error("Login error:", error.message);
      }
    },
  },
};
