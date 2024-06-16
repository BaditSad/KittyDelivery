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
        Menu_image: null, 
      },
      isAddingMenu: false, 
    };
  },
  async mounted() {
    try {
      this.menuItems = (await getMenus()).menus;
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
      this.newMenu.Menu_image = event.target.files[0]; 
    },
    handleFileUploadEdit(event) {
      this.editItem.Menu_image = event.target.files[0]; 
    },
    async addMenu() {
      try {
        const formData = new FormData(); 
        formData.append('restaurant_id',this.newMenu.restaurant_id); 
        formData.append('menu_name', this.newMenu.menu_name);
        formData.append('menu_description', this.newMenu.menu_description);
        formData.append('menu_price', this.newMenu.menu_price);
        formData.append('article_list',this.newMenu.article_list); 
        formData.append('Menu_image', this.newMenu.Menu_image); 
    
        const createdMenu = await postMenu(formData); 
        this.menuItems.push(createdMenu);
        this.resetNewMenu();
        this.isAddingMenu = false; 
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
        Menu_image: null, 
      };
    },
    selectMenuForEdit(item, index) {
      this.selectedItem = item;
      this.editItem = { ...item };
      this.selectedIndex = index;
    },
    async updateMenu() {
      try {
        const formData = new FormData();
        formData.append('restaurant_id', this.editItem.restaurant_id);
        formData.append('menu_name', this.editItem.menu_name);
        formData.append('menu_description', this.editItem.menu_description);
        formData.append('menu_price', this.editItem.menu_price);
        formData.append('article_list', JSON.stringify(this.editItem.article_list)); 
        if (this.editItem.Menu_image) { 
          formData.append('Menu_image', this.editItem.Menu_image);
        }
    
        const updatedMenu = await updateMenu(this.editItem._id, formData); 
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
