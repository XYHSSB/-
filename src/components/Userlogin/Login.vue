<template>
  <div id="login">
     <router-view></router-view>
    <!-- logo图标 -->
    <img src="../../assets/logo1.png" alt="">
    <!-- 登录模块 -->
    <van-form @submit="onSubmit"
     Field="loginFromUser"
     submit-on-enter
     >
    <van-row>
  <van-col span="2"></van-col>
  <van-col span="20">
    <van-cell-group>
    <van-field 
    v-model="userphone" 
    type="text" 
    placeholder="请输入手机号" 
    left-icon="graphic"
    required
     :rules="loginFromUser.userphone"
     show-error-message
    />
    </van-cell-group>
    </van-col>
  <van-col span="2"></van-col>
  </van-row>
  <br>
   <van-row>
  <van-col span="2"></van-col>
  <van-col span="20">
  <van-cell-group>  
  <van-field 
  v-model="password"
  type="password"  
  placeholder="请输入密码" 
  left-icon="lock"
  required
   :rules="loginFromUser.password"
   show-error-message
  />
  </van-cell-group>
  </van-col>
  <van-col span="2"></van-col>
  </van-row>
  </van-form>
    <!-- 复选框 -->
   <div id="box_1">
     <input type="checkbox" id="ipt"><span>已阅读及同意</span><a href="#">《服务条款》</a>
   </div>
    
  <!-- 登录按钮 -->
  <van-button round block type="info" native-type="submit" @click="onSubmit">登录</van-button>
  
  <!-- 第三方登录 -->
  <div id="box_2">
    <div><hr></div>
    <span>第三方登录</span>
    <div><hr></div>
  </div>
  <div>
    <van-icon class="icon" name="wechat" color="green" />
    <van-icon class="icon" name="alipay" />
    <van-icon class="icon" name="wechat-pay" />
  </div>

  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
      data() {
        return {
          userphone:'',
          password:'',
          loginFromUser:{
            userphone:[
              {
                required:true,
                message:'请输入正确的手机号'
              },
              
            ],
            password:[
              {
                required:true,
                message:'请输入正确的密码'
              }
            ]
          }
        }
      },
    methods:{  
     async onSubmit() {
              const {data:res} = await this.$http.get('/api/user/login')
              console.log(res);
                    if(this.userphone==res.userphone&&res.password==this.password){
                      Toast('登录成功')
                      this.$router.push('/mainframe')
                    }else if(this.userphone==''||this.password==''){
                     Toast('用户名或者密码不能为空')
                    }else{
                      Toast('用户名或者密码错误,请重新输入')
                    }
                },
                
      },
    }

</script>

<style scoped>
#box_1{
  color: #eee;
  font-size: 15px;
}
#login{
  width: 100%;
  height: 844px;
  background-color: #b2e6e2;
}
img{
  margin-left: 70px;
  margin-top: 80px;
}
 #ipt{
  margin-left: 50px;
  margin-top: 10px;
 }
 .van-button{
  width: 320px;
  margin-top: 40px;
  margin-left: 35px;
 }
 hr{
  width: 100px;
 }
 #box_2{
  color: #eee;
  margin-top: 150px;
  display: flex;
  justify-content: space-around;
 }
 .icon{
  margin-top: 40px;
  margin-left: 60px;
  font-size: 50px;
 }
</style>