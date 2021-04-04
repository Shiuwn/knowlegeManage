import Vue from 'vue';
import Vuex from 'vuex';
import sidebar from './sidebar'
Vue.use(Vuex)

const store =  new Vuex.Store({
    sidebar:sidebar
})

export default store