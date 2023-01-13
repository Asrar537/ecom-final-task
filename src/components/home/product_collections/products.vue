<template>
     <section id="special" class="py-5">
        <div class="container">
            <div class="title text-center py-5">
                <h2 class="position-relative d-inline-block">Collection</h2>
            </div>
            <div v-if="product" class="special-list row g-0">
                <div class="col-md-6 col-lg-4 col-xl-3 p-2" id="product-card" v-for="products in product" v-bind:key="products.id">
                
                    <div class="special-img position-relative overflow-hidden">
                        <img :src="products.images[1] ? products.images[1] :products.images[0]" class="img-fluid image">

                        <span class="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                            <i class = "fas fa-heart heart"></i>
                        </span>
                    </div>
                    <div class="text-center">
                        <router-link :to="{name : 'details',params: {id: products.id}}">

                        <p class="text-capitalize mt-3 mb-1">{{products.title}}</p></router-link>
                        <span class="fw-bold d-block">${{products.price}}</span>
                        <a href="#" class="btn btn-primary mt-3">Add to Cart</a>
                    </div>
                </div>

            </div>
            <div v-else><spinner/></div>

        </div>
    </section>
</template>
<script>
import spinner from '../../constants/spinner.vue'
export default{
    name: 'products',
    components:{
        spinner
    },
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
    box-shadow: 0 33px 61px -29px rgb(0 0 0/ 26%);
    height: 200px;
    width: 100%;
    object-fit: cover;
}
p{
        
        color: gray;
    } 
    a{
        text-decoration: none;
    }
.heart{
    color: #F8346F;
}
#product-card{
    margin-top: 2rem;
    box-shadow: -4px 9px 12px 1px rgba(235,221,221,0.56);
-webkit-box-shadow: -4px 9px 12px 1px rgba(235,221,221,0.56);
}

</style>