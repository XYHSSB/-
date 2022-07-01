<template>
  <div>
    <h3>总支出:{{zj}}</h3>
    <div class="asd" v-for="(item,index) in ddd" :key="index">
        <p class="dd" style="  color: #7F7F7F; font-size: 14px;">订单号:{{item.orderNumber}}</p>
        <p class="sj" style="  color: #7F7F7F; font-size: 14px;">{{item.timer}}</p>
        <div class="img">
            <img :src="item.img" alt="" style="width:80px;height:120px"></img>
        </div>
        
        <div class="nr">
            <p><b>{{item.name}}</b></p>
            <p><b>{{item.teacherName}}</b></p>
            <p style="  color: #7F7F7F; font-size: 14px;">课程类型:{{item.CourseType}}</p>
            <p style="  color: #7F7F7F; font-size: 14px;">付款方式:{{item.paymentMethod}}</p>
            
        </div>
        <div>

        </div>
       
       <p style="color: #F44056; font-weight: 400;
            font-style: normal;
            color: #F44056;position: absolute;
            bottom: 0px;
            right: 12px;"><b>￥{{item.price}}</b></p>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            ddd:''
        }
    },
    methods: {
        async getjq(){
            const {data:res}=await this.$http.get('https://www.fastmock.site/mock/e41420ab344ae39596c9a55a58f257d9/api/order');
            this.ddd=res.data;
            console.log(this.ddd);
        }
    },
    created(){
        this.getjq();
        console.log(this.zj());
    },
    computed:{
        zj(){
            var zjj=0;
            for(var i = 0;i<this.ddd.length;i++){
                zjj+=parseInt(this.ddd[i].price)
            }
            return zjj;
            }
    }
};
</script>

<style scoped>
.asd {
  width: 380px;
  height: 200px;
  margin: 10px auto;
  position: relative;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.sj {
  position: absolute;
  top: -10px;
  right: 12px;
}

.img {
  position: absolute;
  left: 20px;
  top: 40px;
}

.nr {
  position: absolute;
  left: 120px;
  top: 18px;
}
.asd .dd {
  position: absolute;
  top: -10px;
  left: 12px;
}
</style>