<template>
  <div id="search">
    <!-- 顶部搜索框 -->
    <form action="/">
    <van-search
    show-action
    placeholder="输入想要搜索的课程"
     @cancel="onCancel"
     @keydown.enter="add"
     v-model="container"
  />
</form>
<!-- 热门搜索 -->
  <div id="hotsearch">
    <span>热门搜索</span>
    <ul>
        <li  v-for="(item,index) in content" :key="index"><a href="#">{{item}}</a></li>

    </ul>
  </div>
  <!-- 搜索历史 -->
  <div id="SearchHistory">
    <span>搜索历史</span>
    <van-icon  id="del" name="delete" @click="dele" />
    <ul >
        <li v-for="(item , index) in history" :key="index"><a href="#">{{item}}</a></li>
   
    </ul>
  </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            // 热门搜索
            content:[
                '英语',
                '初升高衔接',
                '英语在线课'
            ],
            // 搜索历史
            history:[
                '美术',
               '编程php',
                '新媒体培训',
                '数学'
            ],
            pop:[],
            // 输入框内容
            container:""
        }
    },
    methods: {
        dele(){
            this.history.splice(0,this.history.length);
            return this.pop;  
        },
        onCancel(){
          this.$router.push('/mainframe');
        },
        add(){
            if(!this.container) return
            this.history.push(this.container),
            this.container=''
            if(this.history.length>5){
                this.history.shift()
            }
        }
    },
}
</script>

<style scoped>
#search{
    width: 100%;
    height: 844px;
}
#hotsearch{
    margin-top: 20px;
    width: 100%;
    height: 50px;
}
#hotsearch ul li{
    width: auto;
    margin-top: 10px;
    display: inline-block;
    margin-left: 20px;
}
span{
    font-size: 20px;
    margin-left: 20px;
}
a{ 
    color: white;
    display: block;
    height: 20px;
    /* border: 1px solid black; */
    background-color: #b2e6e2;
    border-radius: 20px;
    padding: 5px 10px;
}
#SearchHistory{
    margin-top: 40px;
    width: 100%;
    height: 50px;
}
#SearchHistory ul li{
    margin-top: 20px;
    display: inline-block;
    margin-left: 20px;
}
#del{
    margin-left: 250px;
}
</style>