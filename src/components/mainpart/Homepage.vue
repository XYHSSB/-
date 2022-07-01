<template>
  <div>
    <!-- 搜索框 -->
    <van-search 
      sticky
      placeholder="请输入搜索关键词"
      bind:search="onSearch"
      bind:cancel="onCancel"
      background="#4fc08d"
      shape="round"
    />

    <!-- 导航栏 -->
    <van-tabs  swipeable sticky :animated="true"  title-active-color="#17B3A8">
      <van-tab  title="首页">
        <!-- 轮播图 -->
       <lunbo></lunbo>
      </van-tab>
      <van-tab title="免费课程">
        <Ui></Ui>
      </van-tab>
      <van-tab title="UI设计">
        <lunbo></lunbo>
      </van-tab>
      <van-tab title="计算机">
        <lunbo></lunbo>
      </van-tab>
      <van-tab title="新媒体">
        <lunbo></lunbo>
      </van-tab>
      <van-tab title="分类五">
        <lunbo></lunbo>
      </van-tab>
    </van-tabs>
     
  </div>



</template>

<script>
import lunbo from '../homePagezj/lunbo.vue'
import Ui from '../homePagezj/Ui'
export default {
  data() {
    return {};
  },
  components:{
    lunbo,
    Ui
  },
 
};
</script>

<style>
.van-search {
  height: 70px;
}
.van-search__content--round {
  /* background:#3CBFB6; */
}
.van-tab__text {
  padding: 0 10px;
}
.van-tabs__nav--line.van-tabs__nav--complete {
  background: white;
  border-radius: 15px 15px 0 0;
  position: absolute;
  top: -12px;
}
.van-tabs__line {
  display: none;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.van-tab__text {
  position: relative;
  top: 22px;
}
img {
  width: 380px;
  height: 210px;
}
.my-swipe .van-swipe-item {
  height: 200px;
  background: #fff;
}
.van-swipe__indicators {
  bottom: 20px;
}
.van-tab{
  align-items: flex-start !important;
}
</style>