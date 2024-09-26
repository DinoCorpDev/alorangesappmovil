const state = {
    items: [],
  };
  
  const mutations = {
    SET_BREADCRUMB_ITEMS(state, items) {
      state.items = items;
    },
    ADD_BREADCRUMB_ITEM(state, item) {
      state.items.push(item);
    },
    RESET_BREADCRUMB_ITEMS(state) {
      state.items = [];
    }
  };
  
  const actions = {
    setBreadcrumbItems({ commit }, items) {
      commit("SET_BREADCRUMB_ITEMS", items);
    },
    addBreadcrumbItem({ commit }, item) {
      commit("ADD_BREADCRUMB_ITEM", item);
    },
    resetBreadcrumbItems({ commit }) {
      commit("RESET_BREADCRUMB_ITEMS");
    }
  };
  
  const getters = {
    breadcrumbItems: (state) => state.items,
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
  };