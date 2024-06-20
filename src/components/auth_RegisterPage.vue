<script src="../scripts/auth_RegisterPage.js"></script>
<style src="../stylesheets/auth_RegisterPage.css" scoped></style>

<template>
  <div>
    <header>
      <img src="../assets/ban.png" />
    </header>
    <div class="container">
      <main>
        <form class="form" @submit.prevent="register">
          <h1>Création de votre compte Kitty ! &#129395;</h1>
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
              v-model="username"
              class="text"
              type="text"
              placeholder="Nom d'utilisateur"
            />
          </label>
          <label class="text">
            <input
              v-model="address"
              class="text"
              type="text"
              placeholder="Adresse"
            />
          </label>
          <label class="text">
            <input
              v-model="phone"
              class="text"
              type="text"
              placeholder="Numéro de téléphone"
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
          <label class="text">
            <input
              v-model="passwordConfirm"
              class="text"
              type="password"
              placeholder="Vérification du mot de passe"
            />
          </label>
          <div class="radio-group">
            <label class="radio">
              <input v-model="role" type="radio" name="option" value="client" />
              Client
            </label>
            <label class="radio">
              <input
                v-model="role"
                type="radio"
                name="option"
                value="livreur"
              />
              Livreur
            </label>
            <label class="radio">
              <input
                v-model="role"
                type="radio"
                name="option"
                value="restaurateur"
              />
              Restaurateur
            </label>
          </div>
          <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
          <ul v-if="errors.length" class="error-list">
          <li v-for="error in errors" :key="error.msg" class="error-item">{{ error.msg }}</li>
        </ul>
        <label class="text" v-if="role === 'restaurateur'">
            <input
              v-model="name"
              class="text"
              type="text"
              placeholder="Nom du restaurant"
            />
          </label>
          <label class="text" v-if="role === 'restaurateur'">
            <input
              v-model="description"
              class="text"
              type="text"
              placeholder="Description"
            />
          </label>
          <label class="text" v-if="role === 'restaurateur'">
            <input
              v-model="rest_phone"
              class="text"
              type="text"
              placeholder="Téléphone du restaurant"
            />
          </label>
          <label class="text" v-if="role === 'restaurateur'">
            <input
              v-model="rest_address"
              class="text"
              type="text"
              placeholder="Adresse du restaurant"
            />
          </label>
          <button class="button-login" type="submit">
            <i class="icon ion-md-lock"></i> S'inscrire
          </button>
        </form>
        <router-link to="/">
          <p class="signup">Déjà un compte ?</p>
        </router-link>
      </main>
    </div>
  </div>
</template>
