import axios from 'axios';
import { createApp } from 'vue';
import { createStore, mapActions } from 'vuex';

const store = createStore({
    state: {
        // define varibales
        list: [],
        single_Product: '',
    },

    //   getters:{
    // // get the data
    //     allLists:(state) =>
    //        state.list
    //   },
    actions: {
        // actions to perform
        async fetchProductList({ commit }) {
            const resp = await axios.get(`https://dummyjson.com/products`);
            commit('setList', resp.data);

        },
        async fetchSingleProduct({ commit }, productId) {
            const resp = await axios.get(`https://dummyjson.com/products/${productId}`);
            commit('setSingleProduct', resp.data);
        }
    },
    mutations: {
        // update variable values
        setList: (state, list) => {
            state.list = list
        },
        setSingleProduct: (state, product) => {
            state.single_Product = product
        }
    },


})

export default store;