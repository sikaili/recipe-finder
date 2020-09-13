import axios from 'axios';

const API_KEY = 'a1539029eaec433aa86c4be97c2ad8e6';

export default {
  computed: {
    dataMxn() {
      return {
        getRecipes: (search) => {
          axios
            .get(
              `https://api.spoonacular.com/recipes/search?query=${search}&apiKey=${API_KEY}`,
            )
            .then((res) => {
              const recipes = res.data.results;
              const image_URI = res.data.baseUri;
              console.log(res.data);
              this.$store.dispatch('setRecipes', recipes);
              // this.setState({ recipes, imageURI: image_URI });
            });
        },
        getRecipeDetail: (id) => {
          axios
            .get(
              `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${API_KEY}`,
            )
            .then((res) => {
              console.log(res.data);
              this.$store.dispatch('setRecipeInformation', res.data);
            // this.setState({ recipes, imageURI: image_URI });
            });
        },
      };
    },
  },
};
