<template>
  <div class="Search">
    <search-nav/>
    <div class="shop">
      <div class="menu-wrapper">
        <ul>
          <li class="menu-item" v-for="(item, index) in searchgoods" :key="index">
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
      <div class="shop-wrapper">
        <ul>
          <li class="shops-li" v-for="(goods, index) in searchgoods" :key="index">
            <div class="shops-title">
              <h4>{{ goods.name }}</h4>
              <a href>查看更多 ></a>
            </div>
            <ul class="phone-type" v-if="goods.tag === 'phone'">
              <li v-for="(phone, index) in goods.category" :key="index">
                <img :src="phone.icon" alt>
              </li>
            </ul>
            <ul class="shop-items">
              <li v-for="(item, index) in goods.items" :key="index">
                <img :src="item.icon" alt>
                <span>{{ item.title }}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SearchNav from "./children/SearchNav";
import { mapState } from "vuex";
import BScroll from "better-scroll";

export default {
  name: "Search",
  mounted() {
    this.$store.dispatch("reqSearchGoods", () => {
      this._initBScroll();
    });
  },
  computed: {
    ...mapState(["searchgoods"])
  },
  components: {
    SearchNav
  },
  watch: {
    searchgoods() {
      // this.$nextTick(() => {
      //   this._initBScroll();
      // });
    }
  },
  methods: {
    /* eslint-disable */

    _initBScroll() {
      let leftScroll = new BScroll(".menu-wrapper", {});
      let RightScroll = new BScroll(".shop-wrapper", {});
    }
  }
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixins.styl';

.Search {
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;

  .shop {
    display: flex;
    position: absolute;
    top: 60px;
    bottom: 50px;
    width: 100%;
    background-color: #ffffff;
    overflow: hidden;

    .menu-wrapper {
      background-color: #f9f9f9;
      width: 80px;
      flex: 0 0 80px;

      .menu-item {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: lighter;
        color: #666666;
        position: relative;
      }

      .current {
        color: #e02e24;
        background-color: #ffffff;
      }

      .current::before {
        content: '';
        background-color: #e02e24;
        width: 4px;
        height: 30px;
        position: absolute;
        left: 0;
      }
    }

    .shop-wrapper {
      flex: 1;
      background-color: #ffffff;

      .shops-title {
        display: flex;
        flex-direction: row;
        padding: 0 10px;
        height: 44px;
        align-items: center;
        justify-content: space-between;
        color: #999;

        a {
          color: #999;
          text-decoration: none;
          font-weight: lighter;
        }
      }

      .phone-type {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        border-bottom-1px(#e6e6e6);

        li {
          width: 33.3%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 5px 0;

          img {
            width: 70%;
          }
        }
      }

      .shop-items {
        display: flex;
        flex-wrap: wrap;

        li {
          display: flex;
          flex-direction: column;
          width: 33.3%;
          height: 90px;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          font-weight: lighter;
          color: #666;

          img {
            width: 60%;
            height: 60%;
            margin-bottom: 5px;
          }
        }
      }
    }
  }
}
</style>
