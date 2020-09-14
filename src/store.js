import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const state = {
  recipes: [],
  recipeInformation: {},
  loading: false,
};
const mutations = {
  SET_RECIPES(state, payload) {
    state.recipes = payload;
  },
  SET_RECIPE_INFORMATION(state, payload) {
    state.recipeInformation = payload;
  },
  SET_LOADING(state, payload) {
    state.loading = payload;
  },
};
const actions = {
  setRecipes(context, payload) {
    context.commit('SET_RECIPES', payload);
  },
  setRecipeInformation(context, payload) {
    context.commit('SET_RECIPE_INFORMATION', payload);
  },
  setLoading(context, payload) {
    context.commit('SET_LOADING', payload);
  },
};
const getters = {
  recipes(state) {
    return state.recipes;
  },
  recipeInformation(state) {
    return state.recipeInformation;
  },
  loading(state) {
    return state.loading;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
