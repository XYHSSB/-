<template>
  <div>
    <!-- 浏览记录 -->
    <div>
        <p>今天</p>
        <div class="asdd" >
            <div style="height:100px;" class="imgbox">
                <img src="../../assets/xyhpicture/u1493.svg" alt="" style="height:100px">
            </div>
            <div style="position:absolute;left: 150px;">
                 <p style="font-size:12px;color: #A7A7A7;">从零开始学摄影-最佳在线专业摄影课</p>
                <p style="font-size:10px;color: #A7A7A7;">评分:8.7</p>
                <van-icon name="cross" style="margin-left:120px"/>   
            </div> 
        </div>

        <!-- 全部清除 -->
        <van-button type="danger" size="large">危险按钮</van-button>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.asdd{
    width: 310px;
  height: 120px;
  margin: 10px auto;
  position: relative;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  align-items: center;
}
.imgbox{
    margin:auto 0 ;}
</style>