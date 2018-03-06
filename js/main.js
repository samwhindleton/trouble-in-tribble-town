// player points
let points = 0;
// number used to determine game round,
// $tribbles and $klingons rendered onto screen,
// and min score to play next round
let arrayIndex = 0;
// number of game rounds
const gameRounds = [1, 2, 3, 4, 5];
// number of $tribbles and $klingons per round array
const gameRoundsCharAmount = [5, 10, 15, 20, 25, 0];
// number of min score to pass each round
const gameRoundsMinScore = [1, 5, 10, 15, 20];

// ########################################
// # ## STEP 4 ##
// # CHECK PLAYER SCORE
// ########################################
//
// checks player score on round end
const checkPlayerScore = () => {
  // wait 16 seconds before running inner command
  setTimeout(() => {
    // if points are >= to the gameRoundsMinScore index
    // of the current arrayIndex number,
    // then player has passed the round...
    if (points >= gameRoundsMinScore[arrayIndex]) {
      // go to roundPassed function();
      // located in /js/listeners.js
      roundPassed();
    // ...else player has lost
    } else {
      // go to roundFailed function();
      // located in /js/listeners.js
      roundFailed();
    };
  // 16 seconds
  }, 16000);
};

// ########################################
// # START NEXT ROUND CHECK
// ########################################
//
const startNextRoundCheck = () => {
  // if arrayIndex value if less than
  // the available rounds...
  if (arrayIndex < gameRounds.length) {
    // if points >= 0, go to step 3 and render the chars to screen
    if (points >= 0) {
      // go to ## step 1 ##
      // located in: /js/listeners.js
      gameRoundStart();
    // // else player has lost
    // } else {
    //   console.log("You've lost");
    };
  // ...else if the arrayIndex is >= to the max rounds
} else if (arrayIndex >= gameRounds.length) {
    // if points < 50, player lost...
    if (points < 50) {
      console.log("You didn't save enough Tribbles");
    // ...else, player has won
    } else {
      console.log("You won!");
    };
  };
};

// // ## step 1 ##
// // run when start button is clicked
// const startGame = () => {
//   // reset arrayIndex and points variables
//   arrayIndex = 0;
//   points = 0;
//   // go to ## step 2 ##
//   startRound();
// };
