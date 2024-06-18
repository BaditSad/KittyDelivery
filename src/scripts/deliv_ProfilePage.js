import { getDeliverFinishedOrders } from "../services/HandlerGetOrders";

export default {
  data() {
    return {
      orders: [],
    };
  },
  methods: {
    async refresh() {
      try {
        this.orders = await getDeliverFinishedOrders(1);
      } catch (error) {
        console.error("Erreur lors de la récupération des commandes:", error);
      }
    },
  },
  async created() {
    this.refresh();
  },
};