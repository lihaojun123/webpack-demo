import Vue from 'vue'
import Container from './Container.vue'
import './index.css'
new Vue({
    el: '#vue-app',
    template: '<Container/>',
    components: { Container }
})