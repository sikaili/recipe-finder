<template>
  <div
    :class="{'red lighten-3': type==='saved',
             'grey lighten-3': type!=='saved'}"
  >
    <h2
      v-if="recipes && recipes.length===0 && type!=='saved'"
      class="Recipes__empty pt-10 pb-4 headline"
    >
      No recipes found, please try searching something else
      ...
    </h2>
    <h2
      v-if="type==='saved' && savedRecipes.length>0"
      class="white--text pt-4 pb-4 headline red lighten-2"
    >
      My favorite recipes:
    </h2>
    <div class="Recipes">
      <div
        v-for="(item,index) in (type!=='saved'? recipes : savedRecipes)"
        :key="index + 'recipes'"
        class="Recipes__item"
      >
        <v-card
          class="mx-auto"
          max-width="250"
          @click="goToDetailView(item)"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            :src="'https://spoonacular.com/recipeImages/' + item.image"
          />

          <v-card-subtitle class="pb-0 Recipes__title">
            {{ item.title }}
          </v-card-subtitle>
          <v-card-actions>
            <v-btn
              icon
              :color="isSaved(item) ? 'pink':'#ddd'"
              @click.capture.stop="dataMxn.toggleItemLocal(item)"
            >
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
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
      this.dataMxn.getRecipeDetail(item.id);
      this.$router.push(`/detail/${item.id}`);
      this.$store.dispatch('setCurrentRecipe', item);
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
    padding: 16px 0 0 0;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    &__invisible {
      margin: 16px;
      width: 250px;
      height: 0;
    }

    &__title {
      white-space: nowrap;
      max-width: 200px;
      text-overflow: ellipsis;
      clear: both;
      display: inline-block;
      overflow: hidden;
    }

    &__item {
      justify-self: flex-start;
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      font-size: 14px;
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
