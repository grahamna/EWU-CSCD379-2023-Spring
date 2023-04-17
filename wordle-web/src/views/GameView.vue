
<template>
    <VCard variant="tonal">
      <VCardTitle>
        DaWordleCopy
      </VCardTitle>
      <VCardSubtitle>
        {{ subtitle }}
      </VCardSubtitle>
      <v-divider :thickness="5"></v-divider>
      <v-container>
        <v-row justify="space-evenly" v-for="word in game.guesses" :key="word.text">
          <v-col v-for="letter in word.letters" :key="letter.char" cols="auto">
            <v-card
              :color="letter.color"
              height="50"
              width="50"
              :class="['d-flex justify-center align-center', ]"
            >
              <div>{{ letter.char }}</div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-combobox
        v-model="guess"
        :items="['loading', 'in', 'WordsService.validWords()','is','too','slow']"
        :label="message"
        clearable
      ></v-combobox>
        <br>
        <v-btn @click="checkGuess">Submit</v-btn>
        <br>
        <h3>{{"Answer: "+ game.secretWord }}</h3>


      <VCardActions>
        <VSpacer></VSpacer>
        <v-btn variant="tonal">
          <RouterLink to="/">Home</RouterLink>
        </v-btn>
      </VCardActions>
    </VCard>
</template>

<script setup lang="ts">
  import { WordsService } from '../scripts/wordsService'
  import { WordleGame } from '../scripts/wordleGame'
  import { ref, reactive } from 'vue'
  import { Word } from '@/scripts/word';

  const subtitle = ref('Try to Guess the word! It has 5 Letters.')
  const message = ref('WordGuess')
  const guess = ref('')
  const game = reactive(new WordleGame())
  console.log(game.secretWord)

  function checkGuess() {
    if (guess.value.length !== game.secretWord.length) {
      message.value = "Invalid Length - Must be of length 5"
      guess.value = ''
    }
    else if (!WordsService.isValidWord(guess.value.toLowerCase())) {
      message.value ="Invalid Word - Input is not a real word"
      guess.value = ''
    }
    else {
      console.log(guess);
      game.submitGuess(guess.value.toLowerCase())
    }
  }
</script>




  
  <style>
    @media (min-width: 1024px) {
      .game {
        min-height: 100vh;
        display: flex;
        align-items: center;
      }
    }
  </style>
  