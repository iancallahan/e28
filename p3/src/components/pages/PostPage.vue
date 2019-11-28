<template>
  <div id="post-view">
    <h2>{{title}}</h2>
    <div class="post-meta">Published {{date}} in <router-link exact :to='{ name: "category", category: category  }'>{{category}}</router-link></div>
    <img src="{{image}}" class="post-image">
    <div class="post-body">{{body}}</div>
    <ul class="post-tags"> 
        <li class="post-tag" v-for='tag in tags' :key='tag'>
            <router-link exact :to='{ name: "tag", tag:tag }'>{{tag}}</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
