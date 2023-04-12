<template>
  <div>
   <h1>
    Wordle In Class
   </h1>
  </div>

  <VTextField label="guess" v-model="guess"></VTextField>
  <br>
  <VBtn variant="tonal" @click="checkGuess">Submit</VBtn>
  <br>
  <div>
    
  </div>
<br>
  <h2>{{ guess }}</h2>
  <h2>{{ secretWord }}</h2>
</template>
  
<script setup lang="ts">
  import { Letter, LetterStatus } from '../scripts/letter';
  import { ref, reactive } from 'vue'
  const guess = ref('')
  const guesses = reactive(new Array<Array<Letter>>())

  const wordList = ["apple", "peach", "crypt", "zesty", "color", "jelly", "piano"]
  const secretWord = wordList[Math.floor(Math.random() * wordList.length)]
  console.log(secretWord)

  function checkGuess() {
    if (guess.value.length !== secretWord.length) {
      console.log("Wrong Length")
      guess.value = ''
      return
    }
  }

  const results = new Array<Letter>()
  const guessChars = guess.value.split('')
  const secretChars = secretWord.split('')
  let isCorrect = true
  for (let i = 0; i < guess.value.length; i++) {
    results.push(new Letter(guess.value[i]))
    if (guess.value[i] === secretWord[i]) {
      results[i].status = LetterStatus.Correct
      guessChars[i] = '_'
      secretChars[i] = '_'
      console.log(`Letter ${i} is correct`)
    }
    else {
      isCorrect = false
      console.log(`letter ${i} is incorrect`) 
    }

    for (let i = 0; i < 5; i++) {
      if (guessChars[i]!=='_')
      for (let j = 0; j < 5; j++) {
        if (secretChars[j] === guessChars[i]) {
          results[i].status = LetterStatus.Misplaced
          guessChars
          break;
        }

    }
    }

    console.log(guessChars)
    console.log(secretChars)
    console.log(results)
    console.log(isCorrect)
    console.log(guesses)
  }
</script>