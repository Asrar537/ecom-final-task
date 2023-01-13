import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import login from '../views/login.vue'
import details from '../components/home/product_collections/details.vue'
import sub_categories from '../components/home/categories/sub_categories.vue';
import search from '../components/home/search/search.vue'
import footers from '../components/home/footer.vue'
import categories from '../components/home/categories/categories.vue'
import products from '../components/home/product_collections/products.vue'
import popular from '../components/home/popular.vue'
import offers from '../components/home/offers.vue'
import blogs from '../components/home/blogs.vue'
import about from '../components/home/about.vue'
import news from '../components/home/news.vue'
import cart from '../components/home/cart/cart.vue'
const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/details/:id',
            name: 'details',
            component: details,
            props: true
        },
        {
            path: '/sub_categories/:id',
            name: 'sub_categories',
            component: sub_categories,
            props: true
        },
        {
            path: '/search',
            name: 'search',
            component: search
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/categories',
            name: 'categories',
            component: categories
        },
        {
            path: '/cart',
            name: 'cart',
            component: cart
        },
        {
            path: '/products',
            name: 'products',
            component: products
        },
        {
            path: '/offers',
            name: 'offers',
            component: offers
        },


    ]
})

export default router