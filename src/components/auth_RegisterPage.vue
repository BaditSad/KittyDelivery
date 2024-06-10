<script src="../scripts/auth_RegisterPage.js"></script>
<style src="../stylesheets/auth_RegisterPage.css" scoped></style>

<template>
  <header>
    <img src="../assets/ban.png" />
  </header>
  <div class="container">
    <main>
      <form class="form">
        <h1>Création de votre compte Kitty ! &#129395;</h1>
        <label class="text">
          <input v-model="email" class="text" type="text" placeholder="Adresse email" />
        </label>
        <label class="text">
          <input v-model="username" class="text" type="text" placeholder="user" />
        </label>
        <label class="text">
          <input v-model="address" class="text" type="text" placeholder="address" />
        </label>
        <label class="text">
          <input v-model="phone_number" class="text" type="text" placeholder="phone" />
        </label>
        <label class="text">
          <input v-model="password" class="text" type="password" placeholder="Mot de passe" />
        </label>
        <label class="text">
          <input v-model="passwordConfirm" class="text" type="password" placeholder="Vérification du mot de passe" />
        </label>
        <div class="radio-group">
          <label class="radio">
            <input v-model="role" type="radio" name="option" value="1" /> Client
          </label>
          <label class="radio">
            <input v-model="role" type="radio" name="option" value="2" /> Livreur
          </label>
          <label class="radio">
            <input v-model="role" type="radio" name="option" value="3" /> Restaurateur
          </label>
        </div>
        <button class="button-login" type="button" @click="register">
          <i class="icon ion-md-lock"></i> S'inscrire
        </button>
      </form>
      <router-link to="/">
        <p class="signup">Déjà un compte ?</p>
      </router-link>
    </main>
  </div>
</template>
