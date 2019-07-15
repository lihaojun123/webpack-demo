<template>
  <div>列表1</div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class List1 extends Vue {
  @Prop() private data: Object;
  public mounted(): void {
    console.log(this.data);
  }
}
</script>
<style scoped>
</style>