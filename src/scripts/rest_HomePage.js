import { getMenus } from "@/services/HandlerGetMenus";
import { deleteMenu } from "@/services/HandlerDeleteMenu";
import { postMenu } from "@/services/HandlerPostMenu";
import { updateMenu } from "@/services/HandlerPutMenu";

export default {
  name: "RestPage",
  data() {
    return {
      menuItems: [],
      selectedItem: null,
      editItem: null,
      selectedIndex: null,
      newMenu: {
        menu_name: "",
        menu_description: "",
        menu_price: 0,
        article_list: [""],
        Menu_image: null, // Ajout du champ Menu_image
      },
      isAddingMenu: false, // Propriété pour suivre l'état du formulaire d'ajout
    };
  },
  async mounted() {
    try {
      this.menuItems = (await getMenus()).menus;
      console.log("🚀 ~ mounted ~ this.menuItems:", this.menuItems)
    } catch (error) {
      console.error("Erreur lors de la récupération des menus:", error);
    }
  },
  methods: {
    async deleteMenu(item) {
      if (
        confirm(
          `Êtes-vous sûr de vouloir supprimer le menu: ${item.menu_name}?`
        )
      ) {
        try {
          await deleteMenu(item._id);
          this.menuItems = this.menuItems.filter(
            (menu) => menu._id !== item._id
          );
        } catch (error) {
          console.error("Erreur lors de la suppression du menu:", error);
        }
      }
    },
    handleFileUpload(event) {
      this.newMenu.Menu_image = event.target.files[0]; // Gestion de l'upload de fichier pour le nouveau menu
    },
    handleFileUploadEdit(event) {
      this.editItem.Menu_image = event.target.files[0]; // Gestion de l'upload de fichier pour l'édition de menu
    },
    async addMenu() {
      try {
        const formData = new FormData(); // Création d'un objet FormData pour les données du formulaire
        formData.append('restaurant_id',this.newMenu.restaurant_id); // Ajout de l'ID du restaurant
        formData.append('menu_name', this.newMenu.menu_name);
        formData.append('menu_description', this.newMenu.menu_description);
        formData.append('menu_price', this.newMenu.menu_price);
        formData.append('article_list',this.newMenu.article_list); // Conversion de la liste des articles en chaîne JSON
        formData.append('Menu_image', this.newMenu.Menu_image); // Ajout de l'image du menu
    
        const createdMenu = await postMenu(formData); // Envoi des données du formulaire
        this.menuItems.push(createdMenu);
        this.resetNewMenu();
        this.isAddingMenu = false; // Masquer le formulaire d'ajout après l'ajout
      } catch (error) {
        console.error("Erreur lors de la création du menu:", error);
      }
    },
    resetNewMenu() {
      this.newMenu = {
        menu_name: "",
        menu_description: "",
        menu_price: 0,
        article_list: [""],
        Menu_image: null, // Réinitialisation de l'image du menu
      };
    },
    selectMenuForEdit(item, index) {
      this.selectedItem = item;
      this.editItem = { ...item };
      this.selectedIndex = index;
    },
    async updateMenu() {
      try {
        const formData = new FormData(); // Création d'un objet FormData pour les données du formulaire
        formData.append('restaurant_id', this.editItem.restaurant_id);
        formData.append('menu_name', this.editItem.menu_name);
        formData.append('menu_description', this.editItem.menu_description);
        formData.append('menu_price', this.editItem.menu_price);
        formData.append('article_list', JSON.stringify(this.editItem.article_list)); // Conversion de la liste des articles en chaîne JSON
        if (this.editItem.Menu_image) { // Ajout de l'image si elle existe
          formData.append('Menu_image', this.editItem.Menu_image);
        }
    
        const updatedMenu = await updateMenu(this.editItem._id, formData); // Envoi des données du formulaire
        this.menuItems.splice(this.selectedIndex, 1, updatedMenu);
        this.selectedItem = null;
        this.editItem = null;
        this.selectedIndex = null;
      } catch (error) {
        console.error("Erreur lors de la modification du menu:", error);
      }
    },
    cancelEditMenu() {
      this.selectedItem = null;
      this.editItem = null;
      this.selectedIndex = null;
    },
    addArticle() {
      this.editItem.article_list.push("");
    },
    removeArticle(index) {
      this.editItem.article_list.splice(index, 1);
    },
    addNewArticle() {
      this.newMenu.article_list.push("");
    },
    removeNewArticle(index) {
      this.newMenu.article_list.splice(index, 1);
    },
    showAddMenuForm() {
      this.isAddingMenu = true;
    },
    cancelAddMenu() {
      this.isAddingMenu = false;
      this.resetNewMenu();
    },
  },
};
