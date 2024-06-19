<script src="../scripts/rest_StatsPage.js"></script>
<style src="../stylesheets/rest_StatsPage.css" scoped></style>

<template>
  <header>
    <img class="title" src="../assets/title.png" alt="Kitty Delivery title" />
    <router-link to="/rest/home">
      <button class="profile_button">Retour</button>
    </router-link>
  </header>
  <div class="container">
    <div v-if="loading">Chargement en cours...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div class="stats-section">
        <h2>Statistiques journalières :</h2>
        <ul>
          <li v-for="(count, date) in dailyOrdersCount" :key="date">
            {{ date }}: {{ count }} commandes
          </li>
        </ul>
      </div>

      <div class="stats-section">
        <h2>Meilleurs menus :</h2>
        <ul>
          <li v-for="(item, index) in topMenuItems" :key="index">
            {{ item.name }} : {{ item.count }} commandes
          </li>
        </ul>
      </div>

      <div class="stats-section">
        <h2>Meilleurs articles :</h2>
        <ul>
          <li v-for="(item, index) in otherItems" :key="index">
            {{ item.name }} : {{ item.count }} commandes
          </li>
        </ul>
      </div>

      <div class="stats-section">
        <h2>Chiffre d'affaires total : {{ totalRevenue }}</h2>
      </div>

      <div class="stats-section">
        <h2>Historiques des commandes :</h2>
        <ul>
          <li v-for="(order, index) in orders" :key="index">
            <p>Livraison effectuée le : {{ order.delivery_date }}</p>
            <p>Commande : {{ order.order_status }}</p>
            <p>Adresse de livraison : {{ order.delivery_address }}</p>
            <p>Prix de la course : {{ order.order_total_amount }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="totalPages > 0" class="pagination">
      <button class="prevpage" @click="prevPage" :disabled="currentPage === 1">Précédent</button>
      <span>Page {{ currentPage }} de {{ totalPages }}</span>
      <button class="nextpage" @click="nextPage" :disabled="currentPage === totalPages">Suivant</button>
    </div>
  </div>
</template>
