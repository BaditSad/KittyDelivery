import Auth_RegisterPage from '@/components/auth_RegisterPage.vue';
import { register } from '@/services/authService.js';
export default {
  name: 'Auth_RegisterPage',
  components: {
    Auth_RegisterPage
  },
  data: () => ({
    email: "",
    password: "",
    role:"",
    passwordConfirm: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    address: "",
    username:''
  }),
  methods: {
    async register() {
      try {
        const userData = {
          email: this.email,
          confirmPassword: this.passwordConfirm,
          password: this.password,
          username: this.username,
          first_name: this.first_name,
          last_name: this.last_name,
          phone_number: this.phone_number,
          address: this.address,
          
        };
        // eslint-disable-next-line
        const user = await register(userData);
        this.$router.push({ name: 'Home' });
      }
      catch (error) {
        console.error('Registration error:', error.message);
      }
    },
  }
};

