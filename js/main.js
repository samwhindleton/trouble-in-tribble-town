// console.log("It's me main.js");

let points = 0;
let arrayIndex = 0;
const gameRound = [0, 1, 2, 3, 4]
const gameRoundMinScore = [2, 3, 4, 5, 6];

// ## step 2 ##
// start round loop
const startRound = () => {
  if (arrayIndex < gameRound.length) {
    console.log("startRound");
    console.log("Starting Round: " + gameRound[arrayIndex]);
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
