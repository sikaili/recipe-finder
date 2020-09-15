<template>
  <v-app
    id="app"
  >
    <the-navigation-component />
    <router-view />
    <div
      v-if="loading"
      class="Loader"
    >
      <p class="Loader__text">
        loading...
      </p>
    </div>
    </the-navigation-components>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import dataMxn from '@/js/data';
import TheNavigationComponent from '@/components/TheNavigation.vue';

export default {
  name: 'App',
  components: {
    TheNavigationComponent,
  },
  mixins: [dataMxn],
  computed: {
    ...mapGetters(['loading']),
  },
  beforeCreate() {
    this.$store.dispatch('setLoading', true);
  },
  created() {
    this.dataMxn.getRecipes();
  },
  mounted() {
    this.$store.dispatch('setLoading', false);
  },

};
</script>

<style lang="scss">
#app {
  text-align: center;
}

.Loader {
  position: fixed;
  top:0;
  right:0;
  width: 100%;
  height: 100%;
  background: rgba(127,127,127,0.6);

  &__text {
    animation-duration: 2s;
    animation-name: slidein;
    animation-iteration-count: infinite;
    font-size: 30px;
    margin-top: 50%;
    color: white;
  }

  @keyframes slidein {
    from {
      opacity: 0.1;
      margin-top: 60%;
    }

    70% {
      opacity: 1;
      margin-top: 50%;
    }

    to {
      opacity: 0;
      margin-top: 40%;
    }
  }
}
</style>
