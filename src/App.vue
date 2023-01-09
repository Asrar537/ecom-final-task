<script >
// import login from './components/login.vue'
import navbarVue from './components/home/navbar.vue';
export default{
  name: 'app',
  components:{
    navbarVue,
  }
 
}
</script>

<template>
  <navbarVue/>
  <RouterView></RouterView>
</template>
