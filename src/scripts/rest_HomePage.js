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
      currentPage: 1,
      itemsPerPage: 5,
      totalPages: 0,
    };
  },
  async mounted() {
    await this.fetchMenuItems();
  },
  computed: {
    paginatedMenuItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.menuItems.slice(start, end);
    },
  },
  methods: {
    async deleteMenu(item) {
      if (confirm(`Êtes-vous sûr de vouloir supprimer le menu: ${item.menu_name}?`)) {
        try {
          await deleteMenu(item._id);
          this.menuItems = this.menuItems.filter((menu) => menu._id !== item._id);
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
        formData.append('menu_name', this.newMenu.menu_name);
        formData.append('menu_description', this.newMenu.menu_description);
        formData.append('menu_price', this.newMenu.menu_price);
        formData.append('article_list', JSON.stringify(this.newMenu.article_list));
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
    async fetchMenuItems() {
      try {
        const response = await getMenus(1, this.currentPage, this.itemsPerPage);
        this.menuItems = response.menus;
        this.totalPages = response.totalPages;
      } catch (error) {
        console.error("Erreur lors de la récupération des composants:", error);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchMenuItems();
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchMenuItems();
      }
    },
  },
};

/* eslint-disable */
document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector(".referral button");
  const emailInput = document.querySelector(".referral .text");

  console.log("Button:", button);
  console.log("Email Input:", emailInput);

  if (button && emailInput) {
    const script = document.createElement("script");
    script.src = "https://cdn.emailjs.com/dist/email.min.js";
    script.onload = () => {
      emailjs.init("qW1Ea3nn6YSeahlbA");

      button.addEventListener("click", function() {
        const toEmail = emailInput.value;
        if (validateEmail(toEmail)) {
          sendReferralEmail(toEmail);
        } else {
          alert("Veuillez entrer une adresse email valide.");
        }
      });

      function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
      }

      function sendReferralEmail(toEmail) {
        emailjs.send("service_lgpn366", "template_8a8z0cg", {
          to_email: toEmail
        })
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          alert("Email de parrainage envoyé avec succès !");
        }, function(error) {
          console.log('FAILED...', error);
          alert("Erreur lors de l'envoi de l'email de parrainage.");
        });
      }
    };
    document.head.appendChild(script);
  } else {
    console.error("Button or Email Input not found in the DOM.");
  }
});
/* eslint-enable */