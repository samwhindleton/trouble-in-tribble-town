// ########################################
// # audio
// ########################################
//
// page load audio
const backgroundAudioStart = new Audio("https://samwhindleton.github.io/trouble-in-tribble-town/sounds/start.mp3");
// gsme start audio
const gameAudioStart = new Audio("https://samwhindleton.github.io/trouble-in-tribble-town/sounds/background.mp3");
// klingon sound
const klingonSound = new Audio("https://samwhindleton.github.io/trouble-in-tribble-town/sounds/klingon.mp3");
// tribble sound
const tribbleSound = new Audio("https://samwhindleton.github.io/trouble-in-tribble-town/sounds/tribble.mp3");
// loop sound
backgroundAudioStart.loop = true;
gameAudioStart.loop = true;
// auto play backgroundAudioStart
backgroundAudioStart.play();

// ########################################
// # game variables
// ########################################
//
// player points
let points = 0;
// number used to determine game round,
// $tribbles and $klingons rendered onto screen,
// and min score to play next round
let arrayIndex = 0;
// number of game rounds
const gameRounds = [1, 2, 3, 4, 5];
// number of $tribbles and $klingons per round array
const gameRoundsCharAmount = [10, 15, 20, 25, 30, 0];
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
    // if points > 0, go to step 3 and render the chars to screen
    if (points > 0) {
      // go to ## step 1 ##
      // located in: /js/listeners.js
      gameRoundStart();
    // // else player has lost
    } else {
      // go to takenOverFailed
      // located in /js/listeners.js
      takenOverFailed();
    };
  // ...else if the arrayIndex is >= to the max rounds
} else if (arrayIndex >= gameRounds.length) {
    // if points < 50, player lost...
    if (points < 50) {
      // go to takenOverFailed
      // located in /js/listeners.js
      takenOverFailed();
    // ...else, player has won
    } else {
      infiniteRounds();
    };
  };
};
