<script src="../scripts/rest_HomePage.js"></script>
<style src="../stylesheets/rest_HomePage.css" scoped></style>

<template>
  <header>
    <img class="logo" src="../assets/logo.jpg" alt="Kitty Delivery logo" />
    <img class="title" src="../assets/title.png" alt="Kitty Delivery title" />
    <router-link to="/rest/profile">
      <button class="profile_button">Profile</button>
    </router-link>
  </header>
  <div class="container">
    <div class="main">
      <div class="menu-card">
        <h1>Mes articles &#127828;</h1>
        <div class="card-items">
          <div
            class="card-item"
            v-for="(item, index) in menuItems"
            :key="index"
          >
            <p class="item">{{ item.menu_name }}</p>
            <p class="item">{{ item.menu_description }}</p>
            <ul>
              <p
                v-for="(article, articleIndex) in item.article_list"
                :key="articleIndex"
              >
                {{ article }}
              </p>
            </ul>
            <p class="item">Prix : {{ item.menu_price }} €</p>
            <div class="buttons">
              <button
                class="button-update"
                @click="selectMenuForEdit(item, index)"
              >
                Modifier
              </button>
              <button class="button-delete" @click="deleteMenu(item)">
                Supprimer
              </button>
            </div>
          </div>
        </div>
        <button class="add-button" @click="showAddArticleForm">
          Ajouter un menu
        </button>
        <router-link to="/rest/articles">
          <button class="add-button">Ajouter des articles</button>
        </router-link>
      </div>
      <div class="sidebar">
        <div class="button-container">
          <router-link to="/rest/stats">
            <button>Mes statistiques</button>
          </router-link>
          <router-link to="/rest/tracking">
            <button>Mes commandes</button>
          </router-link>
        </div>
        <div class="delivery-status">
          <h3>Suivi de livraisons</h3>
          <p class="delivery">Pas de livraison en cours</p>
          <div class="progress-bar">
            <div class="progress"></div>
          </div>
        </div>
        <div class="referral">
          <h3>Parrainage</h3>
          <label>
            <input
              class="text"
              type="email"
              placeholder="Adresse mail à parrainer"
            />
          </label>
          <button>Parrainer</button>
        </div>
      </div>
    </div>

    <!-- popup edit article -->
    <div v-if="selectedItem" class="edit-form">
      <h2>Modifier l'article</h2>
      <form @submit.prevent="modifierItem">
        <input
          type="text"
          v-model="editItem.article_name"
          placeholder="Nom de l'article"
          required
        />
        <textarea
          v-model="editItem.article_description"
          placeholder="Description"
          required
        ></textarea>
        <input
          type="number"
          v-model="editItem.article_price"
          placeholder="Prix"
          required
        />
        <button type="submit">Enregistrer</button>
        <button type="button" @click="cancelEdit">Annuler</button>
      </form>
    </div>

    <!-- popup add article -->
    <div v-if="isAddingArticle" class="add-form">
      <h2>Ajouter un nouvel article</h2>
      <form @submit.prevent="addItem">
        <input
          type="text"
          v-model="newArticle.article_name"
          placeholder="Nom de l'article"
          required
        />
        <input
          type="text"
          v-model="newArticle.article_type"
          placeholder="Type de l'article"
          required
        />
        <textarea
          v-model="newArticle.article_description"
          placeholder="Description"
          required
        ></textarea>
        <input
          type="number"
          v-model="newArticle.article_price"
          placeholder="Prix"
          required
        />
        <button type="submit">Ajouter</button>
        <button type="button" @click="cancelAddArticle">Annuler</button>
      </form>
    </div>
  </div>
</template>
