<template>
  <div class="hot">
    <swiper :options="swiperOption" class="rowing" v-if="homecasual.length > 0">
      <!-- slides -->
      <swiper-slide v-for="(casual, index) in homecasual" :key="index">
        <img :src="casual.imgurl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <hot-nav/>
    <div class="hot-ad">
      <img src="./../../imgs/hot_ad/home_ad.gif" width="100%">
    </div>
    <hot-shop-list/>
  </div>
</template>

<script>
import HotNav from "./HotNav";
import HotShopList from "./HotShopList";
import { mapState } from "vuex";

export default {
  name: "Hot",
  mounted() {
    this.$store.dispatch("reqHomeCasual");
  },
  components: {
    HotNav,
    HotShopList
  },
  computed: {
    ...mapState(["homecasual"])
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false
        },
        spaceBetween: 30
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      }
    };
  },
  methods: {
    callback() {
      console.log("1");
    }
  }
};
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.hot {
  width: 100%;
  height: 100%;
  padding-top: 46px;
  background: #f5f5f5;

  .hot-ad {
    background-color: #ffffff;
    margin: 8px 0;
    padding: 5px;
  }

  .rowing {
    img {
      width: 100%;
    }
  }
}
</style>
