<template>
  <div>
    <button @click="jumpHome">登录</button>
  </div>
</template>

<script>
export default {
    methods:{
        jumpHome(){
            this.$router.push('/mainframe')
        }
    }
}
</script>

<style>

</style>