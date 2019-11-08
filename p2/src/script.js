import Vue from 'vue';

Vue.component('game-controls', require('./components/GameControls.vue').default);
Vue.component('game-results', require('./components/GameResults.vue').default);
Vue.component('score-box', require('./components/ScoreBox.vue').default);

let app = new Vue({
  el: "#app"
});
