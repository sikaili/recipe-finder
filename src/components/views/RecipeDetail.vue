<template>
  <div>
    <the-recipe-detail />
    <recipes-component type="saved" />
  </div>
</template>

<script>
import RecipesComponent from '@/components/Recipes.vue';
import TheRecipeDetail from '@/components/TheRecipeDetail.vue';

export default {
  components: {
    RecipesComponent,
    TheRecipeDetail,
  },
};
</script>
