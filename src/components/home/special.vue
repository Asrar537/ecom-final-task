<template>
     <section id="special" class="py-5">
        <div class="container">
            <div class="title text-center py-5">
                <h2 class="position-relative d-inline-block">Special Selection</h2>
            </div>

            <div class="special-list row g-0">
                <div class="col-md-6 col-lg-4 col-xl-3 p-2" v-for="products in product" v-bind:key="products.id">
                    <div class="special-img position-relative overflow-hidden">
                        <img :src="products.images[1] ? products.images[1] :products.images[0]" class="img-fluid image">

                        <span class="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                            <i class = "fas fa-heart"></i>
                        </span>
                    </div>
                    <div class="text-center">
                        <p class="text-capitalize mt-3 mb-1">gray shirt</p>
                        <span class="fw-bold d-block">$ 45.50</span>
                        <a href="#" class="btn btn-primary mt-3">Add to Cart</a>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>
<script>
export default{
    name: 'special',
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
</style>