<template>
  <div class="user-detail">
    <div class="user-detail-top">基本信息</div>
    <div class="user-detail-group">
      <div class="user-icon">
        <span>头像</span>
        <img src="./images/me_icon.png" alt>
      </div>
      <div class="user-item">
        <span>手机</span>
        <span>{{ user_phone }}</span>
      </div>
      <div class="user-item">
        <span>昵称</span>
        <span>
          <input type="text" v-model="user_name">
        </span>
      </div>
      <div class="user-item" @click="sheetVisible = true">
        <span>性别</span>
        <span>{{ user_sex }}</span>
      </div>
      <div class="user-item">
        <span>常住地</span>
        <span>
          <input type="text" v-model="user_address">
        </span>
      </div>
      <div class="user-item" @click="$refs.picker.open()">
        <span>生日</span>
        <span>{{ user_birthday }}</span>
      </div>
      <div class="user-item">
        <span>个性签名</span>
        <span>
          <input type="text" v-model="user_sign">
        </span>
      </div>
      <button @click="changeUser">修改</button>
    </div>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    <mt-datetime-picker
      ref="picker"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      :startDate="startDate"
      :endDate="endDate"
      @confirm="handleBirthday"
    ></mt-datetime-picker>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Toast } from "mint-ui";
import { changeUserInfo } from "./../../api/index.js";
import moment from "moment";
export default {
  name: "MeDetail",
  data() {
    return {
      user_sign: "",
      user_address: "",
      user_name: "",
      user_sex: "",
      user_phone: "",
      user_birthday: "",
      sheetVisible: false,
      actions: [
        {
          name: "男",
          method: this.selectSex
        },
        {
          name: "女",
          method: this.selectSex
        }
      ],
      startDate: new Date("1960-01-01"),
      endDate: new Date()
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    ...mapActions(["getUserInfo"]),
    selectSex(props) {
      this.user_sex = props.name;
      console.log(this.user_sex);
    },
    handleBirthday(props) {
      this.user_birthday = moment(props).format("YYYY年MM月DD日");
    },
    getUserInfo() {
      this.user_sign = this.userInfo.user_sign;
      this.user_address = this.userInfo.user_address;
      this.user_name = this.userInfo.user_name;
      this.user_sex = this.userInfo.user_sex;
      this.user_phone = this.userInfo.user_phone;
      this.user_birthday = this.userInfo.user_birthday;
    },
    async changeUser() {
      let result = await changeUserInfo({
        id: this.userInfo.id,
        user_sign: this.user_sign,
        user_address: this.user_address,
        user_name: this.user_name,
        user_sex: this.user_sex,
        user_phone: this.user_phone,
        user_birthday: this.user_birthday
      });
      Toast({
        message: result.message
      });

      if (result.success_code === 200) {
        this.$router.replace("/me");
        this.getUserInfo();
      }
    }
  },
  mounted() {
    this.getUserInfo();
  }
};
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.user-detail {
  width: 100%;
  height: 100%;

  .user-detail-top {
    height: 60px;
    line-height: 60px;
    padding-left: 10px;
    font-weight: bold;
  }

  .user-detail-group {
    .user-icon {
      height: 60px;
      padding: 0 10px;
      background-color: #fff;
      border-bottom: 1px solid #e0e0e0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        width: 50px;
        border-radius: 50%;
      }
    }

    .user-item {
      height: 40px;
      padding: 0 10px;
      background-color: #fff;
      border-bottom: 1px solid #e0e0e0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      input {
        border: none;
        outline: none;
        text-align: right;
      }
    }

    button {
      width: 90%;
      height: 40px;
      line-height: 40px;
      background-color: #e9232c;
      text-align: center;
      margin: 20px 5%;
      border: none;
      font-size: 16px;
      color: #fff;
      border-radius: 10px;
    }
  }

  .right-title-color {
    color: #999;
    font-size: 14px;
  }
}
</style>