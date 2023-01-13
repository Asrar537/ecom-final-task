<template>
    <h3>search</h3>
    
    <input type="search" id="search" class="form-control" placeholder="search" v-model="query">
    <button type="submit" @click="serachInfo">search</button>
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
    methods:{
        async SearchData(){
            const resp = await axios.get(`https://dummyjson.com/products/search?q=${this.query}`);
            this.search = resp.data.products;
            console.log(resp.data)
        },
        serachInfo(){
            this.$store.dispatch('searchProduct',this.query)
        }
    }

}
</script>
<style>
#search{
    margin: 80px;
}

</style>