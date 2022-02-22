<template>
  <div>
    <!-- 顶栏 -->
    <div class="header">
      <i v-if="!isCollapse"  @click="changeMenu" class="el-icon-d-arrow-left"></i>
      <i v-else @click="changeMenu" class="el-icon-d-arrow-right"></i>
      顶部区域
    </div>
    <!-- 内容区 路由出口 -->
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  props:['isCollapse'],
  methods: {
    // 展开和收起导航
    changeMenu() {
      this.$emit("changeCollapse");
    },
  },
};
</script>

<style scoped>
.header {
  height: 60px;
  background: blue;
}
.header i {
  font-size: 30px;
  line-height: 60px;
}
</style>