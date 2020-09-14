<template>
  <div class="Search">
    <div class="Search__wrapper">
      <input
        v-model="input"
        v-debounce:1000ms="getAutocomplete"
        class="Search__input"
        @keyup.enter="getRecipes"
      >
      <ul class="Search__autocomplete">
        <li
          v-for="(item, index) in list"
          :key="index"
          @click="goToDetailView(item)"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
    <button
      class="Search__button"
      @click="getRecipes"
    >
      Search
    </button>
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
    ...mapGetters(['recipes']),
  },
  methods: {
    getRecipes() {
      this.list = [];
      this.dataMxn.getRecipes(this.input);
    },
    goToDetailView(item) {
      console.log(item.id);
      this.dataMxn.getRecipeDetail(item.id);
      this.$router.push(`/detail/${item.id}`);
    },
    getAutocomplete() {
      this.dataMxn.getAutocomplete(this.input).then((res) => {
        console.log(res);
        this.list = res.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .Search {
    max-width: 960px;
    font-size: 36px;
    display: flex;
    justify-content: center;
    margin: 16px auto;

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
