<template>
    <div>
        <p>我是一个新的组件，展示共享的数据</p> 
        <div>{{name}}</div>
        <div @click="myclick">xxxxx</div>
    </div>
</template>
<script lang="ts">
import {Component,Vue} from "vue-property-decorator";
@Component
export default class Demo extends Vue {
    name:string="xxxx"
    mounted() {
        console.log(this.name);
    }
    myclick():void{
        alert(this.name)
    }
}
</script>