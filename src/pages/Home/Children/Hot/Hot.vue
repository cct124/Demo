<template>
  <div class="hot">
    <swiper :options="swiperOption" class="rowing">
      <!-- slides -->
      <swiper-slide>
        <img src="./../../imgs/rowing/s1.png">
      </swiper-slide>
      <swiper-slide>
        <img src="./../../imgs/rowing/s2.png">
      </swiper-slide>
      <swiper-slide>
        <img src="./../../imgs/rowing/s3.png">
      </swiper-slide>
      <swiper-slide>
        <img src="./../../imgs/rowing/s4.png">
      </swiper-slide>
      <swiper-slide>
        <img src="./../../imgs/rowing/s5.png">
      </swiper-slide>
      <swiper-slide>
        <img src="./../../imgs/rowing/s6.png">
      </swiper-slide>
      <swiper-slide>
        <img src="./../../imgs/rowing/s7.png">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <hot-nav/>
  </div>
</template>

<script>

import HotNav from './HotNav'

export default {
  name: "Hot",
  components:{
    HotNav
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
  computed: {
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

  .rowing {
    img {
      width: 100%;
    }
  }
}
</style>
