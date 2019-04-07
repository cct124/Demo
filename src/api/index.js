import ajax from './ajax'

const BASE_URL = 'http://127.0.0.1:3000';

// 2.1 请求首页轮播图
export const getHomeCasual = () => ajax(BASE_URL + '/api/homecasual')

// 2.2 请求首Nav
export const getHomeNav = () => ajax(BASE_URL + '/api/homenav')

