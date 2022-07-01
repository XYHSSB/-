<template>
  <div id="login">
    <button @click="jumpHome">登录</button>
  </div>
</template>

<script>
export default {
  methods: {
    jumpHome() {
      this.$router.push("/mainframe");
    },
  },
};
</script>

<style scoped>
#login {
  height: 844px;
  background-color: aquamarine;
}
</style>