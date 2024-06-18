import { getUserOrders, getUserPendingOrders } from "@/services/HandlerGetOrders";

export default {
  data() {
    return {
      orders: [],
      pending: [],
      currentPage: 1,
      currentPendingPage: 1,
      itemsPerPage: 1,
      totalPages: 0,
      totalPendingPages: 0
    };
  },
  async mounted() {
    await this.fetchOrders();
    await this.fetchPendingOrders();
  },
  computed: {
    paginatedOrders() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.orders.slice(start, end);
    },
    paginatedPendingOrders() {
      const start = (this.currentPendingPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.pending.slice(start, end);
    }
  },
  methods: {
    async fetchOrders() {
      try {
        const response = await getUserOrders(localStorage.getItem("id"), this.currentPage, this.itemsPerPage);
        this.orders = response.users;
        this.totalPages = response.totalPages;
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    },
    async fetchPendingOrders() {
      try {
        const response = await getUserPendingOrders(localStorage.getItem("id"), this.currentPendingPage, this.itemsPerPage);
        this.pending = response.users;
        this.totalPendingPages = response.totalPages;
      } catch (error) {
        console.error("Error fetching pending orders:", error);
      }
    },
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
    nextPendingPage() {
      if (this.currentPendingPage < this.totalPendingPages) {
        this.currentPendingPage++;
        this.fetchPendingOrders();
      }
    },
    prevPendingPage() {
      if (this.currentPendingPage > 1) {
        this.currentPendingPage--;
        this.fetchPendingOrders();
      }
    }
  }
};