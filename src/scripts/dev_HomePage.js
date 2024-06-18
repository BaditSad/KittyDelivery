import { getComponents } from "@/services/HandlerGetComponents";
import { postLogComponent } from "@/services/HandlerPostLog";

export default {
  data() {
    return {
      components: [],
      currentPage: 1,
      itemsPerPage: 5,
      totalPages: 0,
    };
  },
  async created() {
    await this.fetchComponents();
  },
  computed: {
    paginatedComponents() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.components.slice(start, end);
    },
  },
  methods: {
    async downloadComponent(component) {
      try {
        const blob = new Blob([component.component_template], {
          type: "text/html",
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = component.component_name;
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(url);
        document.body.removeChild(link);

        const logData = {
          log_date: new Date(),
          log_message: `Component ${component.component_name} downloaded`,
        };

        await postLogComponent(logData);
      } catch (error) {
        console.error("Erreur lors du téléchargement du composant:", error);
      }
    },
    async fetchComponents() {
      try {
        const response = await getComponents(this.currentPage, this.itemsPerPage);
        this.components = response.components;
        this.totalPages = response.totalPages;
      } catch (error) {
        console.error("Erreur lors de la récupération des composants:", error);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchComponents();
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchComponents();
      }
    },
  },
};