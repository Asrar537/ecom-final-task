<template>
   
  <headers/>
  <!-- <categories/> -->
  <products/>
  <offers/>
  <blogs/>
  <about/>
  <popular/>
  <news/>
  <footers/>
</template>
<script>
import headers from '../components/home/header.vue'
import footers from '../components/home/footer.vue'
// import categories from '../components/home/categories/categories.vue'
import products from '../components/home/product_collections/products.vue'
import popular from '../components/home/popular.vue'
import offers from '../components/home/offers.vue'
import blogs from '../components/home/blogs.vue'
import about from '../components/home/about.vue'
import news from '../components/home/news.vue'
import spinner from '../components/constants/spinner.vue'
export default{
    name:'home',
    components:{
    headers,
    // categories,
    products,
    offers,
    blogs,
    about,
    popular,
    news,
    footers,
    spinner
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Kaisei+Tokumin:wght@400;500;700&family=Poppins:wght@300;400;500&display=swap');

:root{
    --lg-font: 'Kaisei Tokumin', serif;
    --sm-font: 'Poppins', sans-serif;
    --pink: rgb(248, 52, 111);
}
body{
    font-family: var(--sm-font);
}

/* button */
.bg{
    background-color: var(--pink)!important;
}

.btn:not(.nav-btns button){
    background-color: #fff;
    color: rgb(85, 85, 85);
    padding: 10px 28px;
    border-radius: 25px;
    border: 1px solid rgb(85, 85, 85);
}
.btn:not(.nav-btns button):hover{
    background-color: var(--pink);
    color: #fff;
    border-color: var(--pink);
}

/* text color */

/* navbar */
.navbar{
    -webkit-box-shadow: 0 3px 9px 3px rgba(0, 0, 0, 0.1);
            box-shadow: 0 3px 9px 3px rgba(0, 0, 0, 0.1);
}
.navbar-brand img{
    width: 30px;
}
.navbar-brand span{
    letter-spacing: 2px;
    font-family: var(--lg-font);
}
.nav-link:hover{
    color: var(--pink)!important;
}
.nav-item{
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.05);
}

/* header */
#header{
    background: url(https://firebasestorage.googleapis.com/v0/b/mudava-16714.appspot.com/o/banner-img-1.jpg?alt=media&token=2d53649c-ab2d-4011-a34f-02002d2b296c) top/cover no-repeat;
   
}
.carousel-inner h1{
    font-size: 60px;
    font-family: var(--lg-font);
}
.carousel-item .btn{
    border-color: #fff!important;
}
.carousel-item .btn:hover{
    border-color: var(--pink)!important;
}

/* title */
.title h2::before{
    position: absolute;
    content: "";
    width: 4px;
    height: 50px;
    background-color: var(--pink);
    left: -20px;
    top: 50%;
    -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
            transform: translateY(-50%);
}

/* collection */
.active-filter-btn{
    background-color: var(--pink)!important;
    color: #fff!important;
    border-color: var(--pink)!important;
}
.filter-button-group .btn:hover{
    color: #fff!important;
}
.collection-img span{
    top: 20px;
    right: 20px;
    width: 46px;
    height: 46px;
    border-radius: 50%;
}

/* special */
.special-img span{
    top: 20px;
    right: 20px;
}
.special-list .btn{
    padding: 8px 20px!important;
}
.special-img img{
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
}
.special-img:hover img{
    -webkit-transform: scale(1.2);
        -ms-transform: scale(1.2);
            transform: scale(1.2);
}

/* offers */
#offers{
    background: url(../assets/images/offer_img.jpg) center/cover no-repeat;
}
#offers .row{
    min-height: 60vh;
}
.offers-content span{
    font-size: 28px;
}
.offers-content h2{
    font-size: 60px;
    font-family: var(--lg-font);
}
.offers-content .btn{
    border-color: transparent!important;
}

/* about */
#about{
    background-color: rgba(179, 179, 179, 0.05);
}

/* newsletter */
#newsletter{
    background-color: rgba(179, 179, 179, 0.05);
}
#newsletter p{
    max-width: 600px;
}
#newsletter .input-group{
    max-width: 500px;
}
#newsletter .form-control{
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
}
#newsletter .btn{
    background-color: var(--pink);
    color: #fff;
    border-color: var(--pink);
}
#newsletter .btn:hover{
    background-color: #000;
    border-color: #000;
}

/* footer */
footer .brand{
    font-family: var(--lg-font);
    letter-spacing: 2px;
}
footer a{
    -webkit-transition: color 0.3s ease;
    -o-transition: color 0.3s ease;
    transition: color 0.3s ease;
}
footer a:hover{
    color: var(--pink)!important;
}

/* media queries */
@media(min-width: 992px){
    .nav-item{
        border-bottom: none;
    }
}
</style>