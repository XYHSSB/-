<template>
  <div>
    <!-- 头部 -->
    <CollectHead name="我的收藏"></CollectHead>
    <!-- 身体 -->
    <CollectBody></CollectBody>
  </div>
</template>

<script>
import CollectHead from './CollectHead.vue'
import CollectBody from './CollectBody.vue'
export default {
    components:{
        CollectHead,
        CollectBody
    }
}
</script>

<style>
.Collect{
    height: 100%;
}
.html{
    height: 844px;
}
</style>