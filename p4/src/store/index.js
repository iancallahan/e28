import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        favorites: [],
        complaints: 0
    },
    mutations: {
        setFavorite(state, id) {
            if(state.favorites.includes(id)){
                state.favorites.pop(state.favorites.indexOf(id))
            }
            else {
                state.favorites.push(id);
            }
        },
        incrementComplaints(state){
            state.complaints++;
        }
    }
})