<template>
  <div class="hot-nav">
    <div class="hot-nav-content" v-if="homenav.length > 0">
      <div class="nav-content-inner">
        <a class="inner-item" v-for="(nav, index) in homenav" :key="index">
          <img :src="nav.iconurl" alt srcset>
          <span>{{ nav.icontitle }}</span>
        </a>
      </div>
    </div>
    <div class="hot-nav-bottom">
      <div class="hot-nav-bottom-inner" :style="innerBarStyle"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HotNav",
  data() {
    return {
      screenW:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth,
      scrollContentW: 720,
      bgBarW: 100,
      barXWidth: 0,
      startX: 0,
      endFlag: 0,
      barMoveWidth: 0
    };
  },
  computed: {
    ...mapState(["homenav"]),
    innerBarStyle() {
      return {
        width: `${this.barXWidth}px`,
        left: `${this.barMoveWidth}px`
      };
    }
  },
  mounted() {
    this.getBottomBarWidth();
    this.bindEvent();
  },
  methods: {
    getBottomBarWidth() {
      this.barXWidth = this.bgBarW * (this.screenW / this.scrollContentW);
    },
    bindEvent() {
      this.$el.addEventListener("touchstart", this.handleTouchStart, false);
      this.$el.addEventListener("touchmove", this.handleTouchMove, false);
      this.$el.addEventListener("touchend", this.handleTouchEnd, false);
    },
    handleTouchStart(event) {
      let touch = event.touches[0];
      this.startX = Number(touch.pageX);
    },
    handleTouchMove() {
      let touch = event.touches[0];
      let moveWidth = this.startX - Number(touch.pageX);
      this.barMoveWidth =
        (this.bgBarW / this.scrollContentW) * moveWidth + this.endFlag;
      if (this.barMoveWidth <= 0) {
        this.barMoveWidth = 0;
      } else if (this.barMoveWidth >= this.bgBarW - this.barXWidth) {
        this.barMoveWidth = Math.round(this.bgBarW - this.barXWidth);
      }
    },
    handleTouchEnd() {
      this.endFlag = this.barMoveWidth;
    }
  }
};
</script>

<style scoped lang="stylus">
.hot-nav {
  width: 100%;
  height: 180px;
  position: relative;
  background-color: #ffffff;
  padding-bottom: 10px;

  .hot-nav-content {
    width: 100%;
    overflow-x: scroll;

    .nav-content-inner {
      width: 720px;
      height: 180px;
      display: flex;
      flex-wrap: wrap;

      .inner-item {
        width: 90px;
        height: 90px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #6666 6;

        img {
          width: 40%;
          margin-bottom: 5px;
        }
      }
    }
  }

  .hot-nav-content::-webkit-scrollbar {
    display: none;
  }

  .hot-nav-bottom {
    width: 100px;
    height: 2px;
    background-color: #cccccc;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    bottom: 8px;

    .hot-nav-bottom-inner {
      position: absolute;
      left: 0;
      height: 100%;
      background-color: orangered;
      width: 0;
    }
  }
}
</style>