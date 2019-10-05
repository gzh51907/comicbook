<template>
  <el-container>
    <!-- <el-header>Header</el-header> -->
    <el-main style="padding:0">
      <router-view />
    </el-main>
    <el-footer class="footer">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="/shouye" class="li" @click="goto('/shouye')">首页</el-menu-item>
        <el-menu-item index="/genxin" class="li" @click="goto('/genxin')">更新</el-menu-item>
        <el-menu-item index="/shujia" class="li" @click="goto('/shujia')">书架</el-menu-item>
        <el-menu-item index="/wode" class="li" @click="goto('/wode')">我的</el-menu-item>
      </el-menu>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      activeIndex: ""
    };
  },
  components: {},
  methods: {
    handleSelect(index, indexpath) {
      console.log(index, indexpath);
      this.activeIndex = index;
    },
    goto(path) {
      this.$router.push(path);
    }
  },
  created() {
    this.activeIndex = this.$route.path;
  }
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
