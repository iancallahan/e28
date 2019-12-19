<template>
   <button v-on:click="toggleFavorite()" role="button"><span v-if="!favorited">Favorite</span><span v-else>Unfavorite</span></button>
</template>

<script>
export default {
 name: "FavButton",
 computed: {
    favorites: function() {
        return this.$store.state.favorites
    },
    favorited: function() {
        if(this.favorites.includes(this.id)){
            return true;
        }
        else {
            return false;
        }
    }
 },
 methods: {
    toggleFavorite: function() {
        this.$store.commit('setFavorite', this.id);
    }
 },
 props: ['id']
}
</script>

<style>

</style>