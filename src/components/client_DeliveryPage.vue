<script src="../scripts/client_DeliveryPage.js"></script>
<style src="../stylesheets/client_DeliveryPage.css" scoped></style>

<template>
  <header>
    <router-link to="/client">
      <button class="back">Retour</button>
    </router-link>
    <img class="title" src="../assets/title.png" alt="Kitty Delivery title" />
  </header>
  <div class="main-container">
    <section>
      <h2>Livraisons en cours</h2>
      <div v-if="pending.length">
        <div v-for="order in pending" :key="order._id">
          <p>{{ order.restaurant_name }} - {{ order.qr_code }}</p>
          <p>{{ order.order_items.join(", ") }}</p>
          <p>{{ order.order_total_amount }}</p>
          <p>{{ order.order_status }}</p>
          <p>{{ order.delivery_status }}</p>
        </div>
      </div>
      <div v-else>
        <p>No pending orders.</p>
      </div>
    </section>
    <section>
      <h2>Historiques des commandes</h2>
      <div v-if="orders.length">
        <div v-for="order in orders" :key="order._id">
          <p>
            Livré le {{ new Date(order.order_date).toLocaleString() }} -
            {{ order.restaurant_name }} - {{ order.order_total_amount }}
          </p>
        </div>
      </div>
      <div v-else>
        <p>No orders found.</p>
      </div>
    </section>
  </div>
</template>
