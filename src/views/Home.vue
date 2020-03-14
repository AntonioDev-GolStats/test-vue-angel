<template>
  <div class="container aling-center">
    <img alt="Vue logo" src="../assets/logo.png">
    <ListPlayer/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListPlayer from '@/components/ListPlayer.vue'

export default {
  name: 'Home',
  components: {
    ListPlayer
  }
}
</script>
