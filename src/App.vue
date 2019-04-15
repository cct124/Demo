<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar v-show="!$route.meta.showBottomTabBar"></tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/TabBar/TabBar.vue";

export default {
  naem: "App",
  components: {
    TabBar
  },
  mounted() {
    this.$store.dispatch("getUserInfo");
  }
};
</script>

<style>
@import url("./../static/css/reset.css");
</style>

<style lang="stylus">
html, body {
  width: 100%;
  height: 100%;

  #app {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }
}
</style>
