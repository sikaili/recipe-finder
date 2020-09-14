<template>
  <div>
    <button @click="$router.go(-1)">
      Back
    </button>
    <h2
      v-if="!recipeInformation || (recipeInformation && !recipeInformation.title)"
      @click="$router.go(-1)"
    >
      Ooops the recipe is not found, please go back
    </h2>
    <template v-else>
      <h1>{{ recipeInformation.title }}</h1>
      <p>Preparation time: {{ recipeInformation.readyInMinutes }} mins</p>
      <img
        class="RecipeDetail__img"
        :src="recipeInformation.image"
      >
      <h3>Ingredients</h3>
      <ul class="RecipeDetail__ingredients">
        <li
          v-for="(ingredient,index) in recipeInformation.extendedIngredients"
          :key="index + 'ingre'"
          class="RecipeDetail__ingredient"
        >
          {{ ingredient.name }}: {{ ingredient.amount + ' ' + ingredient.unit }}
        </li>
      </ul>
      <template v-if="recipeInformation.analyzedInstructions && recipeInformation.analyzedInstructions.length > 0">
        <h3>Preparation</h3>
        <ol class="RecipeDetail__steps">
          <li
            v-for="(step, index) in recipeInformation.analyzedInstructions[0].steps"
            :key="index + 'step'"
            class="RecipeDetail__step"
          >
            {{ step.step }}
          </li>
        </ol>
      </template>
    </template>
    <recipes-component type="saved" />
  </div>
</template>

<script>
import RecipesComponent from '@/components/Recipes.vue';

import { mapGetters } from 'vuex';
import dataMxn from '@/js/data';

export default {
  name: 'RecipeDetail',
  components: {
    RecipesComponent,
  },
  mixins: [dataMxn],
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['recipes', 'recipeInformation']),
  },
  watch: {
    input() {
    },
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.RecipeDetail {
  &__img {
    width: 70%;
    max-width: 400px;
  }

  &__ingredients {
    padding: 0 24px 24px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  &__ingredient{
    background:#eee;
    margin: 8px 16px;
    padding: 4px;
    display: inline-block;
  }

  &__steps{
    margin: 0 auto 48px;
    max-width: 768px;
    text-align: left;
  }

  &__step {
    margin: 16px 24px;
  }
}
</style>
