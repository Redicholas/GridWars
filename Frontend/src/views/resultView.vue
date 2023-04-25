<template>
    <main class="main-container">
      <h1 class="heading">Result</h1>
      <gameResult class="main-container" v-for="(user, i) in resultState.users" :key="i" :player-place="i" :player-color="user.color" :player-name="user.name"/> 
      <gameStats class="main-container" v-for="(user, i) in statsState.stats" :key="i" :hitter-color="user.hit" :hittee-color="user.hitted"/>
    </main>
</template>
  
<script setup lang="ts">
  import gameResult from '@/components/gameResult.vue'
  import gameStats from '@/components/gameStats.vue'
  import { resultState } from '@/sockets/resultSocket'
  import { statsState } from '@/sockets/resultSocket'

</script>
  
<style lang="scss" scoped>
  .main-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .heading {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
</style>