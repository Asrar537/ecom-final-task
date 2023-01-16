<script >
import {onMounted} from 'vue'
    
import navbarVue from './components/home/navbar.vue';
export default{
  name: 'app',
  components:{
    
    navbarVue,
  },
  

  

 
}
</script>

<template>
  
  <navbarVue/>
  <RouterView :key="$route.fullPath"></RouterView>
</template>
