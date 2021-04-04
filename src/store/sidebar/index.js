import {ADDITEM} from '../types'
const  state = {
    items:[]
}

const mutations = {
    [ADDITEM](state,item){
        state.items = [...state.items,item]
    },
    
}

export default{
    namespace:true,
    state,
    mutations,
}