<template>
  <el-container>
    <!-- <el-header>Header</el-header> -->
    <el-main>
      <router-view />
    </el-main>
    <el-footer class="footer">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1" class="li">首页</el-menu-item>
        <el-menu-item index="2" class="li">更新</el-menu-item>
        <el-menu-item index="3" class="li">书架</el-menu-item>
        <el-menu-item index="4" class="li">我的</el-menu-item>
      </el-menu>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  li {
    width: 25%;
    text-align: center;
  }
}
* {
  padding: 0;
  margin: 0;
}
el-main {
  padding: 0;
}
</style>
