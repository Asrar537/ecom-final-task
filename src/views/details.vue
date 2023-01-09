<template>
   <div id="details">detail{{product ? product.title : '' }}</div>
   <div id="container">
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
   </div>
   
  
</template>
<script>

export default{
  props:['id'],
  computed:{
      product(){
        return this.$store.state.single_Product
      }
  },
    mounted(){
      this.$store.dispatch('fetchSingleProduct',this.id)

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
</style>