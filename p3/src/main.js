import Vue from 'vue'
import App from './App.vue'
import ViewPosts from './components/pages/ViewPosts.vue';
import PostPage from './components/pages/PostPage.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  { path: '/', component: ViewPosts, name: 'home', props:{default: true, home: true}},
  { path: '/post/:id', component: PostPage, name: 'post', props:true},
  { path: '/category/:category', component: ViewPosts, name: 'category', props:true},
  { path: '/tag/:tag', component: ViewPosts, name: 'tag', props:true},
  { path: '/favorites', component: ViewPosts, name: 'favorites', props:{default: true, favorites: true}}
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')