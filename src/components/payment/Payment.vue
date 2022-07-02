<template>
  <div id="paymentcs">
    <!-- 导航栏区域 -->
    <van-nav-bar
      title="确认支付"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 商品卡片-->
    <van-card
      :price="cardObj.price"
      :desc="cardObj.desc"
      :title="cardObj.title"
      :thumb="cardObj.thumb"
    />
    <!-- 课程介绍区域 -->
    <div class="curriculum">
      <van-card title="课程包含：" :desc="dataList" />
    </div>
    <!--提交订单栏 -->
    <van-submit-bar  button-text="确认支付" @submit="succ"
      ><span>小计:￥{{cardObj.price}}</span></van-submit-bar>
    <!-- 支付方式 -->
    <van-cell
      title="支付方式"
      is-link
      :value="pay"
      class="disburse"
      @click="showeValuate = true"
    />
    <!-- 弹出层 -->
    <van-action-sheet v-model="showeValuate" title="选择支付方式" id="sheet">
      <van-radio-group :value="pay" @change="onChange">
        <van-cell-group>
          <van-cell
          v-for="(item,index) in icoList"
          :key="index"
            :title="item.paymentName"
            value-class="value-class"
            clickable
            :data-name="item.paymentName"
            @click="onClick"        
          >
            <van-radio :name="item.paymentName" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </van-action-sheet>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      //绑定商品卡片对象
      cardObj:{},
      //课程
      dataList:"",
      //支付展示
      showeValuate: false,
      //默认支付方式
      pay: "",
      //图标路径
      icoList:[],
    };
  },
  created() {
    const base_url='https://www.fastmock.site/mock/1a8af0244533c6aa85a7bef9050ac1ca/api'
    axios.get(`${base_url}/cour`).then(res => {
      //获取图标路径
      //this.icoList = res.data.url;
      //获取支付方式默认值；
      this.radio = res.data.radioName;
     this.pay = res.data.radioName;
      //获取课程详解
      this.dataList = res.data.dataList;
      //获取商品信息
      this.cardObj = res.data.cardObject;
      this.mode()
    })
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onChange(event) {
      this.pay = event;
    },
    onClick(event) {
      const { name } = event.currentTarget.dataset;
      console.log(name);
      this.pay = name;
      this.showeValuate=false
    },
    async mode(){
      const {data:res} = await this.$http.get(`/video/allPaymentMethods`)
      console.log(res);
      this.icoList = res
    },
   

   async succ(){
       const { data: res } = await this.$http.put(`/video/videoDetailCollect?userId=${1}&orderCourserId=${1}&PaymentId=${2}&courserTypeId=${2}&OrderNo=${23}`);
        console.log(res);
      this.$router.push('/success')

    },
   
  },
};
</script>

<style scoped>
#paymentcs {
  width: 390px;
  height: 844px;
  position: relative;
  background: linear-gradient(#6bdada 3%, #ffffff 20%);
}
.van-nav-bar {
  background-color: #6bdada;
}
.van-card {
  margin: 5px 5px 5px 5px;
}
.van-card__title {
  font-size: 15px;
  color: black;
  font-weight: 700;
}
.van-card__desc {
  font-size: 12px;
  margin-top: 10px;
  color: #000000;
}
.van-image {
  width: 80% !important;
}
.van-image__img {
  border-radius: 0 !important;
}
.van-card__price {
  position: relative;
  right: -205px;
  color: #f44056;
  font-size: 25px;
}
.van-card__price-integer {
  font-size: 25px;
  font-weight: 600;
}
/* 底部 */
.van-submit-bar {
  position: absolute;
}
.van-submit-bar__bar {
  justify-content: space-between;
  font-size: 18px;
  font-weight: 700;
}
.curriculum {
  margin-top: 25px;
  box-shadow: 0px 0px 5px 1px #eeee;
}
.curriculum .van-card__desc {
  font-size: 13px;
  letter-spacing: 3px;
  overflow: visible;
  white-space: normal;
  color: #000000;
}
/* 支付页面 */
.disburse {
  width: 390px;
  margin-top: 15px;
  box-sizing: border-box;
}
.van-cell__title {
  font-size: 15px;
  font-weight: 700;
}
.van-cell__value > span {
  color: #6bdada;
}
/*  */
#sheet {
  width: 390px;
  box-sizing: border-box;
  padding-bottom: 100px;
}
/*  */
.value-class {
  flex: none !important;
}
.van-cell__left-icon{
  font-size: 22px;
}
</style>