const global_data = {
    state: {
        isLoading: false,
        arrLoading: [],
        isDisableRedirectPage: false
    },
    getters: {
        isLoading: state => {
            return state.isLoading;
        },
        isDisableRedirectPage: state => {
            return state.isDisableRedirectPage;
        }
    },
    mutations: {
        LOAD(state, data) {
            state.isLoading = true;
            state.arrLoading.push(data);
        },
        UNLOAD(state, data) {
            state.arrLoading = state.arrLoading.filter(x => x != data);
            if (state.arrLoading.length > 0) {
                return;
            }
            state.isLoading = false;
        },
        DISABLE_REDIRECT_PAGE(state, data) {
            state.isDisableRedirectPage = data;
        },

    },
    actions: {
        load({ commit }, data) {
            commit('LOAD', data);
        },
        unload({ commit }, data) {
            commit('UNLOAD', data);
        },
        isDisableRedirectPage({ commit }, data) {
            commit('DISABLE_REDIRECT_PAGE', data);
        }
    }
}
export default global_data;
