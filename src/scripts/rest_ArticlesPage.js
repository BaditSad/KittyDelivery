import { getArticles } from "@/services/HandlerGetArticles";
import { deleteArticle } from "@/services/HandlerDeleteArticle";
import { postArticle } from "@/services/HandlerPostArticle";
import { updateArticle } from "@/services/HandlerPutArticle";

export default {
  name: "ArticlePage",
  data() {
    return {
      articlesItems: [],
      selectedItem: null,
      editItem: null,
      selectedIndex: null,
      newArticle: {
        restaurant_id: "",
        menu_id: "",
        article_name: "",
        description: "",
        price: 0,
        article_image: null,
      },
      isAddingArticle: false,
      currentPage: 1,
      itemsPerPage: 5,
      totalPages: 0
    };
  },
  async mounted() {
    try {
      this.articlesItems = await getArticles();
      await this.fetchArticles();
    } catch (error) {
      console.error("Erreur lors de la récupération des articles:", error);
    }
  },
  methods: {
    async fetchArticles() {
      try {
        const data = await getArticles(this.currentPage, this.limit);
        this.articlesItems = data.articles;
        this.totalPages = Math.ceil(data.total / this.limit);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles:", error);
      }
    },
    async prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        await this.fetchArticles();
      }
    },
    async nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        await this.fetchArticles();
      }
    },  
    async deleteItem(item) {
      if (
        confirm(
          `Êtes-vous sûr de vouloir supprimer l'article: ${item.article_name}?`
        )
      ) {
        try {
          await deleteArticle(item._id);
          this.articlesItems = this.articlesItems.filter(
            (article) => article._id !== item._id
          );
        } catch (error) {
          console.error("Erreur lors de la suppression de l'article:", error);
        }
      }
    },
    handleFileUpload(event) {
      this.newArticle.article_image = event.target.files[0];
    },
    handleFileUploadEdit(event) {
      this.editItem.article_image = event.target.files[0];
    },

    async addItem() {
      try {
        const formData = new FormData(); 
        formData.append('restaurant_id', this.newArticle.restaurant_id); 
        formData.append('article_type', this.newArticle.article_type);
        formData.append('article_name', this.newArticle.article_name);
        formData.append('article_description', this.newArticle.description);
        formData.append('article_price', this.newArticle.price);
        formData.append('article_image', this.newArticle.article_image); 
    
        const createdArticle = await postArticle(formData); 
        this.articlesItems.push(createdArticle);
        this.resetNewArticle();
        this.isAddingArticle = false; 
      } catch (error) {
        console.error("Erreur lors de la création de l'article:", error);
      }
    },

    resetNewArticle() {
      this.newArticle = {
        menu_id: "",
        article_name: "",
        description: "",
        price: 0,
        article_image: null,
      };
    },
    selectItemForEdit(item, index) {
      this.selectedItem = item;
      this.editItem = { ...item };
      this.selectedIndex = index;
    },
    async modifierItem() {
      try {
        const formData = new FormData(); 
        formData.append('restaurant_id', this.editItem.restaurant_id); 
        formData.append('article_name', this.editItem.article_name);
        formData.append('article_type', this.editItem.article_type);
        formData.append('article_description', this.editItem.description);
        formData.append('article_price', this.editItem.price);
        if (this.editItem.article_image) { 
          formData.append('article_image', this.editItem.article_image);
        }
    
        const updatedArticle = await updateArticle(this.editItem._id, formData); 
        this.articlesItems.splice(this.selectedIndex, 1, updatedArticle);
        this.selectedItem = null;
        this.editItem = null;
        this.selectedIndex = null;
      } catch (error) {
        console.error("Erreur lors de la modification de l'article:", error);
      }
    }, 
   
    cancelEdit() {
      this.selectedItem = null;
      this.editItem = null;
      this.selectedIndex = null;
    },
    showAddArticleForm() {
      this.isAddingArticle = true;
    },
    cancelAddArticle() {
      this.isAddingArticle = false;
      this.resetNewArticle();
    },
  },
};
