import ajax from './ajax'

const BASE_URL = 'http://127.0.0.1:3000';

// 2.1 请求首页轮播图
export const getHomeCasual = () => ajax(BASE_URL + '/api/homecasual')

// 2.2 请求首页Nav
export const getHomeNav = () => ajax(BASE_URL + '/api/homenav')

// 2.3 请求首页商品数据
export const getHomeShopList = () => ajax(BASE_URL + '/api/homeshoplist')

// 2.3 请求推荐页数据
export const getRecommendShopList = () => ajax(BASE_URL + '/api/recommendshoplist')

