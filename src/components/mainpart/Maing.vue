<template>
<div>
  <router-view></router-view>
  <van-tabbar v-model="active"
  active-color="#07c160"
  >
  <van-tabbar-item icon="home-o" to="/mainframe/homepage"></van-tabbar-item>
  <van-tabbar-item icon="todo-list-o" to="/mainframe/MyCourser"></van-tabbar-item>
  <van-tabbar-item icon="user-o" to="/mainframe/personalcenter"></van-tabbar-item>
</van-tabbar>
</div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style>

</style>