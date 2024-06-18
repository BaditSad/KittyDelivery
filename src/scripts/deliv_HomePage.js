import { getDeliverCityOrdersAvailable } from "../services/HandlerGetOrders";
import {
  updateDeliveryPersonAccept,
  updateDeliveryPersonRefuse,
} from "../services/HandlerPutOrder";

export default {
  data() {
    return {
      orders: [],
    };
  },
  methods: {
    async acceptOrder(orderId) {
      try {
        await updateDeliveryPersonAccept(orderId, 1);
        this.refresh();
      } catch (error) {
        console.error("Erreur lors de l'acceptation de la commande:", error);
      }
    },
    async refuseOrder(orderId) {
      try {
        await updateDeliveryPersonRefuse(orderId, 1);
        this.refresh();
      } catch (error) {
        console.error("Erreur lors du refus de la commande:", error);
      }
    },
    async refresh() {
      try {
        this.orders = await getDeliverCityOrdersAvailable(1, "Ville B");
      } catch (error) {
        console.error("Erreur lors de la récupération des commandes:", error);
      }
    },
  },
  async created() {
    this.refresh();
  },
};
