import Vue from 'vue'
import App from './App.vue'
import ViewPosts from './components/pages/ViewPosts.vue';
import PostPage from './components/pages/PostPage.vue';
import ViewFavs from './components/pages/ViewFavs.vue';
import SubmitComplaint from './components/pages/SubmitComplaint.vue';
import VueRouter from 'vue-router';
import store from './store'
import Vuelidate from 'vuelidate'

Vue.use(VueRouter);
Vue.use(Vuelidate)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: ViewPosts, name: 'home', props:{default: true, home: true}},
  { path: '/post/:id', component: PostPage, name: 'post', props:true},
  { path: '/category/:category', component: ViewPosts, name: 'category', props:true},
  { path: '/tag/:tag', component: ViewPosts, name: 'tag', props:true},
  { path: '/favorites', component: ViewFavs, name: 'favorites', props:{default: true, favorites: true}},
  { path: '/complain', component: SubmitComplaint, name: 'complain', props:{default: true}}
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  store: store,
  router: router,
  render: h => h(App),
}).$mount('#app')