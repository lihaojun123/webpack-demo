<template>
     <div>
          {{name}}
          <p class="demo" @click="add">页面之间的元素</p>
     </div>
</template>
<script>
  import Tab from '@/conponents/tab/tab.js'
  export default{
    data(){
        return{
            id:1,
            name:"hello world"
        }
    },
    methods:{
        add(){
            new Tab({
                id:"sfdsf",
                name:"1111111111111"
            })
            this.name="点击更新了数据"
        }
    },
     mounted() {
         let _this=this;
         _this.name="改变了 hello world";
     }
  }
</script>
