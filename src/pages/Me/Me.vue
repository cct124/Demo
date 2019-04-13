<template>
  <div class="me">
    <div v-if="userInfo.id">ME</div>
    <select-login v-else/>
  </div>
</template>

<script>
import SelectLogin from "./../Login/SelectLogin";
import { mapState } from "vuex";

export default {
  name: "Me",
  computed: {
    ...mapState(["userInfo"])
  },
  components: {
    SelectLogin
  }
};
</script>

<style scoped lang="stylus">
.me {
  height: 100%;
  width: 100%;
  background-color: purple;
}
</style>
