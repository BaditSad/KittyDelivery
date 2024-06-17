<script src="../scripts/client_HomePage.js"></script>
<style src="../stylesheets/client_HomePage.css" scoped></style>

<template>
  <div>
    <header>
      <img class="logo" src="../assets/logo.jpg" alt="Kitty Delivery logo" />
      <img class="title" src="../assets/title.png" alt="Kitty Delivery title" />
      <router-link to="/client/profile">
        <button class="profile_button">Profile</button>
      </router-link>
    </header>
    <div class="container">
      <div class="main">
        <div class="rest-card">
          <h1>Restaurant à proximité &#127828;</h1>
          <div class="card-rests">
            <router-link to="/client/selectmeal">
              <div class="card-rest"> Restaurant </div>
            </router-link>
          </div>
        </div>
        <div class="sidebar">
          <router-link to="/client/delivery">
            <button class="commands">Mes commandes</button>
          </router-link>
          <div class="referral">
            <h3>Parrainage</h3>
            <label>
              <input class="text" type="email" placeholder="Adresse mail à parrainer" />
            </label>
            <button>Parrainer</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>