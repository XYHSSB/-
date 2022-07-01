<template>
  <div id="JiaJiaoTwo">
    <!-- 头部文字部分 -->
    <div class="Tops">
      <van-icon id="returns" name="arrow-left" size="30" @click="adds()" />
      <span style="margin-left: -20px">家教服务</span>
    </div>
    <div class="ditu" style="height: 100vh">
      <img style="height: 100vh" src="@/assets/shukan/ditu.png" alt="" />
    </div>
    <div class="swiper" id="dibu">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in jiaj" :key="item.id">
          <van-badge :content="1" />
          <div class="touxiang">
            <img src="@/assets/shukan/touxiang.png" alt="" />
            <span class="mc2">{{ item.name }}</span>
            <span class="mingcheng"
              ><b>{{ item.username }}</b></span
            >
            <span class="mc">{{ item.title }}</span>
            <span class="mc1">{{ item.wite }}</span>
            <van-button color="#17B3A8" class="mc3" type="primary" size="mini">{{
              item.btn
            }}</van-button>
          </div>
        </div>
      </div>
      <!-- 
          
          </div>
        </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jiaj: [],
    };
  },
  methods:{
    adds() {
      this.$router.go(-1);
    },
  },
  mounted() {
    var mySwiper = new Swiper(".swiper", {
      slidesPerView: 1.1,
      spaceBetween: 25,
    });
  },
  async created() {
    const { data: res } = await this.$http.get("/call/jj");
    this.jiaj = res.data;
  },
};
</script>

<style scoped>
#JiaJiaoTwo {
  border: 1px solid red;
  width: 100%;
  /* height: 844px; */
  background: linear-gradient(
    180deg,
    rgb(223, 144, 130) 10%,
    rgba(255, 255, 255, 1)
  );
  overflow: hidden;
}

/* 头部文字的样式 */
#returns {
  display: inline-block;
  font-size: 26px;
  text-align: left;
  float: left;
  margin-top: 10px;
  margin-left: 5px;
}

.Tops {
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
  background-color: rgb(223, 144, 130);
}

.ditu {
  position: relative;
  width: 390px;
  /* height: 900px; */
}

.ditu img {
  width: 390px;
  /* height: 900px; */
}
.swiper-slide {
  height: 170px;
  background-color: #fff;
  box-shadow: -3px 5px 5px -3px rgba(0, 0, 0, 0.5);
  /* margin-left:10px; */
}
.swiper {
  padding-left: 25px;
  margin-top: -190px !important;
  margin-bottom: 25px;
  padding-right: 25px;
}

.touxiang {
  height: 130px;
  /* background-color: pink; */
  position: relative;
}

.touxiang img {
  width: 50px;
  height: 50px;
  margin-top: 15px;
  margin-left: 25px;
  border-radius: 50%;
}

.mingcheng {
  position: absolute;
  font-size: 17px;
  top: 15px;
  margin-left: 10px;
}

.mc {
  position: absolute;
  font-size: 14px;
  top: 50px;
  margin-left: 10px;
}

.mc1 {
  position: absolute;
  font-size: 14px;
  top: 75px;
  margin-left: 10px;
}

.mc2 {
  position: absolute;
  right: 10px;
  font-size: 12px;
}

.mc3 {
  position: absolute;
  right: 15px;
  bottom: 0;
  width: 55px;
}
</style>