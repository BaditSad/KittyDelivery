<script src="../scripts/client_SelectMealPage.js"></script>
<style src="../stylesheets/client_SelectMealPage.css" scoped></style>

<template>
  <header>
    <img class="title" src="../assets/title.png" alt="Kitty Delivery title" />
    <router-link to="/client">
      <button class="back">Retour</button>
    </router-link>
  </header>
  <div class="container">
    <div class="meal-selection">
      <h2>Sélection du repas</h2>
      <div class="articles" v-for="menu in menus" :key="menu._id">
        <h3>{{ menu.menu_name }}</h3>
        <p>Description: {{ menu.menu_description }}</p>
        <p>Prix: {{ menu.menu_price }} €</p>
        <ul>
          <li v-for="article in menu.article_list" :key="article">
            {{ article }}
          </li>
        </ul>
        <button class="button-add" @click="addToCart(menu, 'menu')">Ajouter au panier</button>
      </div>
      <h2>Articles par type</h2>
      <div v-for="(articlesOfType, type) in articlesByType" :key="type">
        <h3>{{ type }}</h3>
        <div class="articles" v-for="article in articlesOfType" :key="article._id">
          <h4>{{ article.article_name }}</h4>
          <p>Description: {{ article.article_description }}</p>
          <p>Prix: {{ article.article_price }} €</p>
          <button class="button-add" @click="addToCart(article, 'article')">Ajouter au panier</button>
        </div>
      </div>
    </div>
    <div class="cart">
      <h2>Panier</h2>
      <div class="articles" v-for="(item, index) in cart" :key="index">
        <h3 v-if="item.type === 'article'">{{ item.article_name }}</h3>
        <h3 v-else-if="item.type === 'menu'">{{ item.menu_name }}</h3>
        <p v-if="item.type === 'article'">Prix: {{ item.article_price }} €</p>
        <p v-else-if="item.type === 'menu'">Prix: {{ item.menu_price }} €</p>
        <button class="button-delete" @click="removeFromCart(index)">Supprimer</button>
      </div>
      <div class="cart-total">
        <h3>Prix total: {{ getTotalPrice() }} €</h3>
      </div>
      <router-link to="/client/checkout">
        <button class="button-add" @click="createOrder">Commander</button>
      </router-link>
    </div>
  </div>
</template>
