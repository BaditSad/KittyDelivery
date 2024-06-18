<script src="../scripts/rest_ArticlesPage.js"></script>
<style src="../stylesheets/rest_ArticlesPage.css" scoped></style>

<template>
  <header>
    <img class="title" src="../assets/title.png" alt="Kitty Delivery title" />
    <router-link to="/rest/home">
      <button class="profile_button">Retour</button>
    </router-link>
  </header>
  <div class="container">
    <div class="main">
      <div class="menu-card">
        <h1>Ma carte &#127839;</h1>
        <div class="card-items">
          <div
            class="card-item"
            v-for="(item, index) in articlesItems"
            :key="index"
          >
            <img :src="'http://localhost:3000/api/mc_article'+ item.article_image" classe="article_image" alt="article image" />
            <p class="item">{{ item.article_name }}</p>
            <p class="item">{{ item.article_description }}</p>
            <p class="item">Prix : {{ item.article_price }} €</p>
            <div class="buttons">
              <button
                class="button-update"
                @click="selectItemForEdit(item, index)"
              >
                Modifier
              </button>
              <button class="button-delete" @click="deleteItem(item)">
                Supprimer
              </button>
            </div>
          </div>
        </div>
        <button class="add-button" @click="showAddArticleForm">
          Ajouter un article
        </button>
      </div>
    </div>

    <!-- popup edit article -->
    <div v-if="selectedItem" class="edit-form">
      <h2>Modifier l'article</h2>
      <form @submit.prevent="modifierItem" >
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
        <input type="file" class="article_image" @change="handleFileUploadEdit" />
        <button type="submit">Enregistrer</button>
        <button type="button" @click="cancelEdit">Annuler</button>
      </form>
    </div>

    <!-- popup add article -->
    <div v-if="isAddingArticle" class="add-form">
      <h2>Ajouter un nouvel article</h2>
      <form @submit.prevent="addItem">
        <input class="popup-input"
          type="text"
          v-model="newArticle.article_name"
          placeholder="Nom de l'article"
          required
        />
        <input class="popup-input"
          type="text"
          v-model="newArticle.article_type"
          placeholder="Type de l'article"
          required
        />
        <textarea class="textarea"
          v-model="newArticle.description"
          placeholder="Description"
          required
        ></textarea>
        <input class="popup-input"
          type="number"
          v-model="newArticle.price"
          placeholder="Prix"
          required
        />
        <input class="add-file" type="file" @change="handleFileUpload" />
        <div class="button-add-menu">
        <button class="button-update" type="submit">Ajouter</button>
        <button class="button-delete" type="button" @click="cancelAddArticle">Annuler</button>
        </div>
      </form>
    </div>
  </div>
</template>
