import { getMenus } from "@/services/HandlerGetMenus";
import { getArticles } from "@/services/HandlerGetArticles";
import { postOrder } from "@/services/HandlerPostOrder";

export default {
  data() {
    return {
      menus: [],
      articles: [],
      articlesByType: {},
      cart: [],
    };
  },
  async created() {
    try {
      this.menus = await getMenus();
      this.articles = await getArticles();
      this.organizeArticlesByType();
    } catch (error) {
      console.error("Error fetching menus and articles:", error);
    }
  },
  methods: {
    organizeArticlesByType() {
      this.articlesByType = this.articles.reduce((acc, article) => {
        if (!acc[article.article_type]) {
          acc[article.article_type] = [];
        }
        acc[article.article_type].push(article);
        return acc;
      }, {});
    },
    addToCart(item, type) {
      this.cart.push({ ...item, type });
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    getTotalPrice() {
      let totalPrice = 0;
      for (const item of this.cart) {
        if (item.type === "article") {
          totalPrice += item.article_price;
        } else if (item.type === "menu") {
          totalPrice += item.menu_price;
        }
      }
      return totalPrice;
    },
    async createOrder() {
      try {
        const response = await postOrder(
          this.getTotalPrice(),
          this.getItemsFromCart()
        );
        console.log("Order created successfully:", response);
      } catch (error) {
        console.error("Error creating order:", error);
      }
    },
    getItemsFromCart() {
      const items = [];
      this.cart.forEach((item) => {
        if (item.type === "article") {
          items.push(item.article_name);
        } else if (item.type === "menu") {
          items.push(item.menu_name);
        }
      });
      return items;
    },
  },
};
