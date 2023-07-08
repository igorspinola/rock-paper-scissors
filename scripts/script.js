const options = ['ROCK', 'PAPER', 'SCISSORS']

function getComputerChoice() {
  const index = Math.floor(3 * (Math.random()))
  return options[index]
}

function round(playerSelection, computerSelection) {
  const playerOption = playerSelection.toUpperCase()

  if (playerOption === computerSelection) {
    return 'It is a draw. Both are the same.'
  } 
  else if (playerOption === 'ROCK' && computerSelection === 'PAPER') {
    return 'You LOST! Paper beats Rock!'
  } 
  else if (playerOption === 'ROCK' && computerSelection === 'SCISSORS') {
    return 'You WON! Rock beats Scissors!'
  }
  else if (playerOption === 'PAPER' && computerSelection === 'ROCK') {
    return 'You WON! Paper beats Rock!'
  } 
  else if (playerOption === 'PAPER' && computerSelection === 'SCISSORS') {
    return 'You LOST! Scissors beats Paper'
  }
  else if (playerOption === 'SCISSORS' && computerSelection === 'ROCK') {
    return 'You LOST! Rock beats Scissors!'
  } 
  else if (playerOption === 'SCISSORS' && computerSelection === 'PAPER') {
    return 'You WON! Scissors beats Paper!'
  }
  else {
    return 'Invalid Option!'
  }
}
const display = document.createElement('div')
const container= document.querySelector('.displayResults')

document.querySelector('.button1').addEventListener('click', () => {
  const result = round('ROCK' ,getComputerChoice())
  console.log(result)
  if (playerScore === 0 && computerScore === 0 ) {
    playerSc.textContent = `Player Score: ${playerScore} `
    computerSc.textContent = `Computer Score: ${computerScore} `
    while (display.firstChild) {
      display.removeChild(display.firstChild);
    }
  }
  const show = document.createElement('p')
  show.textContent = result
  display.appendChild(show)
  countScore(result)
})

document.querySelector('.button2').addEventListener('click', () => {
  const result = round('PAPER' ,getComputerChoice())
  console.log(result)
  if (playerScore === 0 && computerScore === 0 ) {
    playerSc.textContent = `Player Score: ${playerScore} `
    computerSc.textContent = `Computer Score: ${computerScore} `
    while (display.firstChild) {
      display.removeChild(display.firstChild);
    }
  }
  const show = document.createElement('p')
  show.textContent = result
  display.appendChild(show)
  countScore(result)
})

document.querySelector('.button3').addEventListener('click', () => {
  const result = round('SCISSORS' ,getComputerChoice())
  console.log(result)
  if (playerScore === 0 && computerScore === 0 ) {
    playerSc.textContent = `Player Score: ${playerScore} `
    computerSc.textContent = `Computer Score: ${computerScore} `
    while (display.firstChild) {
      display.removeChild(display.firstChild);
    }
  }
  const show = document.createElement('p')
  show.textContent = result
  display.appendChild(show)
  countScore(result)
})

let playerScore = 0
let computerScore = 0
const playerSc = document.querySelector('.playerScore')
const computerSc = document.querySelector('.computerScore')

function countScore (result) {
  container.append(display)
  if (result === 'You WON! Rock beats Scissors!' || result === 'You WON! Paper beats Rock!' ||result === 'You WON! Scissors beats Paper!') {
    playerScore++
    playerSc.textContent = `Player Score: ${playerScore} `
    console.log(`Player score is ${playerScore}, computer Score is ${computerScore}`)
  }
  else if (result === 'You LOST! Paper beats Rock!' || result === 'You LOST! Scissors beats Paper' || result === 'You LOST! Rock beats Scissors!') {
    computerScore++
    computerSc.textContent = `Computer Score: ${computerScore} `
    console.log(`Player score is ${playerScore}, computer Score is ${computerScore}`)
  } 
  else if (result === 'Invalid Option!') {
    alert("Invalid Game, play again!")
  } 
  else if (result === 'It is a draw. Both are the same.') {
    console.log(`Player score is ${playerScore}, computer Score is ${computerScore}`)
  }
  
  if (playerScore === 5) {
    const show = document.createElement('p')
    show.textContent = 'You won the game!'
    display.appendChild(show)
    playerScore = 0
    computerScore = 0
    return 'You won the game!'
  }
  else if (computerScore === 5) {
    const show = document.createElement('p')
    show.textContent = 'You lost the game!'
    display.appendChild(show)
    playerScore = 0
    computerScore = 0
    return 'You lost the game!'
  }
  
}
