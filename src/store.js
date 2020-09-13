import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const state = {
  recipes: [],
};
const mutations = {
  SET_RECIPES(state, payload) {
    state.recipes = payload;
  },
};
const actions = {
  setRecipes(context, payload) {
    context.commit('SET_RECIPES', payload);
  },
};
const getters = {
  recipes(state) {
    return state.recipes;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
