<template>
  <div id="JiaJiaoOne">
    <!-- 头部文字 -->
    <div class="Top-0">
      <van-icon id="return-0" name="arrow-left" size="30" @click="Adds()" />
      <span style="margin-left: -20px">家教服务</span>
      <div class="img-0"><img src="@/assets/JiaJiao.png" alt="" /></div>
      <div class="centers">
        <span style="color: pink">开启定位，获取周边家教信息</span>
      </div>
      <button @click="targetE">获取位置</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    Adds() {
      this.$router.go(-1);
    },
    targetE() {
      this.$router.push('/JiaJiaoTwo')
    }
  }
};
</script>

<style scoped>
/* 大盒子样式 */
#JiaJiaoOne {
  border: 1px solid red;
  width: 100%;
  height: 844px;
  background: linear-gradient(
    180deg,
    rgb(245, 169, 159) 10%,
    rgba(255, 255, 255, 1) 45%
  );
}
/* 头部文字的样式 */
#return-0 {
  display: inline-block;
  font-size: 26px;
  text-align: left;
  float: left;
  margin-top: 10px;
  margin-left: 5px;
}
.Top-0 {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: rgb(245, 169, 159);
}
.img-0 {
  margin-top: 80px;
}
img {
  width: 391px;
  height: 300px;
}
.centers {
  font-size: 14px;
  color: rgb(236, 97, 76);
}
button {
  color: rgb(236, 97, 76);
  width: 300px;
  background-color: #fff;
  border: 1px solid salmon;
  border-radius: 40px;
  margin-top: 40px;
  font-size: 18px;
}
</style>