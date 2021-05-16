import {ADD_CATEGORY,GET_CATEGORY,FETCH_CATEGORY,CREATE_CATEGORY} from '../types'
import {getCategory} from '../../api'
const  state = {
    items:[],
    isCreating:false
}

const mutations = {
    [ADD_CATEGORY](state,payload){
        state.items = [...state.items,{...payload}]
    },
    [GET_CATEGORY](state,payload){
        state.items = payload.items;
    },
    [CREATE_CATEGORY](state,payload){
        state.isCreating = payload.isCreating
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
    },
    ["ADD_CATEGORY"]({commit},payload){
        // addCategory({name:payload.name}).then((data)=>{
        //     commit(type:"ADD_CATEGORY",{id:data.id,name:data.name}) 
        // })
        console.log(payload)
        commit({
            type:'ADD_CATEGORY',
            id:101,
            name:'Vue'
        })
    }
}

export default{
    namespaced:true,
    state,
    mutations,
    actions
}