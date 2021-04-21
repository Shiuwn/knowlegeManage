import {ADD_CATEGORY,GET_CATEGORY,FETCH_CATEGORY} from '../types'
import {getCategory} from '../../api'
const  state = {
    items:[]
}

const mutations = {
    [ADD_CATEGORY](state,item){
        state.items = [...state.items,item]
    },
    [GET_CATEGORY](state,payload){
        state.items = payload.items;
    }
    
}
const actions = {
    [FETCH_CATEGORY]({commit}){
        getCategory().then(function(data){
            commit({
                type:GET_CATEGORY,
                items:data
            })
        });
    }
}

export default{
    namespaced:true,
    state,
    mutations,
    actions
}