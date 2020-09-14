<template>
  <div>
    <h2
      v-if="recipes && recipes.length===0"
      class="Recipes__empty"
    >
      No recipes found, please try searching something else
    </h2>
    <h2 v-if="type==='saved' && savedRecipes.length>0">
      my favorite recipes:
    </h2>

    <div class="Recipes">
      <div
        v-for="(item,index) in (type!=='saved'? recipes : savedRecipes)"
        :key="index + 'recipes'"
        class="Recipes__item"
      >
        <a
          class="Recipes__itemImageContainer"
          @click="goToDetailView(item)"
        >
          <img :src="'https://spoonacular.com/recipeImages/' + item.image">
        </a>
        <div>
          <p>{{ item.title }}</p>
          <p @click="toggleItemLocal(item)">
            {{ isSaved(item) }}
          </p>
        </div>
      </div>
      <div
        v-for="(item, index) in [0,0,0]"
        :key="index + 'placeholder'"
        class="Recipes__invisible"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import dataMxn from '@/js/data';

export default {
  name: 'Recipes',
  components: {
  },
  mixins: [dataMxn],
  props: {
    type: {
      default: '',
      type: String,
    },
  },
  computed: {
    ...mapGetters(['recipes', 'savedRecipes', 'isSaved']),
  },
  created() {
  },
  methods: {
    ...mapActions([]),
    goToDetailView(item) {
      console.log(item.id);
      this.dataMxn.getRecipeDetail(item.id);
      this.$router.push(`/detail/${item.id}`);
    },
    toggleItemLocal(item) {
      this.$store.dispatch('setSavedRecipes', { data: item, delete: this.isSaved(item) });
    },
  },
};
</script>

<style lang="scss" scoped>
.Recipes {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    &__invisible {
        margin: 16px;
        width: 250px;
        height: 0;
    }

    &__item {
        justify-self: flex-start;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        font-size: 14px;
        border: 1px solid #2c3e50;
        margin: 16px;

        &ImageContainer {
            max-height: 200px;
            max-width: 250px;
            overflow: hidden;
        }

        p {
            max-width: 150px;
        }

        img {
            align-self: center;
            max-height: 300px;
            width: 300px;

            &:before {
              font-size: 48px;
              color: white;
              padding-top: 10%;
              content: '404';
              display: block;
              height: 300px;
              width: 250px;
              background-color: #eee;
            }
          }
    }
}
</style>
