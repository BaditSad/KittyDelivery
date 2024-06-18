import { getDeliverTrackedOrders } from "../services/HandlerGetOrders";
import { updateDeliveryStatus } from "../services/HandlerPutOrder";

export default {
  data() {
    return {
      orders: [],
    };
  },
  methods: {
    async orderFinished(orderId) {
      try {
        await updateDeliveryStatus(orderId, "finished");
      } catch (error) {
        console.error("Erreur lors de l'acceptation de la commande:", error);
      }
    },
    async refresh() {
      try {
        this.orders = await getDeliverTrackedOrders(1);
      } catch (error) {
        console.error("Erreur lors de la récupération des commandes:", error);
      }
    },
  },
  async created() {
    this.refresh();
  },
};
