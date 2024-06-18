import {
  getUserOrders,
  getUserPendingOrders,
} from "@/services/HandlerGetOrders";

export default {
  data() {
    return {
      orders: [],
      pending: [],
      currentPage: 1,
      itemsPerPage: 2,
    };
  },
  async mounted() {
    try {
      const response = await getUserOrders(localStorage.getItem("id"),this.currentPage);
      this.orders = response.users;
      this.totalPages = response.totalPages;
      this.pending = await getUserPendingOrders(1);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  },
  computed: {
    paginatedOrders() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.orders.slice(start, end);
    }
  },
  methods: {},
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.fetchOrders();
    }
  },
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchOrders();
    }
  },
  async fetchOrders() {
    try {
      const response = await getUserOrders(this.currentPage);
      this.orders = response.users;
      this.totalPages = response.totalPages;
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  }
};
