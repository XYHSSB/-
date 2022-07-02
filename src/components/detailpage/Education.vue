<template>
  <div id="education">
    <!-- 头部 -->
    <div class="educationHeader">
      <van-row class="van-row1">
        <van-col :span="1"></van-col>
        <van-col :span="20"><van-icon name="arrow-left" @click="gogo" /></van-col>
        <van-col :span="3"><van-icon name="chat-o" /></van-col>
      </van-row>
      <van-row class="van-row2">
        <van-col :span="2"></van-col>
        <van-col :span="5">
          <div class="item1">
            <van-icon name="user-o" />
          </div>
        </van-col>
        <van-col :span="13">
          <div class="item">
            <div class="item_top">
              <span>{{ people.name }}</span>
            </div>
            <div class="item_foot">
              <span>{{ people.school }}</span>
            </div>
          </div>
        </van-col>
        <van-col :span="4">
          <van-icon name="share-o" />
        </van-col>
      </van-row>
      <div class="kg"></div>
    </div>

    <!-- 主体 -->
    <div class="educationMain" v-for="(item,index) in pList" :key="index">
      <div class="educationMain_item">
        <!-- 第一行 -->
        <van-row class="van-row1">
          <van-col :span="6">
            <div class="photo">
              <!-- 图片 -->
              <img src="../../assets/img/2.jpg" alt="" />
            </div>
          </van-col>
          <van-col :span="17" :offset="1">
            <div class="educationMain_item_container">
              <p>{{item.cour}}</p>
              <p>{{item.time}}</p>
              <p>{{item.price}}</p>
            </div>
          </van-col>
        </van-row>
        <!-- 第二行 -->
        <van-row class="van-row2" id="btnn">
          <van-col :span="8" :offset="16">
            <div class="subscribe">预约</div>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "education",
  data() {
    return {
      people: {},
      pList: [],
    };
  },
  created() {
    const base_url =
      "https://www.fastmock.site/mock/1a8af0244533c6aa85a7bef9050ac1ca/api";
    axios.get(`${base_url}/educ`).then((res) => {
      //
      this.people = res.data.data.people;
      //
      this.pList = res.data.data.pList;
    });
  },
  methods:{
    gogo(){
        this.$router.go(-1)
    }
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
#btnn{
    position: relative;
    right: -210px;
}

// 整体
#education {
  max-width: 390px;
  width: 100%;

  // 头部开始
  .educationHeader {
    width: 100%;
    background-color: #658cc6;

    .van-row1 {
      padding-top: 10px;
      font-size: 30px;
      color: #fff;
    }

    .van-row2 {
      margin-top: 30px;
      color: #fff;
      position: relative;
      right: 0;
      .van-col {
        .item1 {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: #22dcd2;

          .van-icon {
            font-size: 30px;
            line-height: 80px;
            margin-left: 50%;
            transform: translateX(-50%);
          }
        }

        .item {
          width: 180px;
          height: 80px;
          margin-left: 10px;
          color: #fff;

          .item_top {
            width: 100%;
            height: 50%;
            font-size: 20px;
          }

          .item_foot {
            width: 100%;
            height: 50%;

            font-size: 15px;
          }
        }

        > .van-icon {
          margin-left: 10%;
          line-height: 80px;
          font-size: 30px;
        }
      }
    }

    .kg {
      height: 30px;
    }
  }

  // 主体开始
  .educationMain {
    width: 100%;

    .educationMain_item {
      width: 90%;
      height: 150px;
      // background-color: antiquewhite;
      margin: 20px auto 0;
      border-radius: 10px;
      background-color: #a4bbdd;
      padding-top: 15px;

      .van-row1 {
        width: 90%;
        height: 100px;
        // background-color: antiquewhite;
        margin: auto;
        margin-bottom: 10px;

        .van-col {
          font-size: 15px;
          color: #fff;
          .photo {
            width: ((315/24) * 6) px;
            height: 100px;
            margin-right: 10px;
            //  background-color: #658cc6;

            img {
              width: 100%;
              height: 100%;
            }
          }

          .educationMain_item_container {
            width: ((315/24) * 17) px;
            height: 100px;
            // background-color: #ccc;
            padding-top: 10px;

            p {
              margin-bottom: 5px;
            }
          }
        }
      }

      .van-row2 {
        width: 90%;
        margin: auto;
        // background-color: red;

        .van-col {
          background-color: #3f6fb8;
          border-radius: 5px;
          .subscribe {
            height: 30px;
            line-height: 30px;
            text-align: center;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>