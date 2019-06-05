<template>
    <div>
        <p>我是一个新的组件，展示共享的数据</p> 
        <p @click="myclick">{{name}}</p> 
    </div>
</template>
<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";
export default class Demo extends Vue {
  message: string = "hello";
  name: string = "张三";
  mounted(): void {
    this.getName();
  }
  myclick(): void {
    alert(this.name);
  }
  getName(): void {
    console.log("xxx");
  }
}
</script>