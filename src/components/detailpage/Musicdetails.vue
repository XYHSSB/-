<template>
  <div id="musicFather">
    <!-- 顶部导航栏 -->
    <van-nav-bar title="音频课程" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <!-- 视频区域 -->
    <div id="vido">
      <video-player
        class="video-player vjs-custom-skin vjs-big-play-centered"
        ref="videoPlayer"
        :options="playerOptions"
      >
      </video-player>
    </div>
    <!-- 人物介绍-->
    <div class="people">
      <div class="people_son">
        <img src="../../assets/img/u423.svg" alt="" />
      </div>
      <div class="people_son1">
        <h4>
          {{ people.name }}
          <span><van-icon name="manager" color="#17b3a8" /></span>
        </h4>
        <span>{{ people.school }}</span>
        <p>{{ people.num }}位粉丝</p>
        <van-icon name="share" size="20px" class="ic" />
      </div>
    </div>
    <!-- 文本区域 -->
    <div class="textList">
      <h5><van-icon name="description" size="20px" />文稿</h5>
      <p v-for="(item, index) in pList" :key="index">{{ item.p }}</p>
    </div>
    <!-- 底部区域 -->
    <van-tabbar id="tabber">
      <van-tabbar-item
        ><van-icon
          name="comment-o"
          size="20px"
          badge="99+"
          @click="showeValuate = true"
      /></van-tabbar-item>
      <van-tabbar-item
        ><van-icon name="star" size="20px" :color="colo" @click="zjh"
      /></van-tabbar-item>
      <van-tabbar-item
        ><van-icon name="share-o" size="20px" @click="showShare = true" />
      </van-tabbar-item>
      <van-tabbar-item
        ><van-button color="#f01626" @click="pay"
          >￥65</van-button
        ></van-tabbar-item
      >
    </van-tabbar>
    <!-- 分享面板 -->
    <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
      id="shar"
    />
    <!-- 评论面板 -->
    <van-action-sheet v-model="showeValuate" title="评价" id="sheet">
      <div class="content">
        <div class="eatiame">
          <!-- 总评价 -->
          <div class="conn">
            <h1>{{ value }}.0</h1>
            <van-rate v-model="value" @change="onChange" />
          </div>
          <!-- 评价值 -->
          <div>
            <div class="rate" v-for="(item, index) in rateList" :key="index">
              <van-rate
                v-model="item.value"
                :size="item.size"
                :color="item.color"
                void-icon="star"
                void-color="#eee"
                :count="item.count"
              /><span>{{ item.value }}</span>
            </div>
          </div>
          <!-- 进度条 -->
          <div class="asd">
            <div class="progressbar"></div>
            <div
              v-for="(count, index) in 4"
              :key="index"
              class="progressbara"
            ></div>
          </div>
        </div>
        <!-- 用户评价 -->
        <div class="userprogress" v-for="(count, index) in 3" :key="index">
          <div class="userpro">
            <div class="users">
              <img src="../../assets/img/u3190.svg" alt="" />
              <span>陈某某</span>
            </div>
            <div>
              <span>2022-6-23</span>
            </div>
          </div>
          <div>
            <van-rate v-model="value" readonly size="10px" color="yellow" />
          </div>
          <h5>感谢老师的讲解，非常用心，成绩有所提升！</h5>
          <span><van-icon name="good-job-o" />123</span>
        </div>
        <van-loading color="#0094ff" vertical>加载中...</van-loading>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
