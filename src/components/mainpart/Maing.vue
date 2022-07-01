<template>
<div>
  <router-view></router-view>
  <van-tabbar v-model="active"
  active-color="#07c160"
  
  >
  <van-tabbar-item icon="home-o" to="/mainframe/homepage" @click="saveNavState(active)"></van-tabbar-item>
  <van-tabbar-item icon="todo-list-o" to="/mainframe/MyCourser" @click="saveNavState(active)"></van-tabbar-item>
  <van-tabbar-item icon="user-o" to="/mainframe/personalcenter" @click="saveNavState(active)"></van-tabbar-item>
</van-tabbar>
</div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  },
  methods: {
    saveNavState(active){
      window.sessionStorage.setItem('avtivePath',active);
       this.active=active;
    }
  },
  created(){
    this.active=parseInt(window.sessionStorage.getItem('avtivePath'))
  }
}
</script> 

<style>

</style>