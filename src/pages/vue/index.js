import Vue from "vue"
import App from './App.vue'
import vuex from 'vuex'
import store from '@/vuex/index'
import './index.css'
Vue.use(vuex)
new Vue({
    el: '#vue-app',
    store,
    render: h => h(App)
})