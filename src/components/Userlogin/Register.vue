<template>
  <div>
    <button @click="BackLogin">注册</button>
  </div>
</template>

<script>
export default {
    methods:{
        BackLogin(){
            this.$router.push('/login')
        }
    }
}
</script>

<style>

</style>