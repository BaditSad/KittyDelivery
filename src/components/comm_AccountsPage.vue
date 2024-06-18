<script src="../scripts/comm_AccountsPage.js"></script>
<style src="../stylesheets/comm_AccountsPage.css" scoped></style>

<template>
  <header>
    <router-link to="/comm">
      <button class="back">Retour</button>
    </router-link>
    <img class="title" src="../assets/title.png" alt="Kitty Delivery title" />
  </header>
  <div class="container">
    <div class="main">
      <div class="list-user">
        <h1>Recherche le compte client :</h1>
        <div class="list">
          <div class="input-tableau-container">
            <label class="text">
              <input v-model="user" class="text" type="text" placeholder="Rechercher un client" />
            </label>
            <div class="tableau">
              Utilisateur 1 | Order ID | Order Date | Delivery Person | Total Amount
            </div>
          </div>
        </div>
        <div class="all-button">
          <button class="update-button">Modifier</button>
          <button class="stop-button">Suspendre</button>
          <button class="delete-button">Supprimer</button>
        </div>
      </div>
      <div class="sidebar">
        <h1>Tableau de bord :</h1>
        <div class="delivery-stat">
          <h3>Statut de commande :</h3>
          <p class="stat">Statut de la commande</p>
        </div>
        <div class="delivery-stat">
          <h3>Statut de livraison :</h3>
          <p class="stat">Statut de la commande</p>
        </div>
        <div class="delivery-stat">
          <h3>Chiffre d'affaires transactionnel global :</h3>
          <p class="stat">Montant €</p>
        </div>
      </div>
    </div>
  </div>
</template>
