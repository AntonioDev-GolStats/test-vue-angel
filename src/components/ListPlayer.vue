<template>
    <div>
        <h1>List of Evaluated Player</h1>
        <List/>
    </div>
</template>

<script>
import List from './List.vue'
import db from '../data/evaluated-players.json'

export default {
    name: 'ListPlayer',
   components: {
    List
  }
}
</script>

<style>

</style>