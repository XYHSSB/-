<template>
  <div id="father">
    <!-- 顶部导航栏 -->
    <van-nav-bar title="课程详情" left-arrow></van-nav-bar>
    <!-- 图片区域 -->
    <div class="vido">
      <van-image
        width="100%"
        fit="contain"
        src="https://cloud.axureshop.com/gsc/7KS14Z/76/93/da/7693da7eb53542829819611125f09efd/images/%E8%A7%86%E9%A2%91%E8%AF%BE%E7%A8%8B%E8%AF%A6%E6%83%85/u2927.jpg?token=484f14ed01ff0dcec9f7b35f6bdd30a2e9195525e37247a16466fe269eb4934e"
      />
      <div class="xx">
        <h2 class="h_1">高等数学(一)</h2>
        <h2 class="h_2">微积分自学考试大纲</h2>
      </div>
      <!-- 小图标 -->
      <div id="vido_" class="vido_ico">
        <!-- 小图标 -->
        <div class="vido_ico">
          <van-icon
            class="ico"
            name="replay"
            size="30px"
            color="#fff"
            custom-style=" margin-left:2px"
          />
          <van-icon
            class="ico"
            name="pause-circle-o"
            size="30px"
            color="#fff"
          />
          <van-icon class="ico" name="bell" size="30px" color="#fff" />
        </div>
        <div class="vido_ico">
          <van-icon class="ico" name="todo-list-o" size="30px" color="#fff" />
          <van-icon class="ico" name="expand-o" size="30px" color="#fff" />
        </div>
      </div>
    </div>
    <!--弹幕区域 -->
    <div id="barrage">
      <div>
        <span
          ><van-icon
            name="bar-chart-o"
            color="#17b3a8"
            size="20px"
          />直播中</span
        >
        <span>{{ number }}人在看</span>
        <input placeholder="发送弹幕" />
      </div>
    </div>
    <!-- tab选项卡区域 -->
    <div>
      <van-tabs id="tab" class="item1">
        <van-tab title="详情">
          <!-- 详情一 -->
          <div class="lo">
            <div class="lo_son1">
              <img src="../../assets/img/2.jpg" alt="" />
            </div>
            <div class="lo_son2">
              <h4>{{ titeler }}</h4>
              <span>{{ sapnList }}</span>
            </div>
          </div>
          <!-- 详情二 -->
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
          <!-- 详情三 -->
          <div class="introduce">
            <h4>课程介绍</h4>
            <p v-for="(item, index) in introDuce" :key="index">{{ item }}</p>
            <img
              src="https://www.pmdaniu.com/storages/118119/c6469e9f90f53e4fd0f8141ed1a78e3f-51132/images/%E8%A7%86%E9%A2%91%E8%AF%BE%E7%A8%8B%E8%AF%A6%E6%83%85/u2985.svg"
              alt=""
            />
            <p>{{ p4 }}</p>
            <p class="pp">{{ p5 }}</p>
          </div>
        </van-tab>
        <!-- tab目录区域 -->
        <van-tab title="目录" id="tab" class="item1">
          <div>
            <div class="catalogue">
              {{ checkFarst }}
              <img
                src="https://cloud.axureshop.com/gsc/7KS14Z/76/93/da/7693da7eb53542829819611125f09efd/images/%E8%A7%86%E9%A2%91%E8%AF%BE%E7%A8%8B%E8%AF%A6%E6%83%85/u2987.png?token=0a4e24841fd76d042a1235a41a555c3cecf3d547a4617be5d83d0c27bf3719f0"
              />
              <van-icon name="play-circle" size="25px" color="#16b3a8" />
            </div>
            <div
              class="catalogue"
              v-for="(item, index) in checkList"
              :key="index"
            >
              {{ item }}
              <van-icon name="play-circle" size="25px" color="#16b3a8" />
            </div>
            <div class="catalogub">{{ checkFinally }}</div>
          </div>
        </van-tab>
        <van-tab title="资料">
          <div class="rescourse">
            <span class="r">{{ resCourse.tit.tit1 }}</span>
            <span class="r1">{{ resCourse.tit.tit2 }}</span>
            <span class="r2">{{ resCourse.tit.tit3 }}</span>
          </div>
          <div class="cataloguc" v-for="(item, index) in rescour" :key="index">
            <span><img src="../../assets/img/u3015.svg" /></span>
            <span>{{ item }}</span>
            <span class="nn">{{ resCourse.num }}</span>
            <span class="cc"><van-icon name="down" /></span>
          </div>
          <div class="cataloguc">
            <span><img src="../../assets/img/u3117.svg" alt="" /></span>
            <span>{{ resCourse.res6 }}</span>
            <span class="nn">{{ resCourse.num }}</span>
            <span class="cc"><van-icon name="down" /></span>
          </div>
          <div class="catalogum">
            {{ resCourse.tes }}
          </div>
        </van-tab>
      </van-tabs>
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
        ><van-icon name="star" size="20px" color="yellow"
      /></van-tabbar-item>
      <van-tabbar-item
        ><van-icon name="share-o" size="20px" @click="showShare = true" />
      </van-tabbar-item>
      <van-tabbar-item
        ><van-button color="#f01626" @click="pay">￥65</van-button></van-tabbar-item
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
        <div class="userprogress" v-for="(count,index) in 3" :key="index">
          <div class="userpro">
            <div class="users">
              <img src="../../assets/img/u3190.svg" alt="">
              <span>陈某某</span>
            </div>
            <div>
              <span>2022-6-23</span>
            </div>
          </div>
          <div><van-rate v-model="value" readonly size="10px" color="yellow"/></div>
          <h5>感谢老师的讲解，非常用心，成绩有所提升！</h5>
          <span><van-icon name="good-job-o" />123</span>
        </div>
      <van-loading color="#0094ff" vertical>加载中...</van-loading>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 123,
      loading: true,
      //标题
      titeler: "高等数学(一)微积分自学考试大纲",
      //span内容
      sapnList: "微积分(Calculus),数学概念,是高等数学中研究函数的微分...",
      //name
      people: {
        name: "杨学涛",
        school: "黄岗第四高级中学特技教师",
        num: 3201,
      },
      //课程介绍
      introDuce: {
        p: "十七世纪以来，微积分的概念和技巧不断扩展并被广泛应用来解决天文学、物理学中的各种实际问题，取得了巨大的成就。",
        p2: "但直到十九世纪以前，在微积分的发展过程中，其数学分析的严密性问题一直没有得到解决。",
        p3: "十八世纪中，包括牛顿和莱布尼兹在内的许多大数学家都觉察到这一问题并对这个问题作了努力，但都没有成功地解决这个问题。",
      },
      p4: "数学首先从对运动（如天文、航海问题等）的研究中引出了一个基本概念，在那以后的二百年里，这个概念在几乎所有的工作中占中心位置，这就是函数——或变量间关系——的概念。",
      p5: "紧接着函数概念的采用，产生了微积分，它是继欧几里得几何之后，全部数学中的一个最大的创造。",
      //目录介绍：
      checkFarst: "第一章函数与极限教案",
      checkFinally: "待更新...",
      checkList: [
        "第二章导数与微分",
        "第三章微分中值定理与导数的应用",
        "第四章不定积分",
        "第五章积分",
        "第六章定积分的应用",
        "第七章微分方程",
      ],

      //文档
      resCourse: {
        tit: {
          tit1: "文档资料",
          tit2: "大小",
          tit3: "操作",
        },
        res6: "期中测试精选错题",
        num: "3.3MB",
        tes: "暂无更多",
      },
      rescour: {
        res1: "第一章函数与极限教案",
        res2: "第二章导数与微分教案",
        res3: "第三章微分中值定理...",
        res4: "第四章不定积分教案",
        res5: "第五章定积分教案",
      },
      showShare: false,
      options: [
        [
          { name: "微信", icon: "wechat" },
          { name: "朋友圈", icon: "wechat-moments" },
          { name: "微博", icon: "weibo" },
          { name: "QQ", icon: "qq" },
        ],
        [
          { name: "复制链接", icon: "link" },
          { name: "分享海报", icon: "poster" },
          { name: "二维码", icon: "qrcode" },
          { name: "小程序码", icon: "weapp-qrcode" },
        ],
      ],
      //评价面板数据
      showeValuate: false,
      value: 5,
      rateList: [
        { value: 5, size: 10, color: "#ffd21e", count: 5 },
        { value: 4, size: 10, color: "#ffd21e", count: 4 },
        { value: 3, size: 10, color: "#ffd21e", count: 3 },
        { value: 2, size: 10, color: "#ffd21e", count: 2 },
        { value: 1, size: 10, color: "#ffd21e", count: 1 },
      ],
    };
  },
  methods: {
    onChange(value) {
      console.log("当前值:" + value);
    },
    pay(){
      this.$router.push('/pay')
    }
  },
};
</script>

 <style scoped>


