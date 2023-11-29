let xButtons = [] , circleButtons = [];
let playNumber = 1;
let xNum = 0 , circleNum = 0;
let circle;
let circleWins = 0, xWins = 0, drawNumber = 0;
let buttonDisabled;
let isDraw;
let playNum = 1;
let winChecker = 0;

const playerOneWinTitle = document.querySelector('.player-one-win-title');
const playerTwoWinTitle = document.querySelector('.player-two-win-title');

const playerOneElement = document.querySelector('.player-one-text');
const playerTwoElement = document.querySelector('.player-two-text');

playerOneElement.classList.add('player-one-turn');
let isWin = '';

function playerButton (button) {
    if((playNumber % 2) === 0) {
      document.querySelector(`.button${button}`)
        .innerHTML = '<img class="images" src="Images/x.png">';

        playerTwoElement.classList.remove('player-two-turn');
        playerOneElement.classList.add('player-one-turn');

    } else if((playNumber % 2) !== 0) {
      document.querySelector(`.button${button}`)
        .innerHTML = '<img class="images" src="Images/circle.png">';
        circleNum++;

        playerOneElement.classList.remove('player-one-turn');

        playerTwoElement.classList.add('player-two-turn');
    }

    playNumber++;
    console.log(playNumber);
   
 
    
  }
  
let index = 1;

function buttons (button) {

  const buttonDisabled = document.querySelector(`.button${button}`);
  buttonDisabled.addEventListener('click', () => {
  playerButton(button);
  buttonDisabled.disabled = true;
  if((index % 2) !== 0) {
    circleButtons.push(button);
    console.log(circleButtons);
    index++;

  } else if((index % 2) === 0) {
    xButtons.push(button);
    console.log(xButtons);
    index++;
  }
    
  winner(circleButtons , 'cirle');
  winner(xButtons , 'x');
  });
}

for(i = 1; i <= 9; i++) {
  buttons(i);
}

document.querySelector('.restart-button')
  .addEventListener('click', () => {
    restart();
  });

  const radif = [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 5, 9],
      [3, 5, 7]
  ];

  let num = 0;

  function isTrue (array , array2) {
    for(let i = 0; i <= array.length -1; i++) {
      for(let j = 0; j <= array2.length -1; j++) {
        if(array[i] === array2[j]){
          num++;
        }
      }
    }
    return num;
  } 

  function winner(circleButtons , who) {
    for(let i = 0; i <= 7; i++) {
      isTrue(radif[i], circleButtons);
      if(num === 3) {
       isWin =`${who} win!`;
      } 
      num = 0;
    } 
    if(isWin === 'cirle win!') {
      winChecker = 1;
      console.log(winChecker);
      circleWins++;
      document.querySelector('.player-one-wins').innerHTML = `Wins: ${circleWins}`;
      indexesDisabler();

      for(let i = 1; i <= 9; i++){
        buttonDisabled = document.querySelector(`.button${i}`);
        buttonDisabled.disabled = true;
      }

      document.querySelector('.player-one-win-title')
        .innerHTML = 'You win!';

      setTimeout(() => {
        document.querySelector('.player-one-win-title')
        .innerHTML = '';
        buttonDisabler();
      }, 2000);

    } else if(isWin === 'x win!') {
      winChecker = 1;
      console.log(winChecker);
      xWins++;
      document.querySelector('.player-two-wins').innerHTML = `Wins: ${xWins}`;
      indexesDisabler();

      for(let i = 1; i <= 9; i++){
        buttonDisabled = document.querySelector(`.button${i}`);
        buttonDi
        sabled.disabled = true;
      }
      document.querySelector('.player-two-win-title')
        .innerHTML = 'You win!';

      setTimeout(() => {
        document.querySelector('.player-two-win-title')
        .innerHTML = '';
        buttonDisabler();
      }, 2000);
      
    } else if(isDraw === 'draw') {
      document.querySelector('.player-one-win-title')
        .innerHTML = 'Draw';

        document.querySelector('.player-two-win-title')
        .innerHTML = 'Draw';
      setTimeout(() => {
        document.querySelector('.player-one-win-title')
        .innerHTML = '';

        document.querySelector('.player-two-win-title')
        .innerHTML = '';
      }, 2000);
      isDraw = '';
    }
    if(playNumber === 10) {
      console.log(isWin);
      isDraw = 'draw';
      drawNumber += 0.5;
      document.querySelector('.draw-text').
        innerHTML = `Draw: ${drawNumber}`;
      setTimeout(() => {
        buttonDisabler();
        indexesDisabler();
      }, 2000);
    }
  }

  function restart() {
    buttonDisabler();
    indexesDisabler();
    circleWins = 0;
    xWins = 0;
    drawNumber = 0;
    isDraw = '';

    document.querySelector('.player-one-wins').innerHTML = `Wins: ${circleWins}`;

    document.querySelector('.player-two-wins').innerHTML = `Wins: ${xWins}`;

    document.querySelector('.draw-text').innerHTML = `Draw: ${drawNumber}`;
  }

  function buttonDisabler() {
    for(let i = 1; i <= 9; i++){
      document.querySelector(`.button${i}`).innerHTML = '';
      buttonDisabled = document.querySelector(`.button${i}`);
      buttonDisabled.disabled = false;
      circleButtons = [];
      xButtons = [];
    }
    
    playerTwoElement.classList.remove('player-two-turn');
    playerOneElement.classList.remove('player-one-turn');
    setTimeout(() => {
      playerOneElement.classList.add('player-one-turn');
    }, 350);
  }

  function indexesDisabler() {
    playNumber = 1;
    isWin = '';
    index = 1;
    playNum = 1;
    winChecker = 0;
    isDraw = '';
  }