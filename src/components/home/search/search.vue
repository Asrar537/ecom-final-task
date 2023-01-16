<template>
    <section id="newsletter" class="py-5">
        <div class="container">
            <div class="title text-center py-5">
        <h2 class="position-relative d-inline-block">Search</h2>
      </div>
            <div class="d-flex flex-column align-items-center justify-content-center">
              

                <div class="input-group mb-3 mt-3">
                    <input type="text" class="form-control" placeholder="search" v-model="query">
                    <button class="btn btn-primary" type="submit" @click.prevent="serachInfo">search</button>
                </div>
                <div
          class="col-md-6 col-lg-4 col-xl-3 p-2"
          id="product-card"
          v-for="products in getSearch"
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

              <!-- <span
                class="position-absolute d-flex align-items-center justify-content-center text-primary fs-4"
              >
                <i class="fas fa-heart heart"></i>
              </span> -->
            </div>
            <div class="text-center">
              <p class="text-capitalize mt-3 mb-1 title">{{ products.title }}</p>
              <span class="fw-bold d-block" id="price"
                >${{ products.price }}</span
              >
            </div>
          </router-link>
        </div>
            </div>
        </div>
    </section>
    <div   v-for="products in getSearch"
          v-bind:key="products.id">
        <div>
            {{ products.title }}
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    name:'search',
    data(){
        return{
            query: '',
            search:[]

        }
    },
    computed:{
        getSearch(){
            return this.$store.state.searchList.products;

        },
    },
    methods:{
        // async SearchData(){
        //     const resp = await axios.get(`https://dummyjson.com/products/search?q=${this.query}`);
        //     this.search = resp.data.products;
        //     console.log(resp.data)
        // },
        
        serachInfo(){
            this.$store.dispatch('searchProduct',this.query)
        }
    }

}
</script>
<style scoped>
#search{
    margin: 80px;
}
a{
    text-decoration: none;
}
.image{
    height: 200px;
}
#price {
  color: black;
}
.title{
    color: gray;
}

</style>