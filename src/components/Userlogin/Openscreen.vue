<template>
  <div>
    <van-swipe indicator-color="white">
      <van-swipe-item>
        <img src="../../assets/4808b99f350fe29be710641c622520d.png" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/579e0363d0ea2b4b53c59b3259339a2.png" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/890f109574edc47909c88f167806642.png" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/a263d30e4d57742d650f09db6f4e78f.png" alt="" />
        <van-button round type="primary" id="btn" @click="jumps"
          >登录</van-button
        >
        <van-button round hairline type="primary" id="btn1" @click="JumpRegistration">注册</van-button>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  methods: {
    jumps() {
      this.$router.push('/User/Login');
    },
    JumpRegistration(){
         this.$router.push('/register')
    }
  },
};
</script>

<style scoped>
#btn {
  width: 130px;
  height: 40px;
  position: relative;
  top: -100px;
  left: 40px;
  border-radius: 40px;
}

#btn1 {
  width: 130px;
  height: 40px;
  top: -100px;
  left: 80px;
  border-radius: 40px;
  background-color: #86c9c4;
  border: none;
}
</style>