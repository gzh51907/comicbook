<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">收藏</el-menu-item>
    <el-menu-item index="2">历史</el-menu-item>
  </el-menu>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  }
};
</script>
<style lang="scss" scoped>
</style>