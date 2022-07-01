<template>
  <div>
    <!-- 头部 -->
    <CollectHead name="全部订单"></CollectHead>
    <!-- 身体 -->
    <OrderBody name="浏览历史"></OrderBody>
  </div>
</template>

<script>
import CollectHead from './CollectHead.vue'
import OrderBody from './OrderBody.vue'
export default {
    components:{
        CollectHead,
         OrderBody
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