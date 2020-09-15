<template>
  <div class="Navigation">
    <div class="Navigation__container">
      <v-btn
        color="grey lighten-3"
        class="mr-2"
        @click.capture.stop="handleClickHome()"
      >
        <v-icon>
          mdi-home
        </v-icon>
      </v-btn>
      <v-btn
        color="grey lighten-3"
        class="ml-2"
        @click.capture.stop="scrollTo('js-saved')"
      >
        <v-icon>
          mdi-heart-circle
        </v-icon>
      </v-btn>
    </div>
    <div class="Navigation__placeholder grey lighten-3" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import dataMxn from '@/js/data';

export default {
  name: 'TheNavigation',
  mixins: [dataMxn],
  computed: {
    ...mapGetters(['loading']),
  },
  methods: {
    handleClickHome() {
      if (this.$route.path !== '/') {
        this.$router.push({ path: '/' });
      } else {
        this.scrollTo('js-search');
      }
    },
    scrollTo(className) {
      document.querySelector(`.${className}`).scrollIntoView();
    },
  },
};
</script>

<style lang="scss">
.Navigation {
  &__container{
    position: fixed;
    z-index: 1000;
    width: 100%;
    margin: 16px auto;
    bottom:0;
    display: flex;
    flex-flow: row;
    justify-content: center;
  }

  &__placeholder {
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
        opacity: 0;

    position: fixed;
    height: 72px;
  }
}

</style>
