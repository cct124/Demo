<template>
  <div class="select-login">
    <div class="bottom">
      <img src="./images/lk_logo_sm.png" width="200">
    </div>
    <h4>选择登陆方式</h4>
    <router-link tag="button" to="/login" class="login-btn">手机登陆</router-link>
    <router-link tag="button" to="/home" class="login-back">返回</router-link>
  </div>
</template>

<script>
export default {
  name: "SelectLogin"
};
</script>

<style scoped lang="stylus">
.select-login {
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .login-btn {
    width: 80%;
    height: 38px;
    background-color: purple;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    color: #fff;
    margin-top: 30px;
  }

  .login-back {
    width: 80%;
    height: 38px;
    background-color: transparent;
    border: 1px solid #980f98b0;
    border-radius: 5px;
    font-size: 20px;
    color: #bb1cbb;
    margin-top: 30px;
  }

  .bottom {
    position: fixed;
    top: 130px;
    left: 50%;
    margin-left: -100px;
  }
}
</style>