<template>
  <van-nav-bar
  :title="this.name"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
</template>

<script>
export default {
    props:['name'],
    methods:{
        onClickLeft(){
            this.$router.go(-1);
        }
    }
}
</script>

<style>

</style>