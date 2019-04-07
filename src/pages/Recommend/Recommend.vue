<template>
  <div class="recommend-container" v-if="recommendshoplist.length > 0">
    <ul class="recommend">
      <li class="recommend-item" v-for="(item, index) in recommendshoplist" :key="index">
        <img :src="item.thumb_url" width="100%" v-if="item.thumb_url">
        <h4 class="item-title">{{ item.short_name }}</h4>
        <div class="item-bottom">
          <span class="item-price">￥{{ item.price / 100 }}</span>
          <span class="item-sales">{{ item.sales_tip }}</span>
          <button class="item-btn">找相关</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Recommend",
  mounted() {
    this.$store.dispatch("reqRecommendShopList");
  },
  computed: {
    ...mapState(["recommendshoplist"])
  }
};
</script>

<style scoped lang="stylus">
.recommend-container {
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;

  .recommend {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #f5f5f5;
    margin-bottom: 50px;

    .recommend-item:nth-child(2n-1) {
      margin-right: 1%;
      width: 49.5%;
    }

    .recommend-item {
      width: 49.5%;
      background-color: #ffffff;
      padding-bottom: 15px;
      margin-bottom: 15px;

      .item-title {
        line-height: 20px;
        font-size: 13px;
        font-weight: lighter;
        height: 20px;
        overflow: hidden;
        margin: 5px 0;
        padding: 0 5px;
      }

      .item-bottom {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 5px;

        .item-price {
          flex: 2;
          color: red;
          font-weight: bolder;
          font-size: 14px;
        }

        .item-sales {
          flex: 4;
          font-size: 10px;
          color: #666666;
        }

        .item-btn {
          flex: 2;
          border: 1px solid #ffa5a5;
          height: 25px;
          border-radius: 5px;
          background-color: transparent;
          color: #e86210;
          font-size: 10px;
        }
      }
    }
  }
}
</style>
