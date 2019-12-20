<template>
  <div id="app">
    <h1>The Blog of Blogs</h1>
    <h3>Grievances Filed: {{complaints}}</h3>
    <nav id="navigation">
      <ul>
        <li>
          <router-link exact :to="{ name: 'home' }">Home</router-link>
        </li>
        <li>
          <router-link data-test="favorites-link" exact :to="{ name: 'favorites' }">Favorites</router-link>
        </li>
        <li>
          <router-link data-test="complaint-link" exact :to="{ name: 'complain' }">Complain</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  computed: {
    complaints: function() {
      return this.$store.state.complaints;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#navigation ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#navigation li {
  text-decoration: none;
  margin-right: 2em;
}
</style>
