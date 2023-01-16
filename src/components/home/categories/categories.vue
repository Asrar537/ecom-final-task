<template>
     <section id="collection" class="py-5">
        <div class="container py-5">
            <div class="title text-center">
                <h2 class="position-relative d-inline-block"> Categories</h2>
            </div>

            <div class="row">
               
                <div class="collection-list mt-1 row  gy-3" >
                    <div class="  col-xl-3  main-div" v-for="category in categories" v-bind:key="category">
                        <router-link :to="{name : 'sub_categories',params: {id: category}}">
                       
                        
                        <div class="text-center">
                        <button  class="btn btn-primary ">{{ category }}</button>
                    

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
    name: 'categories',
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
        categories(){
            return this.$store.state.product_category;

        },
    
    },
    
    mounted(){
        this.$store.dispatch('fetchProductCategory')
    }
}
</script>
<style scoped>
main-div{
    display: flex;
   
}
body{
    padding: 0;
    margin: 0;
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
    .btn{
        padding: 10px;
    }
    #collection{
        padding-bottom: 0px;
    }
</style>