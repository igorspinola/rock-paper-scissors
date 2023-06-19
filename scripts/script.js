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

function game(playerOptions) {
let playerScore = 0
let computerScore = 0
  for (let i = 0; i < 5; i++) {
  const result = round(playerOptions[i], getComputerChoice())
  console.log(result)
  if (result === 'You WON! Rock beats Scissors!' || result === 'You WON! Paper beats Rock!' ||result === 'You WON! Scissors beats Paper!') {
  playerScore++
  console.log(`Player score is ${playerScore}, computer Score is ${computerScore}`)
}
  else if (result === 'You LOST! Paper beats Rock!' || result === 'You LOST! Scissors beats Paper' || result === 'You LOST! Rock beats Scissors!') {
  computerScore++
  console.log(`Player score is ${playerScore}, computer Score is ${computerScore}`)
} 
  else if (result === 'Invalid Option!') {
  alert("Invalid Game, play again!")
} 
else if (result === 'It is a draw. Both are the same.') {
  console.log(`Player score is ${playerScore}, computer Score is ${computerScore}`)
}

}
  if (playerScore === computerScore) {
    return 'It is a draw!'
}
  else if (playerScore > computerScore) {
    return 'You won the game!'
}
  else {
    return 'You lost the game!'
}
}

const arr = []
for (let i = 1; i <= 5; i++) {
  const choice = prompt(`What is your choice for round ${i}? Choose beetween Rock, Paper or Scissors`)
  arr.push(choice)
}
console.log(game(arr))