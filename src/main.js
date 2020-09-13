import Vue from 'vue';
import store from '@/store';
import router from '@/router';
import vueDebounce from 'vue-debounce';
import App from './App.vue';

Vue.use(vueDebounce, {
  listenTo: 'input',
  defaultTime: '700ms',
});

Vue.config.productionTip = false;

window.vm = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

// fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "44ff644f1emsh8da8a6ef81c2406p19e319jsnd56e44b1d5b3"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });
