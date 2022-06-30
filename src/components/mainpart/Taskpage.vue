<template>
  <div class="Taskpage">
    <!-- 顶部 -->
    <div class="Taskpage_top">
      <p>我的课程</p>
    </div>

    <!-- 页面主体 -->
    <div class="Taskpage_main">
      <!-- 分隔我的课程 -->
      <van-row>
        <van-col :span="22">我的课程</van-col>
        <van-col :span="2">
          <svg class="icon" aria-hidden="true" @click="showPopup">
            <use xlink:href="#icon-rili" ></use></svg
        ></van-col>
      </van-row>
     
      <!-- 卡片部分 -->
      <div class="card" v-show="show">
        <div class="crad_module">
          <!-- 每一个部分 -->
          <div class="crad_module_item" v-for="(item ) in curriculumModule" :key="item.curriculumId">
            <p>{{item.curriculumDate}}</p>
            <p>{{item.curriculumTime}}</p>
            <img :src="item.curriculumPhoto" alt="" />
            <span>{{item.curriculumDescribe}}</span>
          </div>
          
        
          <!-- 结尾 -->
          <div class="crad_module_more">
            <p>暂无更多</p>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-gengduo"></use>
            </svg>
          </div>
        </div>
      </div>

      <!-- 分隔家教预约 -->
      <van-row v-show="show">
        <van-col :span="24">家教预约</van-col>
      </van-row>

      <!-- 家教卡片 -->
      <div class="card1" v-show="show">
        <div class="education">
         <!-- 单个卡片 -->
          <div class="education_item" v-for="(item) in educationModule" :key="item.id">
            <!-- 头部 -->
            <div class="education_item_top">
               <div class="tp">
                  <svg class="icon" aria-hidden="true">
                     <use :xlink:href="item.educationHead"></use>
                  </svg>
               </div>
               <div class="name">
                  {{item.educationName}}
               </div>
               <div class="information">
                  <svg class="icon" aria-hidden="true">
                     <use :xlink:href="item.educationNews"></use>
                  </svg>
               </div>
            </div>
            <!-- 底部 -->
            <div class="education_item_foot">
               <p><span>学科 : </span>{{item.educationSubjects}}</p>
               <p><span>预约时间 : </span>{{item.educationSubscribe}}</p>
            </div>
          </div>
          
          <!-- 结尾 -->
          <div class="crad_module_more">
            <p>暂无更多</p>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-gengduo"></use>
            </svg>
          </div>
        </div>
      </div>

      <!-- 显示层 -->
      <div class="shows" v-show="show1">
        <div class="van-popup-box">
              <div class="van-popup-item" v-for="(item , index) in courseList" :key="index">
                  <h4>{{item.courseDate}}</h4>
                    <div class="van-popup-item-box" v-for="(item1 , index) in  item.lists" :key="index">
                      <div class="van-popup-item-box-item">
                        <p>{{item1.courseTime}}</p>
                        <div class="van-popup-item-box-item-img">
                          <img :src="item1.coursePhoto" alt="">
                        </div>
                        <span>
                          {{item1.courseDescribe}}
                        </span>
                      </div>
                    </div>
              </div>

              <div>
                <span>暂无更多课程安排</span>
              </div>
          </div>
      </div>
      <!-- 分隔已购课程 -->
      <van-row>
        <van-col :span="24">已购课程</van-col>
      </van-row>

      <!-- 已购课程 -->
      <div class="crad2">
         <div class="payCurriculum">
            <!-- 一个课程 -->
            <div class="payCurriculum_item" v-for="item in payMoudule" :key="item.id">
               <div class="payCurriculum_item_left">
                  <img :src="item.payPhoto" alt="">
               </div> 
               <div class="payCurriculum_item_right">
                  <span>{{item.payDescribe}}</span>
                  <p>{{item.payScore}}</p>
               </div>
            </div>
         </div>
      </div> 


    </div>

  <!-- 页面底部 -->
  <van-divider dashed :style="{ 
    color: '#333', 
    borderColor: '#555', 
    padding: '0 16px' 
    }">
    暂无更多
    </van-divider>
    
  </div>
</template>

<script>
export default {
  name: "Taskpage",
  data() {
    return {
      // 课程内容
      curriculumModule:"",
      // 家教内容
      educationModule:"",
      // 已购课程
      payMoudule:"",
      // 控制弹出层
      show: true,
      show1:false,

      // 设置遮罩层数据
      courseList:""
    };
  },
  methods: {
    // 点击显示遮罩层
    showPopup() {
      this.show = !this.show;
      this.show1 = !this.show1;
    },   

    // 获取课程内容
    async getcurriculum(){
      const {data : res} = await this.$http.get("/curriculum")
      this.curriculumModule = res
    }
    ,
    // 获取家教内容
    geteducation(){
      this.$http.get("/ceducation").then(({data : res})=>{
        this.educationModule = res
      })
    }
    ,
    // 获取已购内容
    getpay(){
      this.$http.get("/pay").then(({data : res}) =>{
        this.payMoudule = res
      })
    }
    ,
    // 获取遮罩层
    async getcourseList(){
      const {data :res} = await this.$http.get("/courseList")
      this.courseList = res
    }
  },
  // 生命周期钩子
  created(){
    // 获取课程内容
    this.getcurriculum()

    // 获取家教内容
    this.geteducation()

    // 获取已购课程
    this.getpay()

    // 获取遮罩层数据
    this.getcourseList()
  }
};
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
  max-width: 390px;
}

