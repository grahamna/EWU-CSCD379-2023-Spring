import { describe, it, expect } from 'vitest'
import { Letter, LetterStatus } from '@/scripts/letter'
import { Word } from '@/scripts/word'
import { WordleGame } from '../wordleGame'

describe('wordleGame Restarts correctly', () => {
  it('Gets Correct Word', () => {
    const wg = new WordleGame('apple')
    wg.submitGuess('peach')
    wg.restartGame('crypt')
    expect(wg.secretWord).toBe('crypt')
    
  })

  it('wordleGame submits guess correctly, resulting in correct Word/LetterStatus Combo', () => {
    const wg = new WordleGame('apple')
    wg.submitGuess('plane')
    const word = wg.guesses[0]
    expect(word.letters[0].status).toBe(LetterStatus.Misplaced)
    expect(word.letters[1].status).toBe(LetterStatus.Misplaced)
    expect(word.letters[2].status).toBe(LetterStatus.Misplaced)
    expect(word.letters[3].status).toBe(LetterStatus.Wrong)
    expect(word.letters[4].status).toBe(LetterStatus.Correct)
  })
})
