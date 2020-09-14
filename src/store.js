import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const state = {
  recipes: [],
  recipeInformation: {},
  savedRecipes: JSON.parse(localStorage.getItem('saved-recipes')) || [],
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
  SET_SAVEDRECIPES(state, payload) {
    if (payload && payload.data) {
      const savedIds = state.savedRecipes.map((a) => a.id);
      const index = savedIds.indexOf(payload.data.id);
      if (payload.delete && index > -1) {
        state.savedRecipes.splice(index, 1);
      } else if (index === -1) {
        state.savedRecipes.push(payload.data);
      }
      localStorage.setItem('saved-recipes', JSON.stringify(state.savedRecipes));
    }
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
  setSavedRecipes(context, payload) {
    context.commit('SET_SAVEDRECIPES', payload);
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
  savedRecipes(state) {
    return state.savedRecipes;
  },
  isSaved(state) {
    return (item) => state.savedRecipes.map((a) => +a.id).indexOf(+item.id) > -1;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
