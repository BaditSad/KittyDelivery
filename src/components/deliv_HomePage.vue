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
    <div>

      <section>
        <h2>Livraisons disponibles :</h2>
        <ul class="deliv">
          <li class="li" v-for="order in orders" :key="order._id">
            <p>
              Livraison de {{ order.restaurant_address }} à
              {{ order.delivery_address }}
            </p>
            <p>Commande : {{ order.order_items }}</p>
            <p>Prix de la livraison : {{ order.order_total_amount }}</p>
            <router-link to="/deliv/tracking">
              <button class="accept" @click="acceptOrder(order._id)">Accepter</button>
            </router-link>
            <button class="refuse" @click="refuseOrder(order._id)">Refuser</button>
          </li>
        </ul>
      </section>
      <section>
        <div class="referral">
          <h3>Parrainage</h3>
          <label>
            <input class="text" type="email" placeholder="Adresse mail à parrainer" />
          </label>
          <button>Parrainer</button>
        </div>
      </section>
    </div>
  </div>
</template>
