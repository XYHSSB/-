<template>
  <div id="payy">
    <!-- 顶部导航区 -->
    <van-nav-bar
      title="支付成功"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 上内容区域 -->
    <div class="logoCuss">
      <div class="scuss">
        <img src="../../assets/img/u4004.svg" /><span>支付成功</span>
      </div>
      <div class="bottn">
        <button class="btn" @click="fanhui">返回首页</button>
        <button class="btn_">支付成功</button>
      </div>
    </div>
    <!-- 下部内容区域 -->
    <div class="bottmonText">
      <h5>更多推荐</h5>
      <div class="bottList">
        <div
          class="list"
          @click="skip"
          v-for="(item, index) in listObj"
          :key="index"
        >
          <img :src="item.str" />
          <div class="list_son">
            <p>{{ item.title }}</p>
            <van-icon name="bar-chart-o" size="20px" color="#17b3a8" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      //绑定更多推荐数据对象
      listObj: [],
      str: "",
    };
  },
  created() {
    const base_url =
      "https://www.fastmock.site/mock/1a8af0244533c6aa85a7bef9050ac1ca/api";
    axios.get(`${base_url}/suess`).then((res) => {
      this.listObj = res.data.data;
      console.log(this.listObj);
    });
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    skip() {
      this.$router.push("/music");
    },
    fanhui(){
      this.$router.push("/educ")
    }
  },
};
</script>

<style scoped>
#payy {
  width: 390px;
  height: 844px;
  box-sizing: border-box;
}
.logoCuss {
  width: 390px;
  height: 400px;
  background-color: #ffff;
  text-align: center;
}
.scuss {
  width: 128px;
  margin: 0 auto;
  padding-top: 50px;
  font-size: 25px;
  font-weight: 700;
}
.bottn {
  margin-top: 50px;
}
.btn,
.btn_ {
  width: 124px;
  height: 34px;
  border-radius: 20px;
  border: 0.5px solid #17b3a8;
}
.btn {
  color: #17b3a8;
  margin-right: 15px;
}
.btn_ {
  color: #fff;
  background-color: #17b3a8;
  margin-left: 15px;
}
/* 底部样式 */
.bottmonText {
  width: 390px;
  height: 398px;
  background-color: #fff;
}
.bottmonText > h5 {
  margin-top: 0;
  padding-left: 10px;
}
.bottList {
  display: flex;
  width: 390px;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0px 10px 0px 10px;
  box-sizing: border-box;
}
.list {
  width: 160px;
  height: 160px;
  box-shadow: 2px 0px 10px rgb(162, 196, 204);
  padding: 5px 5px 5px 5px;
}
.list:nth-child(1) {
  margin-bottom: 10px;
}
.list > img {
  width: 100%;
  height: 80%;
}
.list_son {
  height: 32px;
  line-height: 32px;
  display: flex;
  justify-content: space-between;
}
.list_son > p {
  margin: 0px;
}
.list_son > .van-icon {
  position: relative;
  top: 6px;
}
</style>