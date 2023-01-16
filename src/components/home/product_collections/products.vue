<template>
  <section id="special" class="py-3">
    <div class="container ">
      <div class="title text-center ">
        <h2 class="position-relative d-inline-block">Collection</h2>
      </div>
      <div v-if="product" class="special-list row g-0">
        <div
          class="col-md-6 col-lg-4 col-xl-3 p-2"
          id="product-card"
          v-for="products in product"
          v-bind:key="products.id"
        >
          <router-link :to="{ name: 'details', params: { id: products.id } }">
            <div class="special-img position-relative overflow-hidden">
              <img
                :src="
                  products.images[1] ? products.images[1] : products.images[0]
                "
                class="img-fluid image"
              />

              <span
                class="position-absolute d-flex align-items-center justify-content-center text-primary fs-4"
              >
                <i class="fas fa-heart heart"></i>
              </span>
            </div>
            <div class="text-center">
              <p class="text-capitalize mt-3 mb-1">{{ products.title }}</p>
              <span class="fw-bold d-block" id="price"
                >${{ products.price }}</span
              >
            </div>
          </router-link>
        </div>
        <pagination
          :totalPages="10"
          :perPage="10"
          :currentPage="currentPage"
          @pagechanged="onPageChange"
        />
      </div>
      <div v-else><spinner /></div>
    </div>
  </section>
</template>
<script>
import spinner from "../../constants/spinner.vue";
import Pagination from "../pagination/pagination.vue";
export default {
  name: "products",
  components: {
    spinner,
    Pagination,
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    onPageChange(page) {
      console.log(page);
      this.currentPage = page;
      this.$store.dispatch("fetchProductList", this.currentPage);
    },
  },

  computed: {
    product() {
      return this.$store.state.list.products;
    },
  },

  mounted() {
    console.log(this.currentPage)
    this.$store.dispatch("fetchProductList", this.currentPage);
    
  },
};
</script>
<style scoped>
.image {
  box-shadow: 0 33px 61px -29px rgb(0 0 0/ 26%);
  height: 200px;
  width: 100%;
  object-fit: cover;
}
p {
  color: gray;
}
a {
  text-decoration: none;
}
.heart {
  color: #f8346f;
}
#product-card {
  margin-top: 2rem;
  box-shadow: -4px 9px 12px 1px rgba(235, 221, 221, 0.56);
  -webkit-box-shadow: -4px 9px 12px 1px rgba(235, 221, 221, 0.56);
}
#price {
  color: black;
}
</style>
