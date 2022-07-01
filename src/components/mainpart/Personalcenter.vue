<template>
  <div class="tbody">
    <van-nav-bar :fixed="true" v-if="showHide">
      <template #right>
        <van-icon name="wap-nav" size="30px" color="#000" @click="EntersSetup" />
      </template>
      <template #left>
        <img
          src="../../assets/xyhpicture/u1486.svg"
          alt=""
          style="width: 30px; height: 30px"
        />
        <p style="margin-left: 10px; font-size: 16px"><b>Meet</b></p>
      </template>
    </van-nav-bar>

    <div>
      <van-icon name="wap-nav" size="30px" class="sheZhi" color="#eee" @click="EntersSetup"></van-icon>
      <img src="../../assets/xyhpicture/u1483.png" alt="" class="BgPicture" />
      <div class="box">
        
        <img
          src="../../assets/xyhpicture/8b7076d9c591ca8517642119860a12f.png"
          class="BgPictures"
        />
        <span style="font-size: 25px" class="usernames">{{ datas.name }}</span>
      </div>
    </div>

    <!--  -->
    <div style="height: 10px; background-color: #f2f2f2"></div>
    <div style="margin-bottom: 10px">
      <span style="font-size: 14px">浏览记录</span>
    </div>
    <van-swipe :show-indicators="false" :loop="false" :width="140">
      <van-swipe-item
        v-for="(item, index) in this.datas.lastlearned"
        :key="index"
      >
        <img src="../../assets/xyhpicture/u1493.svg" alt="" />
        <p>
          <span style="font-size: 10px; margin-left: 20px">{{
            item.name
          }}</span>
        </p>
      </van-swipe-item>
    </van-swipe>
    <div style="height: 10px; background-color: #f2f2f2"></div>
    <!--  -->

    <van-grid>
      <van-grid-item
        v-for="(item, index) in this.datas.function"
        :key="index"
        :icon="item.img"
        :text="item.name"
        :to="{ path: '/'+item.path }"
      />
    </van-grid>

    <div style="height: 10px; background-color: #f2f2f2"></div>
    <!--  -->

    <div>
      <p>
        <span style="font-size: 14px">{{ datas.Mytag[0].name }}</span>
      </p>
      <v-chart class="chart" :option="option" />
    </div>
    <div style="height: 10px; background-color: #f2f2f2"></div>
    <!--  -->
    <div>
      <p>
        <span style="font-size: 14px">{{ datas.studytime[0].name }}</span>
      </p>

      <v-chart class="chart" :option="options" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showHide: false,
      datas: "",
    };
  },
  methods: {
    async baga() {
      const { data: res } = await this.$http.get(
        "https://www.fastmock.site/mock/e41420ab344ae39596c9a55a58f257d9/api/test"
      );
      this.datas = res;
      console.log(this.datas);
    },

    watchScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      //  当滚动超过 90 时，实现吸顶效果
      if (scrollTop > 150) {
        this.showHide = true;
      } else {
        this.showHide = false;
      }
    },
    EntersSetup(){
      this.$router.push('/setup');
    }
  },
  created() {
    this.baga();
  },
  computed: {
    option() {
      return {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [...this.datas.Mytag[0].Chartdata],
          },
        ],
      };
    },

    options() {
      return {
        xAxis: {
          type: "category",
          data: [...this.datas.studytime[0].datas.map((d) => d.name)],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [...this.datas.studytime[0].datas.map((d) => d.value)],
            type: "line",
          },
        ],
      };
    },
  },
  mounted() {
    window.addEventListener("scroll", this.watchScroll);
  },
};
</script>

<style scoped>
.BgPicture {
  width: 394px;
  height: 30%;
}
.BgPictures {
  width: 95px;
  height: 95px;
  border-radius: 50%;
  display: block;
  border: 3px solid white;
}
.usernames {
  position: absolute;
  color: #ffffff;
  margin-left: 22px;
  margin-top: 8px;
}

.box {
  position: absolute;
  top: 50px;
  left: 140px;
}
.chart {
  height: 300px;
}
.sheZhi{
   position: absolute;
   right: 14px;
   top: 10px;
}

</style>