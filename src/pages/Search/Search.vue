<template>
  <div class="Search">
    <search-nav :isShowSearchPanel="isShowSearchPanel"/>
    <div class="shop">
      <div class="menu-wrapper">
        <ul>
          <li
            class="menu-item"
            :class="{ current:index === currentIndex }"
            v-for="(item, index) in searchgoods"
            :key="index"
            @click="clickLeftItem(index)"
            ref="menulist"
          >
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
      <div class="shop-wrapper">
        <ul ref="shopsParent">
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
    <search-panel :isShowSearchPanel="isShowSearchPanel" v-if="isShow"/>
  </div>
</template>

<script>
import SearchNav from "./children/SearchNav";
import SearchPanel from "./children/SearchPanel";
import { mapState } from "vuex";
import BScroll from "better-scroll";

export default {
  name: "Search",
  data() {
    return {
      scrollY: 0,
      rightLiTops: [],
      isShow: false
    };
  },
  mounted() {
    this.$store.dispatch("reqSearchGoods"); //或者使用CallBack回调来进行异步
  },
  computed: {
    ...mapState(["searchgoods"]),
    currentIndex() {
      const { scrollY, rightLiTops } = this;

      return rightLiTops.findIndex((liTops, index) => {
        this._leftScroll(index);
        return scrollY >= liTops && scrollY < rightLiTops[index + 1];
      });
    }
  },
  components: {
    SearchNav,
    SearchPanel
  },
  watch: {
    searchgoods() {
      this.$nextTick(() => {
        this._initBScroll();
        this._initRightLiTops();
      });
    }
  },
  methods: {
    /* eslint-disable */

    _initBScroll() {
      this.leftScroll = new BScroll(".menu-wrapper", {});
      this.rightScroll = new BScroll(".shop-wrapper", {
        probeType: 3
      });

      this.rightScroll.on("scroll", pos => {
        this.scrollY = Math.round(Math.abs(pos.y));
      });
    },

    _initRightLiTops() {
      const tempArr = [];
      let top = 0;
      tempArr.push(top);
      let allLis = this.$refs.shopsParent.getElementsByClassName("shops-li");
      [...allLis].forEach(li => {
        top += li.clientHeight;
        tempArr.push(top);
      });
      this.rightLiTops = tempArr;
    },

    clickLeftItem(index) {
      this.scrollY = this.rightLiTops[index];
      this.rightScroll.scrollTo(0, -this.scrollY, 300);
    },

    _leftScroll(index) {
      let menulists = this.$refs.menulist;
      let el = menulists[index];
      this.leftScroll.scrollToElement(el, 300, 0, -300);
    },

    isShowSearchPanel(flag) {
      this.isShow = flag;
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
        color: #f32d0c;
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
