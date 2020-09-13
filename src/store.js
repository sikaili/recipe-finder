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
};
const actions = {
  setRecipes(context, payload) {
    context.commit('SET_RECIPES', payload);
  },
  setRecipeInformation(context, payload) {
    context.commit('SET_RECIPE_INFORMATION', payload);
  },
};
const getters = {
  recipes(state) {
    return state.recipes;
  },
  recipeInformation(state) {
    return state.recipeInformation;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
