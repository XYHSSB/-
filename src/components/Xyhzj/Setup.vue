<template>
  <!-- 导航 -->
  <div
    class="Setup"
    :class="[this.checked == false ? 'body-theme-light' : 'body-theme-dark']"
  >
    <van-nav-bar
      title="设置"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      :class="[this.checked == false ? 'body-theme-light' : 'body-theme-dark']"
    />

    <!--基本资料  -->
    <div>
      <p>
        <b :class="[this.checked == false ? 'light' : 'dark']">{{
          BasicData[0].name
        }}</b>
      </p>
      <van-cell
        title="头像"
        value="内容"
        size="large"
        :title-style="this.checked == false ? 'color:#000' : 'color:#eee'"
        :class="[
          this.checked == false ? 'body-theme-lights' : 'body-theme-darks',
        ]"
      >
        <img :src="BasicData[0].children.avatar" alt="" />
      </van-cell>
      <van-cell
        title="昵称"
        :value="BasicData[0].children.nickname"
        size="large"
        :title-style="this.checked == false ? 'color:#000' : 'color:#eee'"
        :class="[
          this.checked == false ? 'body-theme-lights' : 'body-theme-darks',
        ]"
        @click="show = true"
      />
    </div>
    <!-- 夜间模式 -->
    <div>
      <van-cell-group>
        <van-cell
          :title="this.BasicData[1].name"
          value="内容"
          size="large"
          style="margin-top: 10px"
          :title-style="this.checked == false ? 'color:#000' : 'color:#eee'"
          :class="[
            this.checked == false ? 'body-theme-lights' : 'body-theme-darks',
          ]"
        >
          <van-switch v-model="checked" active-color="#17B3A8" />
        </van-cell>
      </van-cell-group>
    </div>

    <!-- 隐私设置&辅助功能 -->
    <div>
      <van-cell
        :title="this.BasicData[2].name"
        is-link
        size="large"
        style="margin-top: 10px"
        :title-style="this.checked == false ? 'color:#000' : 'color:#eee'"
        :class="[
          this.checked == false ? 'body-theme-lights' : 'body-theme-darks',
        ]"
      />

      <van-cell
        :title="this.BasicData[3].name"
        is-link
        size="large"
        :title-style="this.checked == false ? 'color:#000' : 'color:#eee'"
        :class="[
          this.checked == false ? 'body-theme-lights' : 'body-theme-darks',
        ]"
      />
    </div>

    <!-- 版本信息 -->
    <div>
      <van-cell
        :title="this.BasicData[4].name"
        is-link
        :value="this.BasicData[4].namehao"
        size="large"
        style="margin-top: 10px"
        :title-style="this.checked == false ? 'color:#000' : 'color:#eee'"
        :class="[
          this.checked == false ? 'body-theme-lights' : 'body-theme-darks',
        ]"
      />
    </div>
    <!-- 退出登录 -->
    <van-button
      plain
      style="margin-top: 10px"
      @click="signOut"
      size="large"
      color="red"
      :class="[this.checked == false ? 'button-dack' : 'button-light']"
      >退出登录</van-button
    >

    <van-overlay :show="show">
      <div class="wrapper">
        <van-form>
          <van-field
            v-model="BasicData[0].children.nickname"
            name="昵称"
            label="昵称"
            placeholder="昵称"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <div style="margin: 16px">
            <van-button round block type="info" native-type="submit"
             @click="show = false" >提交</van-button
            >
          </div>
        </van-form>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  data() {
    return {
      BasicData: "",
      checked: false,
      show: false,
    };
  },
  methods: {
    async retrieveData() {
      const { data: res } = await this.$http.get(
        "https://www.fastmock.site/mock/e41420ab344ae39596c9a55a58f257d9/api/test/setup"
      );
      console.log(res);
      this.BasicData = res.BasicData;
      console.log(this.BasicData[0].children.avatar);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    signOut() {
      this.$router.push("/login");
    },
  },
  created() {
    this.retrieveData();
  },
};
</script >

<style scoped>
.Setup {
  height: 844px;
}
.body-theme-light {
  background-color: #f2f2f2;
}
.body-theme-dark {
  background-color: #23272a;
}
.body-theme-lights {
  background-color: #ffffff;
}
.body-theme-darks {
  background-color: #25292c;
}
.light {
  color: #25292c;
}
.dark {
  color: #f2f2f2;
}
.button-light {
  background-color: #25292c;
}
.button-dack {
  background-color: #ffffff;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>