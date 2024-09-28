const gamePaper = document.querySelector('#paper')
const gameStone = document.querySelector('#stone')
const gameScissors = document.querySelector('#scissors')
const result = document.querySelector('.result')
const valueHuman = document.querySelector('#my-score')
const valueMachine = document.querySelector('#scoring-machine')

let numberHuman = 0
let numberMachine = 0
let player1Choice = null
let player2Choice = null
let isPlayer1Turn = true

const GAME_OPTIONS = {
    STONE: 'stone',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}





const playGame = (player1, player2) => {

    if (player1 === player2) {
        result.innerHTML = 'Empate'
    }

    else if (
        (player1 === GAME_OPTIONS.PAPER && player2 === GAME_OPTIONS.STONE) ||
        (player1 === GAME_OPTIONS.STONE && player2 === GAME_OPTIONS.SCISSORS) ||
        (player1 === GAME_OPTIONS.SCISSORS && player2 === GAME_OPTIONS.PAPER)
    ) {
        numberHuman++
        valueHuman.innerHTML = numberHuman
        result.innerHTML = 'Jogador 1 ganhou'
    }else{
        numberMachine++
        valueMachine.innerHTML = numberMachine
        result.innerHTML = 'Jogador 2 ganhou'
    }

}
const playResult = (choice) => {
    if(isPlayer1Turn){
        player1Choice = choice
        result.innerHTML = 'Jogador 2 Faça sua escolha'
        isPlayer1Turn = false
    }else{
        player2Choice = choice
        playGame(player1Choice, player2Choice)
        isPlayer1Turn = true
    }

}


gameStone.addEventListener('click', () => playResult('stone'))
gamePaper.addEventListener('click', () => playResult('paper'))
gameScissors.addEventListener('click', () => playResult('scissors'))
