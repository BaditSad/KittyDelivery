<script src="../scripts/comm_HomePage.js"></script>
<style src="../stylesheets/comm_HomePage.css" scoped></style>

<template>
  <header>
    <img class="logo" src="../assets/logo.jpg" alt="Kitty Delivery logo" />
    <img class="title" src="../assets/title.png" alt="Kitty Delivery title" />
  </header>
  <div class="line1">
      <router-link to="/comm/accounts">
        <div class="container-1">
          <h2>Gestion des comptes</h2>
        </div>
      </router-link>
      <router-link to="/comm/dashboard">
        <div class="container-2">
          <h2>Dashboard</h2>
        </div>
      </router-link>
    </div>
</template>