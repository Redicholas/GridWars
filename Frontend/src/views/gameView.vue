<template>
  <div class="top-bar">
    <div class="players">
      <PlayerInfo
        v-for="(user, i) in usersState.users"
        :key="i"
        :player-color="user.color"
        :player-name="user.name"
      />
    </div>
    <div class="logo-container">
      <h1>GridWars</h1>
    </div>
  </div>
  <main>
    <div class="result-container">
      <gameResult class="main-container" v-for="(user, i) in resultState.users" :key="i" :player-place="usersState.users.length-i" :player-color="user.color" :player-name="user.name"/>
    </div>
    <ShipPlacement class="game-board" v-if="!gameState.gameStarted" />
    <GameBoard class="game-board" v-else />
    <ChatWindow class="chat-window" />
  </main>
  <div class="stats-container">
    <gameStats class="main-container" v-for="(user, i) in statsState.stats" :key="i" :hitter-color="user.hit" :hittee-color="user.hitted"/>
  </div>
</template>

<script setup lang="ts">
import GameBoard from '@/components/GameBoard.vue'
import ChatWindow from '../components/ChatWindow.vue'
import PlayerInfo from '../components/PlayerInfo.vue'
import gameResult from '@/components/gameResult.vue'
import gameStats from '@/components/gameStats.vue'
import { usersState } from '@/sockets/usersSocket'
import { resultSocket } from '@/sockets/resultSocket'
import ShipPlacement from '@/components/ShipPlacement.vue'
import { gameState } from '../sockets/gameSocket'
import { resultState } from '@/sockets/resultSocket'
import { statsState } from '@/sockets/resultSocket'

</script>

<style lang="scss" scoped>
main {
  height: 65vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.game-board {
  padding: 1rem;
}
.chat-window {
  width: 23.4vw;
  height: 65vh;
}
.logo-container {
  width: 30vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top-bar {
  display: flex;
  width: 100%;
  border: 1px solid black;
}
.players {
  height: 15vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.stats-container {
  border: 1px solid black;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.result-container {
  border: 1px solid black;
  height: 65vh;
  display: flex;
  flex-direction: column-reverse;
}
</style>
