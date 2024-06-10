<script src="../scripts/deliv_HomePage.js"></script>
<style src="../stylesheets/deliv_HomePage.css" scoped></style>

<template>
  <div>
    <header>
      <img class="logo" src="../assets/logo.jpg" alt="Kitty Delivery logo" />
      <img class="title" src="../assets/title.png" alt="Kitty Delivery title" />
      <router-link to="/deliv/profile">
        <button class="profile_button">Profile</button>
      </router-link>
    </header>

    <section>
      <h2>Mes livraisons :</h2>
      <ul>
        <li v-for="order in orders" :key="order._id">
          <p>
            Livraison de {{ order.restaurant_address }} à
            {{ order.delivery_address }}
          </p>
          <p>Commande : {{ order.order_items }}</p>
          <p>Prix de la livraison : {{ order.order_total_amount }}</p>
          <button @click="acceptOrder(order._id)">Accept</button>
          <button @click="refuseOrder(order._id)">Refuse</button>
        </li>
      </ul>
    </section>
  </div>
</template>
