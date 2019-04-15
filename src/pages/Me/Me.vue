<template>
  <div class="me">
    <div v-if="userInfo.id">
      <me-top/>
    </div>
    <select-login v-else/>
  </div>
</template>

<script>
import SelectLogin from "./../Login/SelectLogin";
import { mapState } from "vuex";
import MeTop from "./MeTop";

export default {
  name: "Me",
  computed: {
    ...mapState(["userInfo"])
  },
  components: {
    SelectLogin,
    MeTop
  }
};
</script>

<style scoped lang="stylus">
.me {
  height: 100%;
  width: 100%;
  background-color: #ffffff;
}
</style>
