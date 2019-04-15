import { getHomeCasual, getHomeNav, getHomeShopList, getRecommendShopList, getSearchGoods, getUserInfo, getLogout, getCartsGoods } from '../api/index'
import { HOME_CASUAL, HOME_NAV, HOME_SHOP_LIST, RECOMMEND_SHOP_LIST, SEARCH_GOODS, USER_INFO, RESET_USER_INFO, CART_USER_INFO, SELECTED_ALL_GOODS } from './mutation-types'

export default {
    async reqHomeCasual({ commit }) {
        const result = await getHomeCasual()
        commit(HOME_CASUAL, { homecasual: result.message })
    },

    async reqHomeNav({ commit }) {
        const result = await getHomeNav()
        commit(HOME_NAV, { homenav: result.message.data })
    },

    async reqHomeShopList({ commit }) {
        const result = await getHomeShopList()
        commit(HOME_SHOP_LIST, { homeshoplist: result.message.goods_list })
    },

    async reqRecommendShopList({ commit }, params) {
        const result = await getRecommendShopList(params);
        commit(RECOMMEND_SHOP_LIST, { recommendshoplist: result.message });
        params.callback && params.callback();
    },

    async reqSearchGoods({ commit }, callback) {
        const result = await getSearchGoods()
        commit(SEARCH_GOODS, { searchgoods: result.message.data })
        callback && callback()
    },

    syncUserInfo({ commit }, userInfo) {
        commit(USER_INFO, { userInfo })
    },

    async getUserInfo({ commit }) {
        const results = await getUserInfo()
        if (results.success_code === 200) {
            commit(USER_INFO, { userInfo: results.message })
        }
    },

    async getLogOut({ commit }) {
        const results = await getLogout()
        if (results.success_code === 200) {
            commit(RESET_USER_INFO)
        }
    },

    async reqCartsGoods({ commit }, params) {
        const results = await getCartsGoods(params)
        if (results.success_code === 200) {
            commit(CART_USER_INFO, { cartGoods: results.message })
        }
    },

    selectedAll({ commit }, { isSelected }) {
        commit(SELECTED_ALL_GOODS, { isSelected });
    }
}