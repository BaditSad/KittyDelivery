<script src="../scripts/comm_DashboardPage.js"></script>
<style src="../stylesheets/comm_DashboardPage.css" scoped></style>

<template>
  <header>
    <router-link to="/comm">
      <button class="profile_button">Retour</button>
    </router-link>
    <img class="title" src="../assets/title.png" alt="Kitty Delivery title" />
  </header>
  <div class="order-container">
    <h1>Suivi des Commandes</h1>
    <div v-if="loading" class="loading">Chargement...</div>
    <div v-if="!loading && !orders">Aucune commande trouvée.</div>
    <div>
      <label for="userIdInput">ID Utilisateur:</label>
      <input
        v-model="userId"
        id="userIdInput"
        type="text"
        placeholder="Entrez l'ID utilisateur"
      />
      <button @click="refreshOrders">Rechercher</button>
    </div>

    <div>
      <h2>Commandes</h2>
      <div v-if="orders">
        <ul>
          <li v-for="order in orders" :key="order._id">
            Commande #{{ order._id }} - {{ order.order_total_amount }}€ - Items:
            {{ order.order_items.join(", ") }}
            <div>
              Status:
              <span v-if="order.order_status === '0'">En attente</span>
              <span v-else-if="order.order_status === 'accepté'">Acceptée</span>
              <span v-else-if="order.order_status === 'refusé'">Refusée</span>
            </div>
            <div v-if="order.order_status === 'accepté'">
              <div v-if="order.delivery_person_id === 0">Livreur non assigné.</div>
              <div v-else>
                Livreur #{{ order.delivery_person_id }} est en train de livrer.
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div v-else>
        <p>Aucune commande trouvée.</p>
      </div>
    </div>
  </div>
</template>
