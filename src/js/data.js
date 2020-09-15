import axios from 'axios';

const API_KEY = 'a1539029eaec433aa86c4be97c2ad8e6';

export default {
  computed: {
    dataMxn() {
      return {
        getAutocomplete: (search) => axios
          .get(
            `https://api.spoonacular.com/recipes/autocomplete?number=5&query=${search}&apiKey=${API_KEY}`,
          ),
        getRecipes: (search = 'burger') => {
          this.$store.dispatch('setLoading', true);
          axios
            .get(
              `https://api.spoonacular.com/recipes/search?query=${search}&apiKey=${API_KEY}`,
            )
            .then((res) => {
              const recipes = res.data.results;
              this.$store.dispatch('setRecipes', recipes);
              this.$store.dispatch('setLoading', false);
            });
        },
        getSimilarRecipes: (id) => {
          this.$store.dispatch('setLoading', true);
          return axios
            .get(
              `https://api.spoonacular.com/recipes/${id}/similar?number=4&apiKey=${API_KEY}`,
            );
        },
        getRecipeDetail: (id) => {
          this.$store.dispatch('setLoading', true);
          axios
            .get(
              `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${API_KEY}`,
            )
            .then((res) => {
              this.$store.dispatch('setRecipeInformation', res.data);
              this.$store.dispatch('setLoading', false);
            });
        },
        toggleItemLocal: (item) => {
          this.$store.dispatch('setSavedRecipes', { data: item, delete: this.isSaved(item) });
        },
      };
    },
  },
};
