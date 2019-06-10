import Vue from "vue"
import Demo from './demo.vue'
import './index.css'
new Vue({
    el: '#vue-app',
    template: '<Demo/>',
    components: { Demo }
})