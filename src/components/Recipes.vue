<template>
  <div class="Recipes">
    <div
      v-for="(item,index) in recipes"
      :key="index + 'recipes'"
      class="Recipes__item"
      @click="goToDetailView(item)"
    >
      <div class="Recipes__itemImageContainer">
        <img :src="'https://spoonacular.com/recipeImages/' + item.image">
      </div>
      <div>
        <p>{{ item.title }}</p>
        <div />
      </div>
    </div>
    <div
      v-for="(item, index) in [0,0,0]"
      :key="index + 'placeholder'"
      class="Recipes__invisible"
    />
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
  computed: {
    ...mapGetters(['recipes']),
  },
  methods: {
    ...mapActions([]),
    goToDetailView(item) {
      console.log(item.id);
      this.dataMxn.getRecipeDetail(item.id);
      this.$router.push(`/detail/${item.id}`);
    },
  },
};
</script>

<style scoped lang="scss">
.Recipes{
  max-width: 960px;
  margin:0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  &__invisible {
    margin: 16px;
    width: 250px;
    height:0;
  }

  &__item {
    justify-self: flex-start;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    font-size: 14px;
    border: 1px solid black;
    margin: 16px;

    &ImageContainer {
      max-height: 200px;
      max-width: 250px;
      overflow: hidden;

    }

    p {
      max-width: 150px;
    }

    &Image {

    }

    img {
      align-self: center;
      width: auto;
      max-height: 300px;
      width: 300px;
    }
  }
}
</style>
