<template>
  <div class="me-setting">
    <div>
      <me-common-cell left-icon="itlike-2" left-title="免密码支付" :clickCell="dealCellClick"/>
      <me-common-cell left-icon="itlike-3" left-title="免拼单设置"/>
      <me-common-cell left-icon="itlike-2" left-title="消息接收设置"/>
    </div>
    <div class="margin">
      <me-common-cell left-icon="itlike-5" left-title="免密码支付"/>
      <me-common-cell left-icon="itlike-1" left-title="免密码支付"/>
    </div>
    <div class="margin">
      <me-common-cell left-icon="itlike-4" left-title="免密码支付"/>
    </div>
    <div class="logout" @click="dealLogout">退出登陆</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { MessageBox } from "mint-ui";
import MeCommonCell from "./MeCommonCell";
export default {
  name: "MeSetting",
  components: {
    MeCommonCell
  },
  methods: {
    ...mapActions(["getLogOut"]),
    dealCellClick(props) {
      console.log("click" + props);
    },
    dealLogout() {
      MessageBox.confirm("确定执行此操作?").then(
        () => {
          this.getLogOut();
          this.$router.replace("/home");
        },
        () => {}
      );
    }
  }
};
</script>

<style scoped>
.margin {
  margin-top: 10px;
}
.logout {
  width: 100%;
  height: 40px;
  margin-top: 10px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>