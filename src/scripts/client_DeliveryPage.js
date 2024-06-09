import {
  getUserOrders,
  getUserPendingOrders,
} from "@/services/HandlerGetOrders";

export default {
  data() {
    return {
      orders: [],
      pending: [],
    };
  },
  async mounted() {
    try {
      this.orders = await getUserOrders(1);
      this.pending = await getUserPendingOrders(1);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  },
  methods: {},
};
