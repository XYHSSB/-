<template>
  <div>
    <!-- 轮播 -->
    <van-swipe width="10px" class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="../../assets/img/1.svg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/img/2.svg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/img/3.svg" alt />
      </van-swipe-item>
    </van-swipe>

    <!-- 课程类型 -->
    <div class="ttt">
      <h3>课程类型</h3>
      <van-button color="rgb(23,179,168)" size="small">视频课程</van-button>
      <van-button color="rgb(69,111,255)" size="small">音频教程</van-button>
      <van-button color="rgb(239,125,109)" size="small">家政服务</van-button>
      <van-button color="rgb(236,186,96)" size="small">电子书刊</van-button>
    </div>

    <!-- 更多内容 -->
    <div>
      <h3>更多内容</h3>
      <!-- 老师卡片 -->
      <div class="card">
        <div class="qqq">
          <img :src="arr.img" alt />
        </div>

        <!-- <img :src="arr.img" alt=""> -->
        <span>{{arr.teacher_name}}</span>
        <p>{{arr.teacher_school}}</p>
        <p class="ppp">{{arr.teacher_qualified}}</p>
        <p class="ooo">{{arr.Teacher_subject}}</p>
        <p class="iii">{{arr.teacher_courser_time}}</p>
      </div>

      <!-- 英语听力 -->
      <div class="english">
        <p>{{arr.Listening}}</p>
        <span>{{arr.audition}}</span>
        <img :src="arr.listening" alt />
        <i v-show="a" @click="aaa" class="iconfont icon-zanting"></i>
        <i v-show="b" @click="aaa" class="iconfont icon-bofang"></i>
      </div>
      <!-- 视频 -->
      <div class="video">
        <video-player 
          class="video-player vjs-custom-skin" 
          ref="videoPlayer" 
          :options="playerOptions"></video-player>
      
        
        <h3>{{arr.online}}</h3>
        <span class="study">{{arr.people}}</span>
        <span class="lecture">{{arr.lecture}}</span>
        <van-button color="rgba(242,242,242)" size="mini">英语</van-button>
        <van-button color="rgba(242,242,242)" size="mini">初中</van-button>
      </div>

      <!-- 文言文 -->
      <div class="writings">
        <img :src="arr.Writings" alt />
        <h3>{{arr.annotation}}</h3>
        <h4>{{arr.name}}</h4>
        <h5>{{arr.Special_class_teacher}}</h5>
        <div class="aaa">
          <span>{{arr.content}}</span>
        </div>
        <span class="ii">{{arr.In_the_study}}</span>
      </div>

      <!-- 纵向轮播 -->
      <div class="longitudinal">
        <van-swipe :show-indicators="false" style="height: 200px;" vertical>
          <van-swipe-item>
            <img :src="arr.longitudinals" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img :src="arr.longitudinal" alt />
          </van-swipe-item>
        </van-swipe>
      </div>

      <!-- 英语听力 -->
      <div class="english">
        <p>{{arr.Listening}}</p>
        <span>{{arr.audition}}</span>
        <img :src="arr.listening" alt />
        <i v-show="a" @click="aaa" class="iconfont icon-zanting"></i>
        <i v-show="b" @click="aaa" class="iconfont icon-bofang"></i>
      </div>
      <!-- 视频 -->
       <div class="video">
        <video-player 
          class="video-player vjs-custom-skin" 
          ref="videoPlayer" 
          :options="playerOptions"></video-player>
      
        
        <h3>{{arr.online}}</h3>
        <span class="study">{{arr.people}}</span>
        <span class="lecture">{{arr.lecture}}</span>
        <van-button color="rgba(242,242,242)" size="mini">英语</van-button>
        <van-button color="rgba(242,242,242)" size="mini">初中</van-button>
      </div>
      <!-- 老师 -->
      <div class="card">
        <div class="qqq">
          <img :src="arr.img" alt />
        </div>

        <!-- <img :src="arr.img" alt=""> -->
        <span>{{arr.teacher_name}}</span>
        <p>{{arr.teacher_school}}</p>
        <p class="ppp">{{arr.teacher_qualified}}</p>
        <p class="ooo">{{arr.Teacher_subject}}</p>
        <p class="iii">{{arr.teacher_courser_time}}</p>
      </div>
      <!-- 文言文 -->
      <div class="writings">
        <img :src="arr.longitudinalall" alt />
        <h3>{{arr.annotation}}</h3>
        <h4>{{arr.name}}</h4>
        <h5>{{arr.Special_class_teacher}}</h5>
        <div class="aaa">
          <span>{{arr.content}}</span>
        </div>
        <span class="ii">{{arr.In_the_study}}</span>
      </div>
      <!-- 懒加载 -->
      <van-loading size="70px" />

      <van-loading type="spinner" size="24px" />
      
          
     
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {

      playerOptions: {
                playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
                language: "zh-CN",
                aspectRatio: "16:9", // 将播放器置于流畅模式,并在计算播放器的动态大小时使用该值.值应该代表一个比例 - 用冒号分隔的两个数字(例如"16:9"或"4:3")
                fluid: true, // 当true时,Video.js player将拥有流体大小.换句话说,它将按比例缩放以适应其容器.
                sources: [
                    {
                        type: "video/mp4", // 类型
                        src: "", // url地址
                    },
                ],
                controlBar: {
                    timeDivider: true, // 当前时间和持续时间的分隔符
                    durationDisplay: true, // 时长显示
                    remainingTimeDisplay: true, // 剩下时间
                    currentTimeDisplay: true, // 当前时间
                    volumeControl: true, // 声音控制键
                    playToggle: true, // 暂停和播放键
                    progressControl: true, // 进度条
                    fullscreenToggle: true, // 全屏按钮
                },
            },
      arr: "",
      a: false,
      b: true,
      value: 50
    };
  },
  onPlayerTimeupdate(player) {
    player.cache_.currentTime //当前时间
    player.cache_.duration //总时间
    player.currentTime(0) //设置播放时间位置
    this.$refs.videoPlayer.player.src(videourl) // 更改播放视频
    player.player()?.isFullscreen_ //当前是否在全屏状态
    this.$refs.videoPlayer.player.play() // 播放
    this.$refs.videoPlayer.player.pause() // 暂停
    this.$refs.videoPlayer.player.src(src) // 重置进度条复制代码
},

  
  created() {
    const BASE_URL =
      "https://www.fastmock.site/mock/06dcc7e565e84143226deceb85603b6e/api";
    axios.get(`${BASE_URL}+/test`).then(res => {
      this.arr = res.data.data;
      console.log(this.arr);
      this.playerOptions.sources[0].src=this.arr.video;
    });
  },
  methods: {
    aaa() {
      this.a = !this.a;
      this.b = !this.b;
    },
    onChange(value) {
      Toast("当前值:" + value);
    }
  }
};
</script>

