<template>
  <v-sheet color="#263238" height="170px" class="pt-10 my-5">
    <v-card color="#546E7A" class="ma-5" elevation="5">
      <v-card-title>About</v-card-title>
      <v-card-text>
        These are a few words about meg. A few is two, right? But yeah, she's awesome.
      </v-card-text>
      <v-btn to="/wordle">Return Home</v-btn>
    </v-card>
  </v-sheet>

  {{ isDialogOpen }}
  <WeatherDialog v-model="isDialogOpen" :weather="currentWeather"></WeatherDialog>

  <v-card v-for="item in weatherData" :key="item.date" @click="setCurrentWeather(item)">
    {{ item.date }}</v-card
  >
</template>

<script setup lang="ts">
import Axios from 'axios'
import { ref } from 'vue'
import WeatherDialog from '@/components/WeatherDialog.vue'
import type { WeatherData } from '@/types/WeatherData'

const isDialogOpen = ref(false)
const weatherData = ref<WeatherData[]>()
const currentWeather = ref<WeatherData>()

function setCurrentWeather(weather: WeatherData) {
  currentWeather.value = weather
  isDialogOpen.value = true
}

Axios.get('https://localhost:7053/WeatherForecast')
  .then((response) => {
    console.log(response.data)
    weatherData.value = response.data
  })
  .catch((err) => {
    console.log(err)
  })
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
