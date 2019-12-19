<template>
  <div id="post-container">
    <div id="post-view" v-if="initialized">
      <h2>{{title}}</h2>
      <div class="post-meta">Published {{date}} in <router-link exact :to='{ name: "category", params: {category: category}}'>{{category}}</router-link></div>
      <fav-button :id="id"></fav-button>
      <img :src="image" class="post-image">
      <div class="post-body">{{body}}</div>
      <h3>Tags</h3>
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
  </div>
</template>

<script>
import axios from 'axios';
import FavButton from '../FavButton.vue'

export default {
  name: "PostPage",
  components: {FavButton},
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
      }
  },
  created: function () {
    this.getData();
  },
  watch:{
    id: function () {
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
    },
  },
  props: ['id']
}
</script>

<style>
#post-view {
  width: 700px;
}

#post-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.post-tags {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.post-tags li {
  margin-right: 1em;
}

.prev-next {
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

</style>