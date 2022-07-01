<template>
  <div id="shukan">
    <!-- 头部文字 -->
    <div class="Top">
      <van-icon id="return" name="arrow-left" size="30" @click="add()"/>
      <span style="margin-left: -20px">电子书刊</span>
    </div>
    <!-- 独自一人在大海上的 div -->
    <div class="Bigdiv">
      <div class="fore" v-for="item in bigs" :key="item.id">
        <img :src="item.url" /></div>
      <!-- 文字部分 -->
      <div class="one">
        <span v-for="item in bigs" :key="item.id"><b>{{item.title}}</b></span>
      </div>
      <div class="two" v-for="item in bigs" :key="item.id"><span>{{item.wite}}</span></div>
      <div class="stree"><img src="@/assets/shukan/4.png" alt="" /></div>
    </div>


    
    <h4>本周热门</h4>
    <div class="swiper" id="xinshu">
      <div class="swiper-wrapper">
        <div class="swiper-slide"  v-for="item in menu" :key="item.id">
          <img :src="item.url" alt="" />
          <p>
            <span>{{ item.title }}</span>
          </p>
        </div>
      </div>
    </div>



    <h4>本周新书</h4>
    <div class="swiper" id="xinshu" >
      <div class="swiper-wrapper" >
        <div class="swiper-slide" v-for="item in menu" :key="item.id" >
          <img :src="item.url" alt="" />
          <p>
            <span>{{ item.title }}</span>
          </p>
        </div>
      </div>
    </div>



    <h4>更多书籍</h4>
    <div id="gengduo">
      <div class="myimg" v-for="item in menus" :key="item.id">
        <img :src="item.url" alt="" />
        <div class="mywite">
          <b><span style="font-size: 18px">{{ item.title }}</span></b>
          <p>
            <span>{{item.wite}}</span>
          </p>
          <p><span>原价：65元</span></p>
        </div>
      </div>
      
    </div>
    <div class="jiazai"><van-loading size="30" color="#1989fa" /></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      menu: [],
      menus:[],
      bigs:[],
      
    };
  },
  methods: {
    add() {
      this.$router.go(-1);
    },
  },
  mounted() {
    // swiper插件
    var mySwiper = new Swiper(".swiper", {
      // 当前的视图容器显示几个盒子
      slidesPerView: 4,
      // 当前每个盒子之间的间距
      spaceBetween: 0,
      // 给当前的盒子加外边距
      // spaceBetween : '10%'
    });
  },
  async created() {
    // 本周
    const { data: res } = await this.$http.get("/call/talk");
    this.menu = res.data;

//  更多好书
    const { data: res1 } = await this.$http.get("/call/gengduo");
    this.menus = res1.data;
// 
    const { data: res2 } = await this.$http.get("/call/big");
    this.bigs = res2.data;


  },
  

};
</script>

<style  scoped>
/* 超级大盒子的样式 */
#shukan {
  width: 100%;
  height: 844px;
  background: linear-gradient(
    180deg,
    rgba(236, 180, 96, 1) 10%,
    rgba(255, 255, 255, 1)
  );
}
#return {
  display: inline-block;
  font-size: 26px;
  text-align: left;
  float: left;
  margin-top: 10px;
  margin-left: 5px;
}
/* 头部文字的样式 */
.Top {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 14=px;
  color: #fff;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(236, 180, 96, 1);
}

/* Bigdiv 的样式 */
.Bigdiv {
  position: relative;
  width: 340px;
  height: 80px;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 8px;
  margin-top: 50px;
}

/* 大盒子里的图片样式 */
.Bigdiv .fore img {
  width: 45px;
  height: 60px;
  margin-top: 10px;
  margin-left: 30px;
  box-shadow: 5px 5px 5px -3px rgba(0, 0, 0, 0.5);
}
.Bigdiv .stree img {
  position: absolute;
  width: 62px;
  height: 67px;
  margin-top: -67px;
  margin-left: 270px;
}
h4 {
  margin-top: 40px;
  padding-left: 10px;
}
/* 大盒子里的文字样式 */
.one {
  position: absolute;
  width: 150px;
  height: 25px;
  top: 15px;
  left: 110px;
  font-size: 16px;
}

.two {
  position: absolute;
  width: 150px;
  height: 25px;
  top: 40px;
  left: 110px;
  font-size: 12px;
}

/* 本周热门 、本周新书*/
#remen {
  height: 170px;
  font-size: 13px;
}
/* #xinshu {
  display: flex;
  justify-content: space-between;
} */
#remen img {
  width: 80px;
  height: 110px;
}
.swiper-slide p {
  width: 80px;
  font-size: 13px;
  text-align: center;
  margin: 0 auto;
}
.swiper-slide {
  text-align: center;
  width: 80px;
  height: auto;
  /* margin-left: 20px; */
  /* margin-LEFT: 20px; */
}
.swiper-slide img {
  width: 80px;
  height: 120px;
}

/* 更多书籍 */
.myimg {
  position: relative;
}
.myimg span {
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  justify-content: space-around;
  padding-left: 13px;
  /* margin-left: 100px; */
  /* margin-bottom: 100px; */
}
.mywite {
  position: absolute;
  width: 280px;
  margin-left: 100px;
  margin-top: -150px;
}
.myimg img {
  width: 80px;
  height: 120px;
  padding-left: 10px;
  margin-bottom: 30px;
  /* position: relative; */
}
.jiazai{
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>