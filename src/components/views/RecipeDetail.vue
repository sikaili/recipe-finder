<template>
  <div>
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
    <h3>Preparation</h3>
    <ol class="RecipeDetail__steps">
      <li
        v-for="(step,index) in recipeInformation.analyzedInstructions[0].steps"
        :key="index + 'step'"
        class="RecipeDetail__step"
      >
        {{ step.step }}
      </li>
    </ol>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import dataMxn from '@/js/data';

export default {
  name: 'RecipeDetail',
  components: {
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
