<template>
  <div class="bottom-tab">
    <span class="tab-item" @click="switchTo('/home')">
      <img
        :src="'/home' === $route.path ? require('./../../../static/img/icon_home_selected.png') : require('./../../../static/img/icon_home.png')"
      >
      <span :class="{no: '/home' === $route.path}">首页</span>
    </span>
    <span class="tab-item" @click="switchTo('/recommend')">
      <img
        :src="'/recommend' === $route.path ? require('./../../../static/img/icon_intro_selected.png') : require('./../../../static/img/icon_intro.png')"
      >
      <span :class="{no: '/recommend' === $route.path}">推荐</span>
    </span>
    <span class="tab-item" @click="switchTo('/search')">
      <img
        :src="'/search' === $route.path ? require('./../../../static/img/icon_search_selected.png') : require('./../../../static/img/icon_search.png')"
      >
      <span :class="{no: '/search' === $route.path}">搜索</span>
    </span>
    <span class="tab-item" @click="switchTo('/chat')">
      <img
        :src="'/chat' === $route.path ? require('./../../../static/img/icon_chat_selected.png') : require('./../../../static/img/icon_chat.png')"
      >
      <span :class="{no: '/chat' === $route.path}">聊天</span>
    </span>
    <span class="tab-item" @click="switchTo('/me')">
      <img
        :src="'/me' === $route.path ? require('./../../../static/img/icon_mine_selected.png') : require('./../../../static/img/icon_mine.png')"
      >
      <span :class="{no: '/me' === $route.path}">我的</span>
    </span>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  methods: {
    switchTo(path) {
      this.$router.replace(path);
    }
  }
};
</script>

<style scoped lang="stylus">
.bottom-tab {
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  z-index: 5;

  .tab-item {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #666;

    img {
      width: 35%;
      margin-bottom: 2px;
    }

    .no {
      color: #e0190e;
    }
  }
}
</style>