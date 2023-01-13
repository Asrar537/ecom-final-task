import axios from 'axios';
import { createApp } from 'vue';
import { createStore, mapActions } from 'vuex';

const store = createStore({
    state: {
        // define varibales
        list: [], //list of products
        single_Product: '', //single prodct
        product_category: [],
        sub_product_category: [],
        searchList: [],
        user: '',
    },

    // getters: {
    //     // get the data
    //     allSearchList: (state) =>
    //         state.searchList
    // },
    actions: {
        // actions to perform


        async fetchProductList({ commit }) {
            const resp = await axios.get(`https://dummyjson.com/products`);
            commit('setList', resp.data);

        },
        async fetchSingleProduct({ commit }, productId) {
            const resp = await axios.get(`https://dummyjson.com/products/${productId}`);
            commit('setSingleProduct', resp.data);
        },
        async fetchProductCategory({ commit }) {
            const resp = await axios.get(`https://dummyjson.com/products/categories`);
            commit('setProductCategory', resp.data);
        },
        async fetchSubProductCategory({ commit }, query) {
            const resp = await axios.get(`https://dummyjson.com/products/category/${query}`);
            console.log(resp.data);
            commit('setsubProductCategory', resp.data);
        },
        async searchProduct({ commit }, query) {
            const resp = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
            commit('search', resp.data)
        },
        async logInUser({ commit }, form) {
            const res = await fetch("https://dummyjson.com/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: form.email,
                    password: form.password,
                }),
            });

            const data = await res.json();
            console.log(data);

            commit('login', data);
        }

    },
    mutations: {
        // update variable values
        login(state, user) {

            state.user = user;

            localStorage.setItem("user", JSON.stringify(user));

            alert('Logged in successfully')

        },
        logout(state) {
            state.user = null;
            localStorage.removeItem('user');
            alert('logged out');
        },
        initializeStore(state) {
            if (localStorage.getItem('user')) {
                state.user = localStorage.getItem('user');
            }
        },
        setList: (state, list) => {
            state.list = list
        },
        setSingleProduct: (state, product) => {
            state.single_Product = product
        },
        setProductCategory: (state, category_list) => {
            state.product_category = category_list
        },
        search: (state, searchList) => {
            state.searchList = searchList;
        },
        setsubProductCategory: (state, subcategory) => {
            state.sub_product_category = subcategory
        }
    },


})

export default store;