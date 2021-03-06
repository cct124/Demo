import ajax from './ajax';

const BASE_URL = '/api';
// const BASE_URL = 'http://127.0.0.1:3000';

// 2.1 请求首页轮播图
export const getHomeCasual = () => ajax(BASE_URL + '/api/homecasual');

// 2.2 请求首页Nav
export const getHomeNav = () => ajax(BASE_URL + '/api/homenav');

// 2.3 请求首页商品数据
export const getHomeShopList = () => ajax(BASE_URL + '/api/homeshoplist');

// 2.3 请求推荐页数据
export const getRecommendShopList = (params) => ajax(BASE_URL + '/api/recommendshoplist', params);

// 2.4 请求搜索页数据
export const getSearchGoods = () => ajax(BASE_URL + '/api/searchgoods');

// 获取验证码
export const getPhoneCode = (phone) => ajax(BASE_URL + '/api/send_code', { phone });

// 手机验证码登陆
export const phoneCodeLogin = (phone, code) => ajax(BASE_URL + '/api/login_code', { phone, code }, 'POST');

// 密码登陆
export const pwdLogin = (user_name, user_pwd, captcha) => ajax(BASE_URL + '/api/login_pwd', { user_name, user_pwd, captcha }, 'POST');

// 2.4 获取已登录的用户信息
export const getUserInfo = () => ajax(BASE_URL + '/api/user_info');

// 退出登陆
export const getLogout = () => ajax(BASE_URL + '/api/logout');

// 修改用户信息
export const changeUserInfo = (params) => ajax(BASE_URL + '/api/change_user_msg', params, 'POST');

// 添加购物车
export const addGoodsToCart = (params) => ajax(BASE_URL + '/api/add_shop_cart', params, 'POST');

// 获取购物车数据
export const getCartsGoods = (params) => ajax(BASE_URL + '/api/cart_goods', params);



