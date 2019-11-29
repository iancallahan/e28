<template>
  <div id="post-view" v-if="initialized">
    <h2>{{title}}</h2>
    <div class="post-meta">Published {{date}} in <router-link exact :to='{ name: "category", params: {category: category}}'>{{category}}</router-link></div>
    <button v-if="!favorited" v-on:click="saveFavorite()" role="button">Favorite</button>
    <div v-else class="starred">Favorited!</div>
    <img :src="image" class="post-image">
    <div class="post-body">{{body}}</div>
    <ul class="post-tags"> 
        <li class="post-tag" v-for='(tag, index) in tags' :key='index'>
            <router-link exact :to='{ name: "tag", params: {tag: tag}}'>{{tag}}</router-link>
        </li>
    </ul>
    <div class="prev-next">
      <router-link v-if="id > 0" id="prev" exact :to='{name: "post", params: {id:id-1}}'>Previous Post</router-link>
      <router-link v-if="id < count - 1" id="next" exact :to='{name: "post", params: {id:id+1}}'>Next Post</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "PostPage",
  data() {
      return {
        title: '',
        date: '',
        image: '',
        category: '',
        body: '',
        tags: [],
        initialized: false,
        loading: true,
        error: '',
        count: 0,
        favorited: false
      }
  },
  created: function () {
    this.getData();
  },
  watch:{
    id: function () {
        this.favorited = false;
        this.getData();
    }
  },
  methods: {
      getData: function() {
        axios.get('/db.json')
        .then((response)  =>  {
            this.count = response.data.length;
            let post = response.data.find(obj => {
              return obj.index === this.id
            });
            this.title = post.title;
            this.date = post.date;
            this.body = post.body;
            this.image = post.picture;
            this.category = post.category;
            this.tags = post.tags;
            this.id = post.index;
            this.initialized = true;
        }, (error)  =>  {
          this.loading = false;
          this.error = error
        });
        if (localStorage.getItem("favorites") !== null) {
         let saved = JSON.parse(localStorage.getItem("favorites"));
         if(saved.indexOf(this.id) > -1){
           this.favorited = true;
         }
       }
      },
     saveFavorite: function() {
       let favs = [];
       if (localStorage.getItem("favorites") !== null) {
         favs = JSON.parse(localStorage.getItem("favorites"));
       }
       favs.push(this.id);
       localStorage.setItem("favorites", JSON.stringify(favs));
       this.favorited = true;
     }
    },
  props: ['id']
}
</script>