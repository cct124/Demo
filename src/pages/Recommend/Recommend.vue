<template>
  <div class="recommend-container" v-if="recommendshoplist.length > 0">
    <ul class="recommend">
      <shop-list v-for="(item, index) in recommendshoplist" :item="item" :key="index"/>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ShopList from "./../../components/ShopList/ShopList";
import BScroll from "better-scroll";
import { Indicator } from "mint-ui";

export default {
  name: "Recommend",
  data() {
    return {
      page: 1,
      count: 20
    };
  },
  mounted() {
    Indicator.open("加载中...");
    // console.log(Indicator.open());

    this.$store.dispatch("reqRecommendShopList", {
      page: this.page,
      count: this.count,
      callback: () => {
        Indicator.close();
      }
    });
  },
  computed: {
    ...mapState(["recommendshoplist"])
  },
  components: {
    ShopList
  },
  watch: {
    recommendshoplist() {
      this.$nextTick(() => {
        this.page += 1;
        this._initBScroll();
        Indicator.close();
      });
    }
  },
  methods: {
    _initBScroll() {
      this.listScroll = new BScroll(".recommend-container", {
        scrollY: true,
        probeType: 3
      });
      this.listScroll.on("touchEnd", pos => {
        if (pos.y >= 50) {
          console.log("页面刷新");
        }
        if (this.listScroll.maxScrollY > pos.y + 50) {
          console.log("下拉加载");
          Indicator.open("加载中...");
          this.$store.dispatch("reqRecommendShopList", {
            page: this.page,
            count: this.count
          });
        }
        console.log(this.listScroll.maxScrollY, pos.y);
      });
      this.listScroll.on("scrollEnd", () => {
        this.listScroll.refresh();
      });
    }
  }
};
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.recommend-container {
  background: #F5F5F5;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .recommend {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: #F5F5F5;
    padding-bottom: 50px;
  }
}
</style>
