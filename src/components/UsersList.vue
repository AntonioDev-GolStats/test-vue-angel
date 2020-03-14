<template>
  <div>
  <h1>usuarios</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import config from '../utils/config'

export default {
    name: 'UsersList',
    data () {
        return{
            dataPlayer: [],
            dataPlayerUser: [],
           
        }
    },

    methods: {
        ...mapActions(['consultApi'])
    },
    created() {
        const token = config.api.auth
        console.log(token)
        const apiKey = config.api.apikey
        const url = config.urls.users
        this.consultApi({url, apiKey, token})
    }
}
</script>

<style>

</style>