.vido {
  width: 390px;
  height: 240px;
  position: relative;
}
#vido_ {
  display: flex;
  justify-content: space-between;
  position: relative;
  top: -40px;
}
.vido_ico {
  display: inline-block;
}
.ico {
  margin-right: 15px;
}
.xx {
  width: 390px;
  height: 100px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.6);
  text-align: center;
  color: rgb(88, 78, 78);
}
.h_1 {
  margin-bottom: 0px;
}
.h_2 {
  margin-top: 0px;
}
#barrage {
  width: 390px;
  height: 60px;
  background-color: #fff;
  margin-bottom: 10px;
}
#barrage > div {
  display: flex;
  padding-top: 15px;
  justify-content: space-around;
  align-items: baseline;
}
#barrage > div > span {
  font-size: 14px;
  color: #7f7f94;
}
input {
  font-size: 17px;
  border-radius: 10px;
  background-color: #e3f6f4;
  border: none;
}
#tab {
  width: 390px;
  height: 488px;
  overflow: scroll;
}
.lo {
  width: 390px;
  height: 100px;
  background-color: #ffff;
  display: flex;
  justify-content: space-between;
}
.lo_son1 {
  width: 60px;
  height: 100px;
  text-align: center;
}
.lo_son1 > img {
  width: 60px;
  height: 80px;
  margin: 10px 0 10px 10px;
}
.lo_son2 {
  width: 310px;
  height: 100px;
  margin-right: 3px;
}
.lo_son2 > span {
  font-size: 14px;
  color: #aaaabd;
  letter-spacing: 2px;
}
.lo_son2 > h4 {
  margin: 15px 0 10px 5px;
}
.people {
  width: 380px;
  height: 120px;
  background-color: #fff;
  box-shadow: 1px 0px 5px #f2f2f2;
  margin: 5px auto;
  display: flex;
  justify-content: space-between;
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
.item1::-webkit-scrollbar {
  width: 100%;
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
.introduce > h4 {
  margin-left: 5px;
}
.introduce > p {
  margin-left: 5px;
  margin-right: 5px;
  font-size: 14px;
  letter-spacing: 2px;
  color: #333333;
}
.pp {
  padding-bottom: 50px;
}
.introduce > img {
  width: 370px;
  height: 180px;
  margin-left: 10px;
}
#tabber {
  width: 390px;
  position: absolute;
  bottom: 0;
}
#father {
  position: relative;
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
.userpro{
  width: 390px;
  height: 35px;
  line-height: 35px;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  margin-bottom: 5px;
}
.users{
  position: relative;
  right: 50px;
}
.users>span{
  margin-left: 15px;
}
.users>img{
  position: relative;
  top: 10px;
}
.userprogress>span{
  position: relative;
  right: -300px;
  top: -15px;
}
</style>

