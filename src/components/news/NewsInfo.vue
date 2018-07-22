<template>
  <!--<div class="newsinfo-container">
    &lt;!&ndash; 大标题 &ndash;&gt;
    <h3 class="title">{{ newsinfo.title }}</h3>
    &lt;!&ndash; 子标题 &ndash;&gt;
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time | dateFormat }}</span>
      <span>点击：{{ newsinfo.click }}次</span>
    </p>

    <hr>

    &lt;!&ndash; 内容区域 &ndash;&gt;
    <div class="content" v-html="newsinfo.content"></div>

    &lt;!&ndash; 评论子组件区域 &ndash;&gt;
    <comment-box :id="this.id"></comment-box>
  </div>-->
  <div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title"><h1>新闻资讯</h1></h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：2018-07-22</span>
      <span>点击：121121次</span>
    </p>

    <hr>

    <!-- 内容区域 -->
    32321421432142

    <!--评论区-->

    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
// 1. 导入 评论子组件
/*import comment from "../subcomponents/comment.vue";

export default {
data() {
  return {
    id: this.$route.params.id, // 将 URL 地址中传递过来的 Id值，挂载到 data上，方便以后调用
    newsinfo: {} // 新闻对象
  };
},
created() {
  this.getNewsInfo();
},
methods: {
  getNewsInfo() {
    // 获取新闻详情
    this.$http.get("api/getnew/" + this.id).then(result => {
      if (result.body.status === 0) {
        this.newsinfo = result.body.message[0];
      } else {
        Toast("获取新闻失败！");
      }
    });
  }
},
components: {
  // 用来注册子组件的节点
  "comment-box": comment
}
};*/
import comment from '../subcomponents/comment.vue'
export default {
  data() {
    return {

    };
  },
  created() {

  },
  methods: {
  },
  components: {
  // 用来注册子组件的节点
  "comment-box": comment
  }
};
</script>

<style lang="scss">
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>
