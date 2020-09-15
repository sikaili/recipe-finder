<template>
  <div>
    <search-component />
    <recipes-component
      type="general"
      :recipes="recipes"
    />
    <recipes-component
      type="saved"
      :recipes="savedRecipes"
    />
  </div>
</template>

<script>

import RecipesComponent from '@/components/Recipes.vue';
import SearchComponent from '@/components/Search.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    RecipesComponent,
    SearchComponent,
  },
  computed: {
    ...mapGetters(['recipes', 'savedRecipes']),

  },
};
</script>
