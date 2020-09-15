<template>
  <div>
    <the-recipe-detail />
    <recipes-component
      type="similar"
      :recipes="similarRecipes"
      :image-width="150"
    />
    <recipes-component
      type="saved"
      :recipes="savedRecipes"
    />
  </div>
</template>

<script>
import RecipesComponent from '@/components/Recipes.vue';
import TheRecipeDetail from '@/components/TheRecipeDetail.vue';
import dataMxn from '@/js/data';
import { mapGetters } from 'vuex';

export default {
  components: {
    RecipesComponent,
    TheRecipeDetail,
  },
  mixins: [dataMxn],
  data() {
    return {
      similarRecipes: [],
    };
  },
  computed: {
    ...mapGetters(['recipeInformation', 'currentRecipe', 'savedRecipes']),
  },
  mounted() {
    if (!this.recipeInformation || !this.recipeInformation.title) {
      this.dataMxn.getRecipeDetail(this.$route.params.id);
    }
    this.dataMxn.getSimilarRecipes(this.$route.params.id).then((res) => {
      this.similarRecipes = res.data;
      this.$store.dispatch('setLoading', false);
    });
  },
};
</script>
