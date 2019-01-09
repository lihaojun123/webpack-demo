<template>
    <div>
        <p>我是一个新的组件，展示共享的数据</p> 
        <p>{{count}}</p> 
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        computed:{
            count(){
                return this.$store.state.count
            }
        }
    }
</script>