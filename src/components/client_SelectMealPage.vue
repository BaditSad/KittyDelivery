<script src="../scripts/client_SelectMealPage.js"></script>
<style src="../stylesheets/client_SelectMealPage.css" scoped></style>

<template>
  <div>
    <h2>Menus</h2>
    <div v-for="menu in menus" :key="menu._id">
      <h3>{{ menu.menu_name }}</h3>
      <p>Description: {{ menu.menu_description }}</p>
      <p>Prix: {{ menu.menu_price }}</p>
      <ul>
        <li v-for="article in menu.article_list" :key="article">
          {{ article }}
        </li>
      </ul>
      <button @click="addToCart(menu, 'menu')">Ajouter au panier</button>
    </div>

    <h2>Articles par type</h2>
    <div v-for="(articlesOfType, type) in articlesByType" :key="type">
      <h3>{{ type }}</h3>
      <div v-for="article in articlesOfType" :key="article._id">
        <h4>{{ article.article_name }}</h4>
        <p>Description: {{ article.article_description }}</p>
        <p>Prix: {{ article.article_price }}</p>
        <button @click="addToCart(article, 'article')">Ajouter au panier</button>
      </div>
    </div>

    <h2>Panier</h2>
    <div v-for="(item, index) in cart" :key="index">
      <h3 v-if="item.type === 'article'">{{ item.article_name }}</h3>
      <h3 v-else-if="item.type === 'menu'">{{ item.menu_name }}</h3>
      <p v-if="item.type === 'article'">Prix: {{ item.article_price }}</p>
      <p v-else-if="item.type === 'menu'">Prix: {{ item.menu_price }}</p>
      <button @click="removeFromCart(index)">Supprimer</button>
    </div>

    <h3>Prix total: {{ getTotalPrice() }}</h3>
    <button @click="createOrder">Commander</button>
  </div>
</template>