<style  scoped>
.video-player{
  width: 350px;
  margin-left: 5px;
  margin-top: 15px;
 
}
.vjs-tech{
   border-radius: 5px;
}
.rrr{
  width: 300px;
  height: 400px;
  background: #39a9ed;
}
.van-loading{
  margin-left: 150px;
  margin-top: 10px;
}
.writings .ii {
  margin-left: 15px;
  position: relative;
  top: -52px;
  color: gray;
}
.aaa {
  width: 230px;
  height: 100px;
  color: gray;
  margin-left: 130px;
  position: relative;
  top: -12px;
}
.writings h5 {
  margin-left: 200px;
  margin-top: -45px;

  color: rgb(23, 179, 168);
}
.writings h4 {
  margin-left: 130px;
  margin-top: -10px;
  font-size: 19px;
  color: rgb(23, 179, 168);
}
.writings h3 {
  margin-left: 130px;
  margin-top: -140px;
}
.writings img {
  width: 100px;
  height: 140px;
  margin-left: 10px;
  margin-top: 15px;
}
.writings {
  width: 360px;
  height: 220px;
  
  margin-top: 15px;
  margin-left: 15px;
  border-radius: 5px;
  box-shadow: 0 0 6px #f2f2f2;
}

.longitudinal {
  width: 360px;
  height: 250px;
  /* border: 1px solid gray; */
  margin-left: 15px;
  margin-top: 15px;
  border-radius: 5px;
  box-shadow: 0 0 6px #f2f2f2;
}
.van-swipe-item img {
  width: 360px;
  height: 220px;
  margin-top: 10px;
}
.lecture {
  position: relative;
  top: -20px;
}
.study {
  font-size: 8px;
  margin-left: 270px;
  position: relative;
  top: -39px;
  color: gray;
}
.van-button {
  margin-left: 10px;
}
.van-button__text {
  color: gray;
}
.van-slider {
  position: absolute;
  top: 755px;
}
.bbb {
  position: relative;
  top: 10px;
}
.bbb span {
  position: absolute;
  bottom: 20px;
  color: #fff;
  letter-spacing: 2px;
  left: 10px;
}
.van-slider {
  width: 180px;
  margin-left: 140px;
  margin-top: 160px;
}
.bbb {
  width: 345px;
  height: 215px;
  background: #000;
  margin-top: 7px;
  margin-left: 7px;
}
.dim {
  opacity: 0.6;
}
.video .lecture {
  color: gray;
  margin-left: 11px;
  letter-spacing: 2px;
}



