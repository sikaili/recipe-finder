<template>
  <div class="Search">
    <input
      v-model="input"
      v-debounce:1000ms="getAutocomplete"
      class="Search__input"
      @keyup.enter="getRecipes"
    >
    <button
      class="Search__button"
      @click="getRecipes"
    >
      Search
    </button>
    <ul class="Search__autocomplete">
      <li
        v-for="(item, index) in list"
        :key="index"
      >
        {{ item.title }}
      </li>
    </ul>
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
      this.dataMxn.getRecipes(this.input);
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

    &__autocomplete {
      width: 180px;
    }
    &__input {
      width: 180px;
      font-size: 18px;
      height: 30px;
      padding: 0;
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
