<template>
  <el-page-header @back="goBack" :content="'欢迎你，'+username"></el-page-header>
</template>
<script>
export default {
  data() {
    return {
      username: localStorage.username
    };
  },
  methods: {
    goBack() {
      localStorage.removeItem("username");
      this.$router.replace({ path: "/nologin" });
    }
  }
};
</script>
<style lang="sass" scoped>

</style>