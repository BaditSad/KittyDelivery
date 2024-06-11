<script src="../scripts/tech_HomePage.js"></script>
<style src="../stylesheets/tech_HomePage.css" scoped></style>

<template>
    <header>
      <img class="logo" src="../assets/logo.jpg" alt="Kitty Delivery logo" />
      <img class="title" src="../assets/title.png" alt="Kitty Delivery title" />
    </header>
    <div class="line1">
      <router-link to="/tech/logsdev">
        <div class="container-1">
          <h2>Logs de connexion</h2>
        </div>
      </router-link>
      <router-link to="/tech/logsstats">
        <div class="container-2">
          <h2>Statistiques de performances</h2>
        </div>
      </router-link>
    </div>
    <div class="line2">
      <router-link to="/tech/services">
        <div class="container-3">
          <h2>Déploiement de services</h2>
        </div>
      </router-link>
      <router-link to="/tech/resolve">
        <div class="container-4">
          <h2>Résolution des demandes entrantes</h2>
        </div>
      </router-link>
    </div>
  </template>