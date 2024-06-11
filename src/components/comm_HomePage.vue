<script src="../scripts/comm_HomePage.js"></script>
<style src="../stylesheets/comm_HomePage.css" scoped></style>

<template>
  <header>
    <img class="logo" src="../assets/logo.jpg" alt="Kitty Delivery logo" />
    <img class="title" src="../assets/title.png" alt="Kitty Delivery title" />
  </header>
  <div class="container">
    <div class="main">
      <div class="list-user">
        <h1>Recherche le compte client :</h1>
        <div class="list">
          <label class="text">
          <input v-model="user" class="text" type="text" placeholder="Rechercher un client" />
          </label>
          <div class="tableau">
          Utilisateur 1 | Order ID | Order Date | Delivery Person | Total Amount
          </div>
        </div>
          <div class="all-button" >
          <button class="add-button">
            Modifier
          </button>
          <button class="add-button">
            Suspendre
          </button>
          <button class="add-button">
            Supprimer
          </button>
        </div>
      </div>
      <div class="sidebar">
        <h1>Tableau de bord :</h1>
        <div class="delivery-stat">
          <h3>Statut de commande</h3>
          <p class="stat">Statut de la commande</p>
        </div>
        <div class="delivery-stat">
          <h3>Statut de livraison</h3>
          <p class="stat">Statut de la commande</p>
        </div>
        <div class="delivery-stat">
          <h3>Chiffre d'affaires transactionnel global</h3>
          <p class="stat">Montant €</p>
        </div>
      </div>
    </div>
  </div>
</template>