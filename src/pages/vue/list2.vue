<template>
  <div>列表2</div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class List2 extends Vue {
  @Prop() private data: Object;
  public mounted(): void {
    console.log(this.data);
  }
}
</script>