<template>
  <div id="ShiPin">
    <!-- 头部文字 -->
    <div class="Top-2">
      <van-icon id="return-2" name="arrow-left" size="30" @click="addse()"/>
      <span style="margin-left: -20px">视频课程</span>
    </div>
    <!-- 视频盒子 -->
    <div class="ship" v-for="(item, index) in ship" :key="index">
      <div class="ship-1">
        <video-player
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          :options="playerOptions"
        ></video-player>
      </div>
      <div class="ship-2">
        <span
           style="font-size:20px"><b>
            {{
              item.videoName
            }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b
          ></span
        >
        <!-- <span style="font-size: 12px; color: rgb(189, 178, 178)">{{
          item.videoBriefly
        }}</span> -->
        <br /><br />
        <p style="font-size: 18px; color: rgb(189, 178, 178)">
          {{ item.videoBriefly }}
        </p>
        <br />
        <van-button
          type="default"
          size="mini"
          style="background-color: rgb(242, 242, 242); width: 50px;"
          >{{ item.videoCourseName }}</van-button
        >
        <van-button
          type="default"
          size="mini"
          style="background-color: rgb(242, 242, 242); width: 50px"
          >{{ item.videoDegreeName }}</van-button
        >
      </div>
    </div>
    <div class="jiazai"><van-loading size="30" color="#1989fa" /></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ship: [],
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4", // 类型
            src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4", // url地址
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
    };
  },
  onPlayerTimeupdate(player) {
    player.cache_.currentTime; //当前时间
    player.cache_.duration; //总时间
    player.currentTime(0); //设置播放时间位置
    this.$refs.videoPlayer.player.src(videourl); // 更改播放视频
    player.player()?.isFullscreen_; //当前是否在全屏状态
    this.$refs.videoPlayer.player.play(); // 播放
    this.$refs.videoPlayer.player.pause(); // 暂停
    this.$refs.videoPlayer.player.src(src); // 重置进度条复制代码
  },
  methods: {
    addse() {
      this.$router.go(-1);
    },
  },
  async created() {
    const { data: res } = await this.$http.get('/video/videoShowAll');
  console.log(res);
    this.ship = res;
    // console.log(this.ship);
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* 大盒子样式 */
#ShiPin {
  width: 100%;
  height: 844px;
  background: linear-gradient(
    180deg,
    rgb(23, 200, 182) 10%,
    rgba(255, 255, 255, 1) 45%
  );
}
/* 头部文字的样式 */
#return-2 {
  display: inline-block;
  font-size: 26px;
  text-align: left;
  float: left;
  margin-top: 10px;
  margin-left: 5px;
}
.Top-2 {
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
  background-color: rgb(23, 200, 182);
  position: relative;
}
.Top-2::after {
  clear: both;
  content: "";
  display: block;
}

/* 视频盒子 */
.ship {
  width: 370px;
  height: 300px;
  background-color: #fff;
  margin-left: 10px;
}
/* 放视频的盒子 */
.ship-1 {
  width: 350px;
  height: 200px;
  margin-left: 10px;
  padding-top: 10px;
  margin-top: 30px;
}
/* 放文字的盒子 */
.ship-2 {
  width: 350px;
  height: 100px;
  background-color: rgb(255, 255, 255);
  margin-left: 10px;
}
.jiazai{
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>