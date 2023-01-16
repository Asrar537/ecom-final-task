<template>
    <section id="collection" class="py-5">
        <div class="container py-5">
            <div class="title text-center">
                <h2 class="position-relative d-inline-block"> {{id}} </h2>
            </div>

            <div class="row g-0">
               
                <div class="collection-list mt-1 row gx-1 gy-3" >
                    <div class="col-md-6 col-lg-4 col-xl-3 p-3 main-div" v-for="category in sub_product" v-bind:key="category.id">
                        <!-- <router-link :to="{name : 'sub_categories',params: {id: category}}"> -->
                       
                        
                        <!-- <div class="text-center">
                        <button  class="btn btn-primary ">{{ category.title }}</button>
                    

                        </div> -->
                        <!-- </router-link> -->
                        <router-link :to="{name : 'details',params: {id: category.id}}">

                        <div class="special-img position-relative overflow-hidden">
                        <img :src="category ? category.images[0] :''" class="img-fluid image">

                        <span class="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                            <i class = "fas fa-heart heart"></i>
                        </span>
                    </div>
                    <div class="text-center">
                        <!-- <router-link :to="{name : 'details',params: {id: products.id}}"> -->
                          
                        <p class="text-capitalize mt-3 mb-1">{{category.title}}</p>
                      <!-- </router-link> -->
                        <span class="fw-bold d-block" id="price">${{category.price}}</span>
                    </div>
                  </router-link>

                    </div>
                </div>
            </div>
        </div>
    </section>
    
   
 </template>
 <script>
 
 export default{
   props:['id'],
    data(){
      return{
        Cat_id : this.id
      }
    },
    
    watch: {
  Cat_id: function(val, oldVal) {
    console.log(val, oldVal)
  }
},
   computed:{
       sub_product(){
         return this.$store.state.sub_product_category.products
       }
   },
     mounted(){
       this.$store.dispatch('fetchSubProductCategory',this.Cat_id)
 
     }
 }
 </script>
 
 <style scoped>
 form{
   align-items: center;
     padding: 5rem 20rem;
 }
 #details{
   padding: 10rem;
 }
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
    color: rgb(248, 52, 111);
}
#price{
  color: black;
}
 </style>