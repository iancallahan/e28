<template>
  <div class="post">
    <h2><router-link exact :to='{ name: "post", post:index }'>{{title}}</router-link></h2>
    <div class="post-meta">Published {{date}} in <router-link exact :to='{ name: "category", category: category  }'>{{category}}</router-link></div>
  </div>
</template>