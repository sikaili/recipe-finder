<template>
  <div class="Search red lighten-4">
    <v-card
      class="Search__card"
      color="red lighten-2"
      dark
    >
      <v-card-title class="headline red lighten-3">
        Search for recipes
      </v-card-title>
      <v-card-text>
        <v-autocomplete
          v-debounce:1000ms="getAutocomplete"
          :search-input.sync="input"
          :loading="loading"
          color="white"
          hide-no-data
          hide-selected
          item-text="Description"
          item-value="Burger"
          label="Recipes"
          placeholder="Start typing to Search"
          prepend-icon="mdi-database-search"
          return-object
          @blur="emptyList"
          @keyup.enter="getRecipes"
        />
      </v-card-text>
      <v-divider />
      <v-expand-transition>
        <v-list
          v-if="list.length > 0"
          class="red lighten-3"
        >
          <v-list-item
            v-for="(field, i) in list"
            :key="i"
          >
            <v-list-item-content>
              <v-list-item-title v-text="field.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-expand-transition>
      <v-card-actions>
        <v-spacer />
        <v-btn
          :disabled="!input"
          color="grey darken-3"
          @click="model = null"
        >
          Clear
          <v-icon right>
            mdi-close-circle
          </v-icon>
        </v-btn>
        <v-btn
          :disabled="!input"
          color="blue lighten-1"
          @click.capture.stop="getRecipes"
        >
          Search
          <v-icon right>
            mdi-keyboard-return
          </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import dataMxn from '@/js/data';

export default {
  name: 'Search',
  components: {
  },
  mixins: [dataMxn],
  data() {
    return {
      input: '',
      list: [],
    };
  },
  computed: {
    ...mapGetters(['recipes', 'loading']),
  },
  methods: {
    getRecipes() {
      this.list = [];
      this.dataMxn.getRecipes(this.input);
    },
    goToDetailView(item) {
      this.dataMxn.getRecipeDetail(item.id);
      this.$router.push(`/detail/${item.id}`);
    },
    getAutocomplete() {
      this.dataMxn.getAutocomplete(this.input).then((res) => {
        this.list = res.data;
      });
    },
    emptyList() {
      setTimeout(() => {
        this.list = [];
      }, 200);
    },
  },
};
</script>

<style lang="scss" scoped>
  .Search {
    font-size: 36px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 36px 16px;

    &__card {
      max-width: 820px;
      width: 100%;
    }

    &__wrapper {
      padding: 0 0 0 0;
      margin: 0 0 0 0;
      display: flex;
      flex-direction: column;
    }

    &__autocomplete {
      width: 182px;
      font-size: 14px;
      text-align: left;
      list-style: none;
      padding: 0;
      margin-top: -2px;

      li {
        padding-left: 8px;
        line-height: 28px;
        border: 1px solid grey;
        border-top: none;
      }
    }

    &__input {
      width: 172px;
      font-size: 18px;
      height: 30px;
      padding: 0 0 0 8px;
      border: 1px solid #2c3e50;
    }

    &__button {
      font-size: 14px;
      height: 32px;
      width: 70px;
      border: none;
      color: white;
      background-color: #2c3e50;
    }
  }
</style>
