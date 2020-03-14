<template>
  <div class="about">
    <h1>Pages About</h1>
    <AllGames/>
  </div>
</template>

<script>
// @ is an alias to /src
import AllGames from '@/components/AllGames.vue'

export default {
  name: 'About',
  components: {
    AllGames
  }
}
</script>