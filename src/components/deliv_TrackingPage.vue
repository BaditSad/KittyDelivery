<script src="../scripts/deliv_TrackingPage.js"></script>
<style src="../stylesheets/deliv_TrackingPage.css" scoped></style>

<template>
  <div>
    <header>
      <img class="logo" src="../assets/logo.jpg" alt="Kitty Delivery logo" />
      <img class="title" src="../assets/title.png" alt="Kitty Delivery title" />
      <router-link to="/profile">
        <button class="profile_button">Profile</button>
      </router-link>
    </header>

    <section>
      <h2>Mes livraisons en cours :</h2>
      <ul>
        <li v-for="order in orders" :key="order._id">
          <h2>Parcours de la livraison {{ order.qr_code }}</h2>
          <p>Départ : {{ order.restaurant_address }}</p>
          <p>Heure de départ : {{ order.order_date }}</p>
          <p>Arrivée : {{ order.delivery_address }}</p>
          <p>Commande : {{ order.order_items }}</p>
          <p>Prix de la livraison : {{ order.order_total_amount }}</p>
          <button @click="orderFinished(order._id)">Livraison termninée</button>
        </li>
      </ul>
    </section>
  </div>
</template>
