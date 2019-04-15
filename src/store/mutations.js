import { HOME_CASUAL, HOME_NAV, HOME_SHOP_LIST, RECOMMEND_SHOP_LIST, SEARCH_GOODS, USER_INFO, RESET_USER_INFO, CART_USER_INFO, SELECTED_ALL_GOODS } from './mutation-types'

export default {
    [HOME_CASUAL](state, { homecasual }) {
        state.homecasual = homecasual
    },
    [HOME_NAV](state, { homenav }) {
        state.homenav = homenav
    },
    [HOME_SHOP_LIST](state, { homeshoplist }) {
        state.homeshoplist = homeshoplist
    },
    [RECOMMEND_SHOP_LIST](state, { recommendshoplist }) {
        state.recommendshoplist = state.recommendshoplist.concat(recommendshoplist);
    },
    [SEARCH_GOODS](state, { searchgoods }) {
        state.searchgoods = searchgoods
    },
    [USER_INFO](state, { userInfo }) {
        state.userInfo = userInfo
    },
    [RESET_USER_INFO](state) {
        state.userInfo = {};
    },
    [CART_USER_INFO](state, { cartGoods }) {
        state.cartGoods = cartGoods;
    },
    [SELECTED_ALL_GOODS](state, { isSelected }) {
        state.cartGoods.forEach((goods) => {
            goods.checked = !isSelected
        });
    }
}