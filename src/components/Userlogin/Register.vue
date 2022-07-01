<template>
  <div id="register">
    <!-- logo图片 -->
    <img src="../../assets/logo1.png" alt="">
    <!-- 注册模块 -->
    <van-form @submit="onSubmit" Field='RegisterFromUser'>
       <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
      <van-cell-group>
      <van-field 
       v-model="username" 
       type="text" 
       placeholder="请输入您的用户名" 
      left-icon="friends"
      required
     :rules="RegisterFromUser.username"
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
  v-model="userphone" type="text"  
  placeholder="请输入您的手机号" 
  left-icon="graphic"
  required
  :rules="RegisterFromUser.userphone"
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
    placeholder="请输入您的密码" 
    left-icon="lock"
    required
     :rules="RegisterFromUser.password"
    />
    </van-cell-group>
    </van-col>
  <van-col span="2"></van-col>
  </van-row>
    </van-form>
  <!-- 注册按钮 -->
    <van-button round block type="info" native-type="submit" @click="BackLogin">立即注册</van-button>
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
          username:'',
          password:'',
          RegisterFromUser:{
            username:[
              {
                required:true,
                message:'请输入正确的用户名'
              }
            ],
             userphone:[
              {
                required:true,
                message:'请输入正确的手机号',
                pattern: /^1[3456789]\d{9}$/, 
              }
            ],
             password:[
              {
                required:true,
                message:'请输入正确的密码'
              }
            ],
          }
        }
      },
    methods:{
       async BackLogin(){
            // const {data:res} = await  this.$http.get('/api/user/login')
            const {data:res} = await  this.$http.get('/api/user/login')
           if(res.userphone==this.userphone){
            Toast('手机号已经被注册,请重新输入')
           }else if(this.userphone==''||this.username==''||this.password==''){
            Toast('用户名或者密码或者手机号为空')
           }else{
               Toast('注册成功自动为您跳转登录页面')
                this.$router.push('/login')
           }
        }
    }
}
</script>

<style scoped>
#box_1{
  color: #eee;
  font-size: 15px;
}
#register{
  width: 100%;
  height: 844px;
  background-color: #b2e6e2;
}
img{
  margin-left: 70px;
  margin-top: 80px;
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
  margin-top: 90px;
  display: flex;
  justify-content: space-around;
 }
 .icon{
  margin-top: 40px;
  margin-left: 60px;
  font-size: 50px;
 }
</style>