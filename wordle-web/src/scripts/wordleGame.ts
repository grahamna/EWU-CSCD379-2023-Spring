import { Letter, LetterStatus } from '@/scripts/letter'
import { Word } from '@/scripts/word'
import { ref, reactive } from 'vue'
import { WordsService } from './wordsService'

export class WordleGame {
  constructor(secretWord?: string | null) {
    this.restartGame(secretWord)
  }
  guesses = new Array<Word>()
  secretWord = ''

  knownLetters: string[] = ["","","","",""]
  notAllowedLetters: string[] = []
  validWordList = this.getValidWords()

  getValidWords() : Array<string> {
    return WordsService.validWords(this.knownLetters,this.notAllowedLetters)
  }

  // // check length of guess
  //   if (this.letters.length !== secretWord.length) {
  //     console.log('wrong length')
  //     return
  //   }

  restartGame(secretWord?: string | null) {
    this.secretWord = secretWord || WordsService.getRandomWord()
    if (!WordsService.isValidWord(this.secretWord)){
      this.secretWord = WordsService.getRandomWord()
    }
    this.guesses.splice(0)
  }

  submitGuess(guess: string) {
    const word = new Word(guess)
    this.guesses.push(word)
    word.check(this.secretWord)
    for (let i = 0; i < word.letters.length; i++) {
      const letter = word.letters[i];
      if (letter.status === 1) {
        this.knownLetters[i] = letter.char
      }
      else if (letter.status === 3) {
        const ch = letter.char
        if (!this.notAllowedLetters.includes(ch)){
          this.notAllowedLetters.push(ch)
        }
      }
    }
    this.validWordList = this.getValidWords()
  }
}
