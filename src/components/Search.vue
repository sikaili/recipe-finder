<template>
  <div class="Search">
    <input
      v-model="input"
      v-debounce:800ms="getRecipes"
      class="Search__input"
    >
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
    };
  },
  computed: {
    ...mapGetters(['recipes']),
  },
  methods: {
    getRecipes() {
      this.dataMxn.getRecipes(this.input);
    },
  },
};
</script>

<style lang="scss" scoped>
  .Search {
    max-width: 960px;
    font-size: 36px;
    display: flex;
    justify-content: flex-end;
    margin: 16px;

    &__input {
      font-size: 18px;
      width: 20%;
      height: 46px;
      padding: 0;
      border: 1px solid black;
    }

    &__button {
      font-size: 18px;
      // width: 20%;
      height: 48px;
      border: none;
      color: white;
      background-color: #000;
      // border: 1px solid black;
    }
  }
</style>
