<template>
  <div class="Collect">
    <van-tree-select
      :items="items"
      :main-active-index.sync="active"
      height="844px"
    >
      <template #content>
        <div v-for="(item,index) in FavoriteData " :key="index">
          <div
            v-if="active === 0"
            style="
              backgroundColor: #f2f2f2;
              position: relative;
              margin-bottom: 10px;
            "
          >
            <img :src="item.img" alt="" style="width: 100px" />
            <span style="position: absolute; top: 20px">{{ item.name }}</span>
          </div>
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      items: [{ text: "默认收藏夹" }],
      FavoriteData: "",
    };
  },
  methods: {
    async getData() {
      const { data: res } = await this.$http.get(
        "https://www.fastmock.site/mock/e41420ab344ae39596c9a55a58f257d9/api/collect"
      );

      this.FavoriteData = res.data[0].content;
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
.van-tree-select__nav {
  background-color: #ffff;
}
.van-sidebar-item {
  background-color: #ffff;
}
</style>