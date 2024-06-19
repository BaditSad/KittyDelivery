<style src="../stylesheets/auth_LoginPage.css" scoped></style>
<script src="../scripts/auth_LoginPage.js"></script>

<template>
  <header>
    <img src="../assets/ban.png" />
  </header>
  <div class="container">
    <main>
      <form class="form">
        <h1>Connexion à votre compte Kitty ! &#9995;</h1>
        <label class="text">
          <input
            v-model="email"
            class="text"
            type="text"
            placeholder="Adresse email"
          />
        </label>
        <label class="text">
          <input
            v-model="password"
            class="text"
            type="password"
            placeholder="Mot de passe"
          />
        </label>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
        <ul v-if="errors.length" class="error-list">
          <li v-for="error in errors" :key="error.msg" class="error-item">{{ error.msg }}</li>
        </ul>
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
