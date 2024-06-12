import { getUserOrders } from "../services/HandlerGetOrders";

export default {
  name: "comm-dashboard",
  data() {
    return {
      orders: [],
      userId: "",
      loading: false,
      error: null,
    };
  },
  methods: {
    async refreshOrders() {
      this.loading = true;
      try {
        const orders = await getUserOrders(this.userId);
        this.orders = orders;
      } catch (err) {
        this.error = "Erreur lors de la récupération des commandes.";
      } finally {
        this.loading = false;
      }
    },
  },
};
