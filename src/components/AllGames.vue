<template>
    <div>
        <h1>All-Games</h1>
        <List/>
    </div>
</template>

<script>
import List from './List.vue'
import db from '../data/all-games.json'

import { mapActions } from 'vuex'

export default {
    name: 'AllGames',
    components: {
    List
  },
    data () {
        return{
            dataGame: [],
            dataPlayerUser: [],  
        }
    },

    methods: {
        ...mapActions(['getPlayer'])
    },


    created() {
      this.dataGame.push(db[0].data.games)
      this.getPlayer(db)  
      console.log(this.dataGame)
    }
}
</script>

<style>

</style>