<template>
     <div>
          <div class="component1">
             {{name}}
             {{doneTodosCount}} 
             <p>{{count}}</p>
          </div>
          <p class="demo" @click="add">页面之间的元素</p>
          <div class="component2">
               <Demo/>
          </div>
          
     </div>
</template>
<script>
  import Tab from '@/conponents/tab/tab.js'
  import Demo from './demo.vue'
  import { mapGetters } from 'vuex'
  export default{
    data(){
        return{
            id:1,
            name:"hello world"
        }
    },
    computed:{
       count(){
           return this.$store.state.count
       },
       doneTodosCount () {
           return this.$store.getters.doneTodosCount
       }
    },
    methods:{
        add(){
            new Tab({
                id:"sfdsf",
                name:"1111111111111"
            })
            this.name="点击更新了数据"
            this.$store.commit("increment")
        }
    },
     mounted() {
         let _this=this;
         _this.name="改变了 hello world";
     },
     components:{
         Demo 
     }

  }
</script>