.video {
  width: 360px;
  height: 350px;

  box-shadow: 0 0 6px #f2f2f2;
  margin-top: 20px;
  margin-left: 15px;
  border-radius: 5px;
}
.icon-bofang {
  font-size: 25px;
  margin-left: -38px;
  position: relative;
  top: -15px;
  color: #fff;
}
.icon-zanting {
  font-size: 20px;
  margin-left: 307px;
  position: relative;
  top: -37px;
  color: #fff;
}
.english img {
  width: 50px;
  height: 50px;
  margin-left: 200px;
  margin-top: -30px;
}
.qqq {
  width: 90px;
  height: 90px;
  background: rgb(110, 208, 221);
  margin-left: 200px;
  border-radius: 50%;
  position: absolute;
  top: 40px;
  left: 30px;
}
.qqq img {
  width: 70px;
  height: 70px;
  margin-left: 10px;
  margin-top: 5px;
}
.english h4 {
  padding-top: 14px;
  margin-left: 20px;
}
.english p {
  font-size: 18px;
  font-weight: 700;
  margin-left: 20px;
}
.english span {
  color: gray;
  margin-left: 20px;
}

.english {
  width: 360px;
  height: 70px;
  box-shadow: 0 0 6px #f2f2f2;
  margin-top: 20px;
  margin-left: 15px;
  border-radius: 5px;
}
.card {
  position: relative;
}
.card span {
  font-size: 25px;
  margin-left: 30px;
  margin-top: 30px;
  position: absolute;
  /* top: 40px; */
}
.card p {
  font-size: 15px;
  margin-left: 30px;
  color: gray;
  padding-top: 90px;
}
.ppp {
  margin-top: -95px;
}
.card .ooo {
  margin-top: -80px;
  font-size: 13px;
  color: black;
}
.card .iii {
  position: absolute;
  top: 90px;
  font-size: 13px;
  color: black;
}

h3 {
  margin-left: 10px;
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
  top: 10px;
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
.van-button--small {
  width: 75px;
  height: 40px;
  font-size: 13px;
  margin-right: 12.5px;
  margin-left: 10px;
}
.van-button--small[data-v-32ee939c] {
  box-shadow: 1px 0 5px grey;
}
.card {
  width: 360px;
  height: 230px;
  box-shadow: 0 0 6px #f2f2f2;
  margin-left: 15px;
  border-radius: 5px;
}
</style>