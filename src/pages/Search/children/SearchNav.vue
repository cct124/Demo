<template>
  <div class="search-nav">
    <a class="search-nav-icon" @click.prevent="isShowSearchPanel(true)">
      <img src="./../images/search.png" width="25px">
      <span>卫龙辣条</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "SearchNav",
  props: {
    isShowSearchPanel: Function
  }
};
</script>

<style scoped lang="stylus">
@import '../../../common/stylus/mixins.styl';

.search-nav {
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  border-bottom-1px(#cccccc);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  .search-nav-icon {
    width: 90%;
    height: 70%;
    background-color: #e8e8e8;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      color: #aaaaaa;
      margin-left: 6px;
      font-size: 18px;
      font-weight: lighter;
    }
  }
}
</style>