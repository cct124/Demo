<template>
  <div class="search-panel">
    <div class="seach-nav">
      <div class="search-input">
        <img src="../images/search.png" width="20">
        <input ref="mySearch" type="search" placeholder="卫龙辣条">
      </div>
      <button @click="isShowSearchPanel(false)">取消</button>
    </div>
    <div class="search-content">
      <div class="title">
        <img src="../images/hot.png" width="25">
        <span>热门搜索</span>
      </div>
      <ul class="search-list">
        <li>抽纸批发</li>
        <li>浴巾可穿</li>
        <li>石榴水果</li>
        <li>富豪卷纸</li>
        <li>冰箱收纳盒</li>
        <li>毛巾衣服</li>
        <li>小白鞋增高透气</li>
        <li>连衣裙夏</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchPanel",
  props: {
    isShowSearchPanel: Function
  },
  mounted() {
    this.$refs.mySearch.focus();
  }
};
</script>

<style scoped lang="stylus">
@import '../../../common/stylus/mixins.styl';

.search-panel {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  position: fixed;
  letf: 0;
  top: 0;
  z-index: 4;

  .seach-nav {
    width: 100%;
    height: 60px;
    border-bottom-1px(#dddddd);
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .search-input {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 85%;
      height: 38px;
      border-radius: 5px;
      background-color: #ededed;
      padding: 0 10px;

      input {
        width: 90%;
        height: 80%;
        padding-left: 8px;
        font-size: 16px;
        background-color: transparent;
        outline: none;
      }
    }

    button {
      background-color: transparent;
      font-size: 16px;
      color: #aaaaaa;
    }
  }

  .search-content {
    padding: 30px 15px;

    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: #aaaaaa;
      margin-bottom: 10px;
    }

    .search-list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      li {
        background-color: #f5f5f5;
        color: #b3b3b3;
        margin: 5px 10px;
        padding: 8px;
        border-radius: 15px;
        font-weight: lighter;
      }
    }
  }
}
</style>