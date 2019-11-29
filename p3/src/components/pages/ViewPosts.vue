<template>
<div v-if="initialized">
  <div class="post" v-for="(post, index) in posts" v-bind:key="index">
    <h2><router-link exact :to='{name: "post", params: {id:post.index}}'>{{post.title}}</router-link></h2>
    <div class="post-meta">Published {{post.date}} in <router-link exact :to='{ name: "category", params: {category: post.category}}'>{{post.category.toUpperCase() + "S"}}</router-link></div>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: "ViewPosts",
  data() {
      return {
        posts: {},
        initialized: false,
        loading: true,
        error: ''
      }
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
            if(this.home){
              this.posts = response.data;
              }
            else if(typeof this.category !== "undefined"){
               let filteredPosts = response.data.filter(item => item.category == this.category);
                this.posts = filteredPosts;
                }
            else if(typeof this.tag !== "undefined"){
               let filteredPosts = response.data.filter(item => item.tags.indexOf(this.tag) > -1);
                this.posts = filteredPosts;
            }
            this.initialized = true;
        }, (error)  =>  {
          this.loading = false;
          this.error = error;
        }) 
      },
    },
  props: ['home','category','tag']
}
</script>