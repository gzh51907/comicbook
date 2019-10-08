<template>
  <div>
    <el-button @click="goto('/login')">登录</el-button>
    <el-button @click="goto('/reg')">注册</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    goto(path) {
      this.$router.replace(path);
    }
  }
};
</script>
<style lang="sass" scoped>

</style>