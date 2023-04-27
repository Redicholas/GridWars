<template>
    <div class="stats-info-container">
        <h3 class="hitter-color" :style="{ backgroundColor: props.hitterColor }"></h3>
        <h5>Killed</h5>
        <h3 class="hittee-color" :style="{ backgroundColor: props.hitteeColor }"></h3>
    </div>

</template>

<script setup lang="ts">

const props = defineProps({
   hitterColor: String,
   hitteeColor: String,
})

</script>

<style scoped lang="scss">
.stats-info-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 100%;
    h3 {
        width: 100px;
        text-align: center;
    }
    h5 {
        text-align: center;
    }
}
.hitter-color {
    background-color: v-bind(hitterColor);
    width: 100%;
    height: 5vh;
    text-align: center;
}

.hittee-color {
    background-color: v-bind(hitteeColor);
    width: 100%;
    height: 5vh;
    text-align: center;
}

</style>