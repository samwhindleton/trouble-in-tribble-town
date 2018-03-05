// player points
let points = 0;
// number used to determine game round,
// $tribbles and $klingons rendered onto screen,
// and min score to play next round
let arrayIndex = 0;
// number of game rounds
const gameRound = [1, 2, 3, 4, 5];
// number of $tribbles and $klingons per round array
const gameRoundCharAmount = [5, 10, 15, 20, 25, 0];
// number of min score to pass each round
const gameRoundMinScore = [1, 5, 10, 15, 20];

// ## step 5 ##
// game round timer
const gameRoundTimer = () => {
  // wait 6 seconds
  setTimeout(() => {
    // if points are >= to the gameRoundMinScore index
    // of the current arrayIndex number,
    // then player has passed the round...
    if (points >= gameRoundMinScore[arrayIndex]) {
      // +1 to the arrayIndex value
      arrayIndex++;
      // start the next round
      // go to ## step 2 ##
      startRound();
    // ...else player has lost
    } else {
      console.log("You lost the round");
    };
  // 16 seconds
  }, 16000);
};

// ## step 2 ##
// start round
const startRound = () => {
  // if arrayIndex value if less than
  // the available rounds...
  if (arrayIndex < gameRound.length) {
    // if points >= 0, go to step 3 and render the chars to screen
    if (points >= 0) {
      // go to ## step 3 ##
      // located in: /js/listeners.js
      countdownTimer();
    // else player has lost
    } else {
      console.log("You've lost");
    };
  // ...else if it is equual to the max max rounds
  } else if (arrayIndex = gameRound.length) {
    // if points <= 50, player lost...
    if (points <= 50) {
      console.log("You didn't save enough Tribbles");
    // ...else, player has won
    } else {
      console.log("You won!");
    };
  };
};

// ## step 1 ##
// run when start button is clicked
const startGame = () => {
  // reset arrayIndex and points variables
  arrayIndex = 0;
  points = 0;
  // go to ## step 2 ##
  startRound();
};
