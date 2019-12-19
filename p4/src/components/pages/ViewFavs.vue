<template>
<div>
  <div v-if="favorites.length > 0">
    <div v-if="initialized">
      <div class="posts">
      <div class="post" v-for="(post, index) in posts" v-bind:key="index">
        <h2><router-link exact :to='{name: "post", params: {id:post.index}}'>{{post.title}}</router-link></h2>
        <div class="post-meta">Published {{post.date}} in <router-link exact :to='{ name: "category", params: {category: post.category}}'>{{post.category.toUpperCase() + "S"}}</router-link></div>
      </div>
    </div>
    </div>
  </div>
  <div v-else>
    <p>Sorry, you don't have any favorite posts yet.</p>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: "ViewFavs",
  data() {
      return {
        posts: {},
        initialized: false,
        loading: true,
        error: ''
      }
  },
  computed: {
    favorites: function() {
        return this.$store.state.favorites
    },
  },
  watch:{
    $route (){
        this.getData();
    }
  },
  mounted: function () {
    this.getData();
  },
  methods: {
      getData: function() {
        axios.get('/db.json')
        .then((response)  =>  {
               let filteredPosts = response.data.filter(item => this.favorites.indexOf(item.index) > -1);
               this.posts = filteredPosts;
               this.initialized = true;
        }, (error)  =>  {
          this.loading = false;
          this.error = error;
        }) 
      },
    }
}
</script>