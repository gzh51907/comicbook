<template>
  <div>
    <component :is="current"></component>
    <!-- <reg></reg> -->
  </div>
</template>
<script>
import reg from "./reg.vue";
import login from "./login.vue";
import nologin from "./nologin.vue";
import loging from "./loging.vue";
export default {
  data() {
    return { current: "" };
  },
  components: {
    reg,
    login,
    nologin,
    loging
  },
  created() {
    if (!localStorage.username) {
      this.current = "nologin";
    } else {
      this.current = "loging";
    }
  },
  beforeUpdated() {
    if (!localStorage.username) {
      this.current = "nologin";
    } else {
      this.current = "loging";
    }
  }
};
</script>
<style lang="sass" scoped>



</style>