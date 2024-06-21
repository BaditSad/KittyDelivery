<script src="../scripts/client_ProfilePage.js"></script>
<style src="../stylesheets/client_ProfilePage.css" scoped></style>

<template>
  <header>
    <img class="title" src="../assets/title.png" alt="Kitty Delivery title" />
    <router-link to="/client">
      <button class="back"> Retour </button>
    </router-link>
  </header>
  <div class="container_profile">
    <form class="form">
      <h1>Votre profil Kitty</h1>
      <label class="text">
        <input class="text" type="text" placeholder="Nom" v-model="user.user_name" />
      </label>
      <label class="text">
        <input disabled class="text" type="text" placeholder="Adresse email" v-model="user.user_email" />
      </label>
      <label class="text">
        <input disabled class="text" type="text" placeholder="Adresse postale" v-model="user.user_address" />
      </label>
      <label class="text">
        <input class="text" type="password" placeholder="Ancien mot de passe" v-model="oldPassword" />
      </label>
      <label class="text">
        <input class="text" type="password" placeholder="Nouveau mot de passe" v-model="newPassword" />
      </label>
      <label class="text">
        <input class="text" type="password" placeholder="Confirmer nouveau mot de passe" v-model="confirmNewPassword" />
      </label>
      <div class="button-container">
        <button class="button-update" type="button" @click="updateProfile">
          <i class="icon ion-md-lock"></i> Mettre à jour
        </button>
        <button class="button-deco" type="button" @click="logout">
          <i class="icon ion-md-lock"></i> Deconnexion
        </button>
        <button class="button-delete" type="button" @click="deleteAccount">
          <i class="icon ion-md-lock"></i> Supprimer compte
        </button>
      </div>
    </form>
  </div>
</template>
