<template>
     <section id="collection" class="py-5">
        <div class="container">
            <div class="title text-center">
                <h2 class="position-relative d-inline-block">New Collection</h2>
            </div>

            <div class="row g-0">
                <!-- <div class="d-flex flex-wrap justify-content-center mt-5 filter-button-group">
                    <button type="button" class="btn m-2 text-dark active-filter-btn" data-filter="*">All</button>
                    <button type="button" class="btn m-2 text-dark" data-filter=".best">Best Sellers</button>
                    <button type="button" class="btn m-2 text-dark" data-filter=".feat">Featured</button>
                    <button type="button" class="btn m-2 text-dark" data-filter=".new">New Arrival</button>
                </div> -->

                <div class="collection-list mt-4 row gx-1 gy-3" >
                    <div class="col-md-6 col-lg-4 col-xl-3 p-3 main-div" v-for="products in product" v-bind:key="products.id">
                        <router-link :to="{name : 'details',params: {id: products.id}}">
                       
                        <div class="collection-img position-relative">
                            <img :src="products.images[0]" class="img-fluid image">
                            <span class="position-absolute bg text-white d-flex align-items-center justify-content-center">sale</span>
                        </div>
                        <div class="text-center">
                            <div class="rating mt-3">
                                <span class="text"><i class = "fas fa-star"></i></span>
                                <span class="text"><i class = "fas fa-star"></i></span>
                                <span class="text"><i class = "fas fa-star"></i></span>
                                <span class="text"><i class = "fas fa-star"></i></span>
                                <span class="text"><i class = "fas fa-star"></i></span>
                            </div>
                            <p class="text-capitalize my-1">{{ products.title }}</p>

                            <span class="fw-bold price">$ {{ products.price }}</span>
                        </div>
                        </router-link>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import {mapGetters} from 'vuex'
// import vueaxios from 'vue-axios'

export default{
    name: 'collection',
    // data(){
    //     return {
    //         list :undefined,
    //     }
    // },
    // mounted(){
    //     axios.get(`https://dummyjson.com/products`)
    //     .then((res)=>{
    //         this.list = res.data.products;
    //         console.warn(res.data.products)
    //     })
    // }
    computed :{
        product(){
            return this.$store.state.list.products;

        },
    
    },
    
    mounted(){
        this.$store.dispatch('fetchProductList')
    }
}
</script>
<style scoped>
    .image{
        width: 100%;
        height: 200px;
    }
    a{
        text-decoration: none;

        
    }
    .text{
        color: rgb(248, 163, 52);
    }
    .bg{
        background: rgb(248, 52, 111);
    }
    p{
        font-weight: bold;
        color: gray;
    } 
    .price{
        color: rgb(248, 52, 111);
    }
</style>