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
          <div class="card-item" v-for="(item, index) in menuItems" :key="index">
            {{ console.log("Menu Item:", item, index) }}
            <img
              :src="'http://localhost:3008' + item.Menu_image"
              class="Menu_image"
              alt="menu image"
            />
            <p class="item">{{ item.menu_name }}</p>
            <p class="item">{{ item.menu_description }}</p>
            <p class="item">Prix : {{ item.menu_price }} €</p>
            <ul>
              <li
                v-for="(article, articleIndex) in item.article_list"
                :key="articleIndex"
              >
                {{ article }}
              </li>
            </ul>
            <div class="buttons">
              <button class="button-update" @click="selectMenuForEdit(item, index)">
                Modifier
              </button>
              <button class="button-delete" @click="deleteMenu(item)">Supprimer</button>
            </div>
          </div>
        </div>
        <button class="add-button" @click="showAddMenuForm">Ajouter un menu</button>
        <router-link to="/rest/articles">
          <button class="add-button">Ajouter des articles</button>
        </router-link>
        <div v-if="totalPages > 0" class="pagination">
          <button class="pag-btn" @click="prevPage" :disabled="currentPage === 1">
            &lt;
          </button>
          <span class="text-pag"> {{ currentPage }} / {{ totalPages }} </span>
          <button
            class="pag-btn"
            @click="nextPage"
            :disabled="currentPage === totalPages"
          >
            &gt;
          </button>
        </div>
      </div>
      <div class="sidebar">
        <div class="button-container">
          <router-link to="/rest/stats">
            <button class="add-button">Mes statistiques</button>
          </router-link>
          <router-link to="/rest/tracking">
            <button class="add-button">Mes commandes</button>
          </router-link>
        </div>
        <div class="delivery-status">
          <h3>Suivis de livraisons</h3>
          <p class="delivery">Pas de livraison en cours</p>
          <div class="progress-bar">
            <div class="progress"></div>
          </div>
        </div>
        <div class="referral">
          <h3>Parrainage</h3>
          <label>
            <input class="text" type="email" placeholder="Adresse mail à parrainer" />
          </label>
          <button>Parrainer</button>
        </div>
      </div>
    </div>
    <div v-if="selectedItem" class="edit-form">
      <h2>Modifier le menu</h2>
      <form @submit.prevent="updateMenu">
        <input
          type="text"
          v-model="editItem.menu_name"
          placeholder="Nom du menu"
          required
        />
        <textarea
          v-model="editItem.menu_description"
          placeholder="Description"
          required
        ></textarea>
        <div v-for="(article, articleIndex) in editItem.article_list" :key="articleIndex">
          <input
            type="text"
            v-model="editItem.article_list[articleIndex]"
            :placeholder="'Article ' + (articleIndex + 1)"
            required
          />
          <button type="button" @click="removeArticle(articleIndex)">Supprimer</button>
        </div>
        <button type="button" @click="addArticle">Ajouter un article</button>
        <input type="number" v-model="editItem.menu_price" placeholder="Prix" required />
        <input type="file" @change="handleFileUploadEdit" />
        <!-- Champ de téléchargement pour modifier l'image du menu -->
        <button type="submit">Enregistrer</button>
        <button type="button" @click="cancelEditMenu">Annuler</button>
      </form>
    </div>

    <!-- popup add menu -->
    <div v-if="isAddingMenu" class="add-form">
      <h2>Ajouter un nouveau menu</h2>
      <form @submit.prevent="addMenu">
        <input
          class="popup-input"
          type="text"
          v-model="newMenu.menu_name"
          placeholder="Nom du menu"
          required
        />
        <textarea
          class="textarea"
          v-model="newMenu.menu_description"
          placeholder="Description"
          required
        ></textarea>
        <div v-for="(article, articleIndex) in newMenu.article_list" :key="articleIndex">
          <input
            class="popup-input"
            type="text"
            v-model="newMenu.article_list[articleIndex]"
            :placeholder="'Article ' + (articleIndex + 1)"
            required
          />
          <button
            class="button-delete"
            type="button"
            @click="removeNewArticle(articleIndex)"
          >
            Supprimer
          </button>
        </div>
        <button class="button-update" type="button" @click="addNewArticle">
          Ajouter un article
        </button>
        <input
          class="popup-input"
          type="number"
          v-model="newMenu.menu_price"
          placeholder="Prix"
          required
        />
        <input class="add-file" type="file" @change="handleFileUpload" />
        <div class="button-add-menu">
          <button class="button-update" type="submit">Ajouter</button>
          <button class="button-delete" type="button" @click="cancelAddMenu">
            Annuler
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
