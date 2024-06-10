<style src="../stylesheets/auth_LoginPage.css" scoped></style>

<template>
  <header>
    <img src="../assets/ban.png" />
  </header>
  <div class="container">
    <main>
      <form class="form">
        <h1>Connexion avec votre compte Kitty ! &#9995;</h1>
        <label class="text">
          <input v-model="email" class="text" type="text" placeholder="Adresse email" />
          </label>
          <label class="text">
          <input v-model="password" class="text" type="password" placeholder="Mot de passe" />
        </label>
        <button class="button-login" type="button" @click="login">
          <i class="icon ion-md-lock"></i> Connexion
        </button>
      </form>
      <div class="signup-container">
        <router-link to="/register">
          <p class="signup">S'inscrire</p>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script>
        
// eslint-disable-next-line
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
        
        
        
        
        </script>