.Taskpage_top {
  height: 50px;
  background-color: #81d6d0;
  > p {
    line-height: 50px;
    text-align: center;
    font-weight: 700;
    color: #fff;
  }
}

.Taskpage{
    margin-bottom:60px;
}

// 主体部分
.Taskpage_main {
  width: 90%;
  margin: 0 auto;

  // 分隔部分
  > .van-row {
    margin-top: 20px;

    .van-col {
      font-weight: 700;
    }
  }

  // 卡片区域
  > .card {
    margin: 20px 0;
    color: #000;
    background-color: #fff;
    box-shadow: 0 0 5px #bbb;
    height: 230px;
    overflow: auto;

    // 对于IE，我们需要使用-ms-prefix属性定义滚动条样式：
    -ms-overflow-style: none; /* IE 10+ */

    // 对于Firefox，我们可以将滚动条宽度设置为none：
    scrollbar-width: none; /* Firefox */

    // 设置文字禁止被选中
    -webkit-user-select: none;

    -moz-user-select: none;

    -ms-user-select: none;

    user-select: none;

    .crad_module {
      height: 100%;
      display: flex;

      .crad_module_item {
        width: 150px;
        height: 210px;
        margin: 10px 15px;
        // border: 1px black solid;
        color: #7f7f7f;

        p {
          margin: 5px 0px;
        }

        img {
          margin-top: 10px;
          width: 140px;
          height: 80px;
        }
      }

      .crad_module_more {
        height: 210px;
        margin: 10px;
        // border: 1px black solid;
        display: flex;
        flex-direction: column;
        justify-content: center;

        p {
          text-align: center;
          width: 100px;
          color: #7f7f7f;
        }

        svg {
          margin: 10px auto;
        }
      }
    }
  }

  // 家教卡片
  .card1 {
      height: 160px;
      // border: 1px black solid;
      margin-top: 15px;
      overflow: auto;

    // 对于IE，我们需要使用-ms-prefix属性定义滚动条样式：
    -ms-overflow-style: none; /* IE 10+ */

    // 对于Firefox，我们可以将滚动条宽度设置为none：
    scrollbar-width: none; /* Firefox */

    // 设置文字禁止被选中
    -webkit-user-select: none;

    -moz-user-select: none;

    -ms-user-select: none;

    user-select: none;
    .education {
      height: 100%;
      width: auto;
      display: flex;

      .education_item {
        height: 140px;
        width: 260px;
        margin: 5px 10px;
        box-shadow: 0 0 5px #707070;
         .education_item_top{
            width: 260px;
            // background-color: red;
            display: flex;

            .tp{
               width: 60px;
               height: 60px;
               background-color: #6ed0c9;
               border-radius: 50%;
               margin: 5px;
               text-align: center;
               line-height: 70px;
               font-size: 25px;
            }

            .name{
               width: 130px;
               height: 60px;
               margin: 5px;
               // background-color: #707070;
               line-height: 60px;
            }

            .information{
               width: 50px;
               height: 60px;
               // background-color: #81d6d0;
               margin: 5px;
               line-height: 60px;
               text-align: center;
            }
         }

         .education_item_foot{
            margin-top: 15px;
            // background-color: #7f7f7f;
            padding-left: 15px;

            p{
               margin-bottom: 5px;
               color: #333333;
               span{
                  font-weight: 700;
               }
            }
         }
       
      }

      .crad_module_more {
        height: 150px;
        margin: 10px;
        // border: 1px black solid;
        display: flex;
        flex-direction: column;
        justify-content: center;

        p {
          text-align: center;
          width: 65px;
          color: #7f7f7f;
        }

        svg {
          margin: 10px auto;
        }
      }
    }
  }

   // 已购课程
   .crad2{
      margin-top: 20px;

      .payCurriculum{
         width: 100%;

         .payCurriculum_item{
            width: 100%;
            // height: 120px;
            border: 1px #eee solid;
            box-shadow:  0 0 5px #bbb;
            border-radius: 5px;
            overflow: hidden;
            display: flex;
            margin-bottom : 20px;

            .payCurriculum_item_left{
              width: 120px;
              height: 80px;
              margin: 10px;
              border-radius: 5px;
              overflow: hidden;
              img {
                     // margin-top: 10px;
                     width: 120px;
                     height: 80px;
                     margin: auto;
                  }
            }

            .payCurriculum_item_right{
              height: 80px;
              width: 200px;
              // background-color: #6ed0c9;
              margin: 10px;
              margin-left: 0;

              span{
                font-weight: 700;
              }

              p{
                margin-top: 15px;
              }
            }        
         }
      }
   }

// 显示层
  .shows{
    width: 100%;
    height: 465px;
    // background-color: #777;
    overflow: auto;

    .van-popup-box{
      height: 465px;
      display: flex;

      .van-popup-item{
        width: 230px;
        height: 450px;
        background-color: #f8f8f8;
        margin: 7.5px ;

        > h4{
          margin: 10px;
        }

        .van-popup-item-box{
          margin: 10px 50px;

          .van-popup-item-box-item{
            width: 150px;
            height: 200px;
            // background-color: #eee;
            color: #777;
            
            
            > .van-popup-item-box-item-img{
              img {
                  margin-top: 10px;
                  width: 150px;
                  height: 100px;
              }
            }
          }
        }
      }

      > div{
        
        height: 470px;

        > span{
          display: inline-block;
          width: 30px;
          
          margin: 0 30px;
          margin-top: 150px;
        }
      }
    }
  }
}

// icon矢量图样式
.icon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  cursor: pointer;
}

// Chrome和Safari浏览器
// 使用CSS滚动条选择器，然后使用display：none隐藏它
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>