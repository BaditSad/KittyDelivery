<script src="../scripts/client_CheckOutPage.js"></script>
<style src="../stylesheets/client_CheckOutPage.css" scoped></style>

<template>
  <div class="checkout-page">
    <header>
      <router-link to="/client/selectmeal">
        <button class="back"> Retour </button>
        </router-link>
      <img class="title" src="../assets/title.png" alt="Kitty Delivery title" />
    </header>
    <main>
      <div class="order-summary">
        <div class="order-details">
          <p class="total">Montant total : 0 €</p>
        </div>
        <form @submit.prevent="submitOrder">
          <div class="form-group">
            <label for="cardNumber">Numéro de carte bancaire</label>
            <input type="text" id="cardNumber" v-model="cardNumber" required />
          </div>
          <div class="form-group">
            <label for="expirationDate">Date d'expiration</label>
            <input type="text" id="expirationDate" v-model="expirationDate" required />
          </div>
          <div class="form-group">
            <label for="cvv">Cryptogramme</label>
            <input type="text" id="cvv" v-model="cvv" required />
          </div>
          <div class="form-group">
            <label for="address">Adresse de livraison</label>
            <input type="text" id="address" v-model="address" required />
          </div>
          <button type="submit" class="pay-button">Payer</button>
        </form>
      </div>
    </main>
  </div>
</template>