<template>
  <div>
    <h1>Vista de usuarios</h1>
    <UserList/>
  </div>
</template>

<script>
import UserList from '../components/UsersList'

export default {
    name:'User',
    components: {
    UserList
  }
}
</script>

<style>

</style>