// console.log("It's me main.js");

let points = 0;
let arrayIndex = 0;
const gameRound = [0, 1, 2, 3, 4];
const gameRoundCharAmount = [5, 10, 15, 20, 25]
const gameRoundMinScore = [2, 3, 4, 5, 6];

// ## step 4 ##
// game timer loop
const gameRoundTimer = () => {
  console.log("Starting round timer");
  setTimeout(() => {
    if (points >= gameRoundMinScore[arrayIndex]) {
      console.log("Passed Round: " + gameRound[arrayIndex]);
      arrayIndex++;
      startRound();
    } else {
      console.log("You lost");
      return;
    };
  }, 5000);
}

// ## step 2 ##
// start round loop
const startRound = () => {
  if (arrayIndex < gameRound.length) {
    console.log("startRound");
    console.log("Starting Round: " + gameRound[arrayIndex]);
    // go to step 3
    // located in: /js/listeners.js
    renderGameChars();
  } else if (arrayIndex = gameRound.length) {
    console.log("You won!");
  };
};

// ## step 1 ##
// run when start button is clicked
const startGame = () => {
  console.log("startGame function");
  // reset arrayIndex and points variable
  arrayIndex = 0;
  points = 0;
  // go to step 2
  startRound();
};