import { Notify } from 'vant';
import axios from "axios";
export default {
  data() {
    return {
      //视频对线
      playerOptions: {},
      //卡片星系
      people: {},
      //文本内容
      pList: [],
      //
      showShare: false,
      options: [],
      //评价面板数据
      showeValuate:false,
      value:5,
      rateList: [],
      colo:'gray',
      state:1
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
  created() {
    const base_url =
      "https://www.fastmock.site/mock/1a8af0244533c6aa85a7bef9050ac1ca/api";
    axios.get(`${base_url}/music`).then((res) => {
      //获取文本内容
      this.pList = res.data.pList;
      //获取卡片信息
      this.people = res.data.people;
      //获取视频对象
      this.playerOptions = res.data.playerOptions;
      //评价面板数据
      this.rateList = res.data.rateList
      //分享面板东西
      this.options = res.data.options
      this.shoucan()
    });
  },
  methods: {
    onChange(value) {
      console.log("当前值:" + value);
    },
    pay() {
      this.$router.push("/pay");
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    async shoucan() {
      const { data: res } = await this.$http.get(
        `/video/videoDetailById?userId=${1}&videoId=${1}&collectionTypeId=${2}`
      );
        this.state = res.state
      
      },
    zjh() {
      this.state = this.state == -1 ? 1 : -1;
      // console.log(this.state);
      if (this.state == 1) {
        this.colo = "gray";
        Notify('取消收藏');
      } else {
        this.colo = "yellow";
        Notify('收藏成功');
      }
      this.$http
        .post(
          `/User/userCollection?userId=${1}&videoId=${1}&collectionTypeId=${2}&status=${
            this.state
          }`
        )
        .then((res) => {
          console.log(res);
        });
    }
    
  },
};
</script>

<style scoped>
#vido {
  width: 390px;
  height: 220px;
  background-color: aqua;
}
.people {
  width: 390px;
  height: 120px;
  background-color: #658cc6;
  box-shadow: 1px 0px 5px #f2f2f2;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
}
.people_son {
  width: 50px;
  height: 50px;
  background-color: aqua;
  border-radius: 50%;

  display: inline-block;
  margin: 20px 8px 0 15px;
}
.people_son > img {
  width: 100%;
  height: 80%;
  border-radius: 50%;
}
.people_son1 {
  width: 310px;
  height: 120px;
  padding-left: 10px;
}
.people_son1 > h4 {
  margin-bottom: 10px;
}
.people_son1 > span {
  font-size: 12px;
  color: #aaaaaa;
}
.people_son1 > p {
  margin-top: 5px;
  color: #aaaaaa;
  font-size: 12px;
}
.ic {
  position: relative;
  left: 260px;
  top: -55px;
}
.textList > h5 {
  font-size: 20px;
  margin: 5px 0 5px 10px;
}
.textList > p {
  color: #929292;
  font-size: 14px;
  letter-spacing: 2px;
  margin: 15px 5px 20px 5px;
}
/*  */
#tabber {
  width: 390px;
  position: absolute;
  bottom: 0;
}
.van-info {
  transform: translate(100%, -81%) !important;
}
.catalogue {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  text-align: center;
  width: 390px;
  height: 80px;
  line-height: 80px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5), 0 0 6px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  padding: 0 25px 0 15px;
}
.catalogue > img {
  width: 30px;
  height: 30px;
  position: relative;
  left: -240px;
}
.catalogub {
  width: 390px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  background-color: #f2f2f2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5), 0 0 6px rgba(0, 0, 0, 0.04);
  color: #aaaaaa;
  font-size: 16px;
}
.rescourse {
  display: flex;
  justify-content: space-between;
  width: 390px;
  height: 30px;
  background-color: #fff;
}
.rescourse > span {
  font-size: 16px;
  color: #aaaaaa;
}
.cataloguc {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  text-align: center;
  width: 390px;
  height: 80px;
  line-height: 80px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5), 0 0 6px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
}
.cataloguc > span > img {
  width: 30px;
  height: 30px;
  position: relative;
  top: 8px;
  left: 5px;
}
.cataloguc > span {
  color: #6e3333;
}
.r {
  padding-left: 10px;
}
.r1 {
  padding-left: 30px;
}
.r2 {
  padding-right: 10px;
}
.nn {
  padding-right: 100px;
}
.cc {
  padding-right: 20px;
}
.catalogum {
  width: 390px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  background-color: #f2f2f2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5), 0 0 6px rgba(0, 0, 0, 0.04);
  color: #aaaaaa;
  font-size: 16px;
  padding-bottom: 20px;
}
#shar {
  position: absolute;
  bottom: 0;
}
#shar > div {
  justify-content: space-around;
}
.eatiame {
  display: flex;
}
.content {
  padding: 16px 16px 20px;
}
.rate {
  height: 20px;
  line-height: 20px;
  margin-left: 20px;
  display: flex;
  justify-content: flex-end;
}
.rate > span {
  margin: 0px 15px 0 15px;
}
#sheet {
  width: 390px;
  box-sizing: border-box;
}
.progressbar {
  width: 100px;
  height: 5px;
  border-radius: 10px;
  background-color: #e1354a;
  margin-top: 5px;
  margin-bottom: 16px;
}
.progressbara {
  width: 100px;
  height: 5px;
  border-radius: 10px;
  margin-bottom: 16px;
  background-color: #dfdfdf;
}
.userprogress {
  width: 390px;
  height: 150px;
  padding-top: 10px;
}
.userpro {
  width: 390px;
  height: 35px;
  line-height: 35px;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  margin-bottom: 5px;
}
.users {
  position: relative;
  right: 50px;
}
.users > span {
  margin-left: 15px;
}
.users > img {
  position: relative;
  top: 10px;
}
.userprogress > span {
  position: relative;
  right: -300px;
  top: -15px;
}
#musicFather{
    position: relative;
    width: 390px;
    height: 844px;
}
</style>
<style>
.vjs-custom-skin > .video-js .vjs-control-bar {
  font-size: 12px !important;
}
</style>