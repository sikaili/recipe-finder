<template>
  <div>
    <search-component />
    <recipes-component />
  </div>
</template>

<script>
import RecipesComponent from '@/components/Recipes.vue';
import SearchComponent from '@/components/Search.vue';

export default {
  components: {
    RecipesComponent,
    SearchComponent,
  },
};
</script>

<style>
</style>
