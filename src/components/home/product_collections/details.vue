<template>
   <div id="details" class="d-flex justify-content-center">
    
   <div class="card mb-3 ">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="product ? product.images[0] :''" class="img-fluid image">

    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{product ? product.title : '' }}</h5>
        <p class="card-text"><small class="text-muted"><del>${{ product.price }}  </del> ${{ parseInt(product.price - ((product.price * product.discountPercentage) / 100 ))}}</small></p>
        <p class="card-text">{{ product ? product.description : '' }}</p>
        <a  class="btn btn-primary mt-3" @click="addtoCart">Add to Cart</a>

      </div>
    </div>
  </div>
</div>
</div>
 

</template>
<script>

export default{
  props:['id'],
  methods:{
        addtoCart(){
          console.log(this.product)
          this.$store.dispatch('addProuctToCart', {
            product:this.product,
            quantity : 1, 
          })
        }
    },
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

#details{
  padding: 10rem;
}
.card{
  width: 80%;

}
img{
  height: 250px;
  padding: 25px;
  
}
del{
  color: re;
}
</style>