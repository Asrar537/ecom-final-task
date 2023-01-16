<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 fixed-top">
    <div class="container">
      <router-link
        to="/"
        class="navbar-brand d-flex justify-content-between align-items-center order-lg-0"
      >
        <img src="../../assets/images/shopping-bag-icon.png"  class="icon" alt="site icon" />
        <span class="text-uppercase fw-lighter ms-2">Ecom</span>
      </router-link>

      <div class="order-lg-2 nav-btns">
        <router-link to="/cart">
          <button type="button" class="btn position-relative">
            <i class="fa fa-shopping-cart"></i>
            <span
              class="position-absolute top-0 start-100 translate-middle badge bg"
              >{{ cartItemCount }}</span
            >
          </button>
        </router-link>

        <button type="button" class="btn position-relative">
          <router-link to="/search">
            <i class="fa fa-search"></i>
          </router-link>
        </button>

        <button
          type="button"
          id="logbtn"
          class="btn btn-secondary position-relative"
          v-if="$store.state.user"
          @click="logOut"
        >
          Logout
        </button>
        <button
          type="button"
          id="logbtn"
          class="btn btn-secondary position-relative"
          v-if="!$store.state.user"
        >
          <router-link to="/login" id="log"> Login </router-link>
        </button>
      </div>

      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse order-lg-1 bg-white" id="navMenu">
        <ul class="navbar-nav mx-auto text-center">
          <li class="nav-item px-2 py-2">
            <router-link class="nav-link text-uppercase text-dark" to="/"
              >home</router-link
            >
          </li>
          <!-- <li class="nav-item px-2 py-2">
            <a href="#" class="nav-link text-uppercase text-dark"
              >categories
            </a>
          </li> -->
          <li class="dropdown nav-item px-2 py-2">
            <a href="#"
              class="dropdown-toggle nav-link text-uppercase text-dark drop"
              
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categories
          </a>
            <ul class="dropdown-menu">
              <div class="dropdown-item " v-for="category in categories" v-bind:key="category">
                        <router-link :to="{name : 'sub_categories',params: {id: category}}">
                       
                        
                        <div class="text-center">
                        {{ category }}
                    

                        </div>
                        </router-link>

                    </div>
            
             
            </ul>
          </li>
          <li class="nav-item px-2 py-2">
            <router-link
              class="nav-link text-uppercase text-dark"
              to="/products"
              >collection</router-link
            >
          </li>

          <!-- <li class="nav-item px-2 py-2">
            <router-link class="nav-link text-uppercase text-dark" to="/about"
              >about us</router-link
            >
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { computed } from "@vue/runtime-core";
export default {
  name: "navbar",
  data() {
    return {
      auth: false,
      user: localStorage.getItem("user"),
    };
  },
  methods: {
    reloadPage() {
      setTimeout(() => {
        window.location.reload();
      }, 100);
    },
    logOut() {
      // localStorage.removeItem('user')
      this.$store.commit("logout");
    },
  },
  computed: {
    categories() {
      return this.$store.state.product_category;
    },
    cartItemCount() {
      return this.$store.getters.CartItemcount;
    },
  },

  mounted() {
    this.$store.commit("initializeStore");
    this.$store.dispatch("fetchProductCategory");
  },
};
</script>
<style scoped>
.dropdown-menu{
  max-height: 300px;
  overflow-y: scroll;
 
}
.icon{
  font-size: 10px;
}
.dropdown-item:hover{
  color:black;
  background: rgb(248, 52, 111);
}
.text-center{
  color: gray;
}
nav {
  height: 80px;
}

#search {
  width: 5rem;
}
a {
  text-decoration: none;
}
#log {
  color: rgb(248, 216, 216);
}
#logbtn {
  background: rgb(248, 52, 111);
  border: none;
}
.btn i {
  color: #000;
}
</style>
