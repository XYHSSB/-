<template>
  <div id="YinPin">
    <!-- 头部文字 -->
    <div class="Top-3">
      <van-icon id="return-3" name="arrow-left" size="30" @click="addses()"/>
      <span style="margin-left: -20px">音频课程</span>
    </div> 
    <div class="yinp">
      <div class="xuanzhuan">
        <img class="xuanzhuan-1" src="@/assets/shukan/hahaha.png" alt="">
      </div>
      <div class="yinp-0">
        <span><b>初升高衔接，英语在线听力训练</b></span>
        </div>
        <div class="jindu">
          
        </div>
    </div>
    <div class="yinp-1" v-for="item in yinp" :key="item.id">
      <br><span style="font-size:16px;"><b>&nbsp;&nbsp;&nbsp;{{item.name}}</b></span><br><br>
      <span style="font-size:13px">&nbsp;&nbsp;&nbsp;&nbsp;{{item.title}}</span>   
        <div class="xiao">
          <img class="yinp-2" src="@/assets/shukan/hahaha.png" alt="" stop-circle-o >
          <van-icon class="zant" name="play-circle-o" size="40" />
        </div>
    </div>
    <div class="zanwu"><span>暂无更多</span></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yinp:[]
    }
  },
  methods: {
    addses() {
      this.$router.go('-1');
    },
  },
  async created() {
    const {data:res} = await this.$http.get("/call/yinpin");
    this.yinp = res.data;
  }
};
</script>

<style scoped>
/* 大盒子样式 */
#YinPin {
  width: 100%;
  height: 844px;
  background: linear-gradient(
    180deg,
    rgb(25, 106, 212) 10%,
    rgba(255, 255, 255, 1) 40%
  );
}
#YinPin{
  content: "";
  display: block;
  clear: both;
}
/* 头部文字的样式 */
#return-3 {
  display: inline-block;
  font-size: 26px;
  text-align: left;
  float: left;
  margin-top: 10px;
  margin-left: 5px;
}
.Top-3 {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgb(25, 106, 212);
}
/* 音频大盒子 */
.yinp-0{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  width: 240px;
  height: 140px;
  /* background-color: blueviolet; */
  margin-left: 115px;
  margin-top: 50px;
}
/* 音频盒子 */
.yinp{
  width: 370px;
  height: 140px;
  margin-top: 0px;
  margin-left:10px ;
  border-radius: 5px;
  position: relative;
  background-color: #fff;
}
/* 旋转照片 */
.xuanzhuan{
  position: absolute;
  width: 70px;
  height: 10px;
  margin-top: 38px;
  margin-left: 20px;
}
.xuanzhuan-1{
  width: 70px;
  height: 70px;
  border-radius: 50%;
  animation: xuanzhuan-1 2s linear infinite;
  /* animation属性值中的速度设置为linear。表示动画变化是匀速的。 */
  /* animation属性中的定义播放次数为：infinate，表示无限次数播放，从而可以使动画一直循环播放。 */
  /* rotate旋转 */
}
@keyframes xuanzhuan-1 {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }
/* 音频小盒子 */
.yinp-1{
  width: 370px;
  height: 80px;
  margin-top: 30px; 
  margin-bottom: 20px; 
  margin-left: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}
.xiao{
  position: relative;
  width: 80px;
  height: 80px;
  margin-top: -75px;
  margin-left: 280px;
  /* color: #fff; */
  /* background-color: pink; */
}
.yinp-2{
  position: absolute;
  width: 65px;
  height: 65px;
  margin-top: 6px;  
  margin-left: 15px;
  border-radius: 5px;
  opacity:0.5;
}
.zant{
  position: absolute;
  margin-left: 28px;
  margin-top: 20px;
  color: #fff;
}

.zanwu{
  height: 80px;
  font-size: 14px;
  color: rgb(222, 222, 222);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>