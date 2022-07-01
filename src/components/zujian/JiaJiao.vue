<template>
  <div id="JiaJiao">
    <!-- 头部文字 -->
    <div class="Top-1">
      <van-icon id="return-1" name="arrow-left" size="30" @click="adds()"/>
      <span style="margin-left: -20px">家教服务</span>
    </div>
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <div class="block">
          <span class="apps">当前定位</span><br />
          <span class="adds">是否允许应用获取我所在位置?</span>

          <van-button class="van-one" type="default" @click="targetC">不允许</van-button>
          <van-button class="van-two" type="warning" @click="targetD">获取位置</van-button>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    adds() {
      this.$router.go(-1);
    },
    targetC(){
      this.$router.push('/JiaJiaoOne')
    },
    targetD(){
      this.$router.push('/JiaJiaoTwo')
    }
  },
};
</script>

<style scoped>
/* 大盒子样式 */
#JiaJiao {
  border: 1px solid red;
  width: 100%;
  height: 844px;
  background: linear-gradient(
    180deg,
    rgb(223, 144, 130) 10%,
    rgba(255, 255, 255, 1) 
  );
}
/* 头部文字的样式 */
#return-1 {
  display: inline-block;
  font-size: 26px;
  text-align: left;
  float: left;
  margin-top: 10px;
  margin-left: 10px;
}
.Top-1 {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  color: rgb(153, 153, 153);
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: rgb(66, 43, 39);
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 335px;
  height: 185px;
  background-color: #fff;
  position: relative;
}
.block .apps {
  position: absolute;
  left: 115px;
  top: 20px;
  font-size: 16px;
  font-weight: 600;
}
.block .adds {
  position: absolute;
  left: 25px;
  top: 65px;
  font-size: 16px;
}
.van-one {
  position: absolute;
  width: 130px;
  left: 30px;
  bottom: 20px;
}
.van-two {
  position: absolute;
  width: 130px;
  left: 180px;
  bottom: 20px;
}
</style>