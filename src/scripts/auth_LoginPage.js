import { login } from '@/services/authService.js';
export default {
  name: 'Auth_LoginPage',
   data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        // eslint-disable-next-line
        const user = await login(this.email, this.password
        );
        this.$router.push({ name: 'Home' });
      }
      catch (error) {
        console.error('Login error:', error.message);
      }
    },
  }
};