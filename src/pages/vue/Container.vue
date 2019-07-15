<template>
  <div class="container">
    <div class="clearfix">
      <ul>
        <li @click="tabNav" data-id="news">新闻</li>
        <li @click="tabNav" data-id="notice">公告</li>
      </ul>
    </div>
    <div class="list-container">
      <List1 v-if="isShowNews" :data="data"/>
      <List2 v-if="isShowNotice" :data="data"/>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import List1 from "./list1.vue";
import List2 from "./list2.vue";

@Component({
  components: {
    List1,
    List2
  }
})
export default class Container extends Vue {
  private name: string = "xxxx";
  private isShowNews: boolean = true;
  private isShowNotice: boolean = false;
  private data: Object = {};
  public mounted() {
    this.data = {
      list: [
        {
          id: 1
        },
        {
          id: 2
        }
      ]
    };
  }
  public tabNav(e) {
    let id = e.target.dataset.id;
    if (id == "news") {
      this.isShowNews = true;
      this.isShowNotice = false;
    } else {
      this.isShowNews = false;
      this.isShowNotice = true;
    }
  }
}
</script>
<style scoped>
.container {
  width: 900px;
  margin: 0 auto;
}
.clearfix:after {
  clear: both;
  content: "";
  display: block;
  font-size: 0;
}
ul li {
  list-style: none;
  float: left;
  width: 200px;
  margin: 0;
}
</style>