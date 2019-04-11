<template>
  <div class="Home">
    <ly-tab v-model="selectedId" :items="items" :options="options" class="fix"></ly-tab>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  watch: {
    selectedId: function() {
      this.$router.replace({ name: this.selectedArray[this.selectedId] });
    }
  },
  data() {
    return {
      selectedId: 0,
      items: [
        { label: "热门" },
        { label: "服饰" },
        { label: "鞋包" },
        { label: "母婴" },
        { label: "百货" },
        { label: "食品" },
        { label: "内衣" },
        { label: "男装" },
        { label: "电器" }
      ],
      options: {
        activeColor: "#e9232c"
      },
      selectedArray:['hot', 'dress', 'box', 'mbaby', 'general', 'food', 'shirt', 'man', 'ele']
    };
  }
};
</script>

<style scoped lang="stylus">
.Home {
  height 100%
  width 100%
  background-color #f5f5f5
  .fix{
    position fixed
    left 0
    top 0
    z-index 3
    background-color #ffffff
  }
}
</style>
