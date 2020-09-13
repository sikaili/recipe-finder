<template>
  <div>
    <input
      v-model="input"
      v-debounce:800ms="getRecipes"
    >
    <button @click="getRecipes" />
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
  watch: {
    input() {
    },
  },
  methods: {
    getRecipes() {
      this.dataMxn.getRecipe(this.input);
    },
  },
};
</script>

<style>
</style>
