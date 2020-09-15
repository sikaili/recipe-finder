<template>
  <div class="RecipeDetail">
    <v-btn
      color="grey lighten-3"
      class="mt-10 mb-10"
      @click="$router.go(-1)"
    >
      Back
      <v-icon right>
        mdi-arrow-left
      </v-icon>
    </v-btn>
    <h2
      v-if="!recipeInformation || (recipeInformation && !recipeInformation.title)"
      class="mt-10 mb-10 headline"
      @click="$router.go(-1)"
    >
      Ooops the recipe is not found, please go back...
    </h2>
    <template v-else>
      <h1>{{ recipeInformation.title }}</h1>
      <p>Preparation time: {{ recipeInformation.readyInMinutes }} mins</p>
      <img
        class="RecipeDetail__img"
        :src="recipeInformation.image"
        @click.capture.stop="dataMxn.toggleItemLocal(currentRecipe)"
      >
      <v-btn
        icon
        :color="isSaved(currentRecipe) ? 'pink':'#ddd'"
        class="mb-5"
        @click.capture.stop="dataMxn.toggleItemLocal(currentRecipe)"
      >
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <h3>
        Ingredients
      </h3>
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import dataMxn from '@/js/data';

export default {
  name: 'RecipeDetail',
  mixins: [dataMxn],
  data() {
    return {
      similarRecipes: [],
    };
  },
  computed: {
    ...mapGetters(['recipes', 'recipeInformation', 'currentRecipe', 'isSaved']),
  },
};
</script>

<style lang="scss" scoped>
.RecipeDetail {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  &__img {
    width: 70%;
    max-width: 400px;
    margin-bottom: 24px;
  }

  &__ingredients {
    padding: 12px 24px 24px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  &__ingredient {
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
