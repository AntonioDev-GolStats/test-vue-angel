import Vue from 'vue'
import Vuex from 'vuex'
//import db from '../data/evalueated-player.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataGame: [],
    dataUsers: []
  },
  mutations: {
    setDataGame(state){

    }
  },
  actions: {
    getPlayer({commit}, db) {
      console.log('entre a get Player')
      this.dataGame.push(db[0].data.games)  
    },
    consultApi({commit}, date){
      console.log(date.url)
      fetch(date.url, {
        headers:{
            "apikey": "cL4v3_t3sT7UM7tU?g5mcJ\\eAp1k2y",
            'Authorization': date.token 
        }
    })
        .then( res => res.json())
        .then(data =>{
            console.log(data)
            this.dataUsers.concat(data)
        })
        console.log(this.dataUsers)
    }
    
  },
  modules: {
  }
})
