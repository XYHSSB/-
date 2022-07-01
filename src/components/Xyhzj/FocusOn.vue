<template>
  <div>
    <!-- 导航条 -->
    <div class="m-b">
      <van-nav-bar
        title="我关注的"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
<!-- 教师 -->
    <div v-for="(item,index) in retData" :key="index">
      <van-cell
        is-link
        size="large"
        style="position: relative"
      >
        <div
          style="
            border-radius: 50px;
            width: 60px;
            height: 60px;
            background-color: #23ddd2;
            margin-left: 20px;
            position: relative;
          "
        >
          <img
            :src="item.url"
            alt=""
            style="width: 50px; height: 50px; position: absolute; left: 4px"
          />
        </div>

        <span style="position: absolute; left: 100px; top: 4px; font-size: 16px"
          >{{item.name}}</span
        >
        <span
          style="position: absolute; left: 100px; top: 30px; font-size: 10px"
          >{{item.describe}}</span
        >
        <template #right-icon>
          <van-icon name="arrow" size="28px"  style="position: absolute; right: 20px; top: 25px;" />
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            retData:""
        }
    },
    methods: {
        async retrieveData(){
           const {data:res}=await this.$http.get('https://www.fastmock.site/mock/e41420ab344ae39596c9a55a58f257d9/api/focusOn');
           this.retData=res.data;
           console.log(this.retData);
        },
        onClickLeft(){
            this.$router.go(-1);
        }
    },
    created(){
        this.retrieveData();
    }
};
</script>

<style scoped>
.m-b {
  margin-bottom: 10px;
}
</style>