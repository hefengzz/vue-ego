<template>
  <div class="layout">
    <!-- 左侧导航 -->
    <Menu class="menu" :isCollapse="isCollapse"></Menu>
    <!-- 右侧内容区 -->
    <Content
      class="content"
      @changeCollapse="changeCollapse"
      :isCollapse="isCollapse"
    ></Content>
  </div>
</template>

<script>
import Menu from "./Menu.vue";
import Content from "./Content.vue";

export default {
  name: "Layout",
  components: {
    Menu,
    Content,
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    changeCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style>
.menu {
  float: left;
  min-height: 500px;
  background: #545c64;
  height: 1200px;
}
.content {
  height: 1200px;
  background-color: #666;
}
</style>