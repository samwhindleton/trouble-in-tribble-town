// ########################################
// # containers and stats variables
// ########################################
//
// main container
const $gameContainer = $("#game-container");
// displays game title
const $titleContainer = $("#title-container");
// shows round number
const $statsRoundNumber = $("#round-number");
// shows round time remaining
const $statsTimerNumber = $("#timer-number");
// shows player points
const $statsPointsNumber = $("#points-number");
// holds game characters
const $charContainer = $("#characters-container");
// parent of #message
const $messagesContainer = $("#messages-container");
// shows messages to player
const $messages = $("#messages");
// start button container
const $startButton = $(".start-button-animation");
// info message container
const $infoContainer = $("#info-container");
// info button container
const $infoButton = $("#info-button");
// close button container
const $closeButton = $("#close");

// ########################################
// # unlock, infinite time and game chars
// ########################################
//
const unlock = () => {
  $messagesContainer.css({"visibility": "visible"})
  .addClass("messages-in")
  .append($messages.text("You've saved the Tribbles homeworld! You can now stay and protect them forever."));
  appear.play();

  setTimeout(() => {
    $messagesContainer.addClass("messages-out");
    disappear.play();
  }, 6000);

  setTimeout(() => {
    $messagesContainer
    .removeClass("messages-in")
    .removeClass("messages-out")
    .css({"visibility": "hidden"});
  }, 7000);

  bgmMenu.play();
  $statsRoundNumber.text("∞");
  $statsTimerNumber.text("∞");

  let klingonRandomTime = Math.floor(Math.random() * 1500) + 800;
  let tribbleRandomTime = Math.floor(Math.random() * 1300) + 700;

  const appendKlingonInterval = setInterval(() => {
    let getRandomKlingon = Math.floor(Math.random() * 2);
    let animateTime = Math.floor(Math.random() * 15) + 6;
    let characterSize = Math.floor(Math.random() * 17) + 6;
    let characterMoveLeft = Math.floor(Math.random() * 97) - 3;

    if (klingons < 0) {
      clearInterval(appendKlingonInterval);
    };

    const $klingons = $("<div>")
      .attr("class", randomKlingon[getRandomKlingon] + " characters-animation")
      .css({"--animation-time": animateTime + "s"})
      .animate({
        height: characterSize + 'vmin',
        width: characterSize + 'vmin',
        left: characterMoveLeft + 'vw',
      },);

    $("#characters-container").append($klingons);

    $($klingons).click((event) => {
      // play a sound
      klingonClick.play();
      // subtract 1 from points
      points -= 1;
      // update points display
      $statsPointsNumber.text(points);
      // remove clicked $klingons from dom
      $klingons.remove();
    });

    klingons += 1;

  }, klingonRandomTime);

  const appendTribblesInterval = setInterval(() => {
    let getRandomTribble = Math.floor(Math.random() * 5);
    let animateTime = Math.floor(Math.random() * 16) + 6;
    let characterSize = Math.floor(Math.random() * 12) + 6;
    let characterMoveLeft = Math.floor(Math.random() * 97) - 3;

    if (tribbles < 0) {
      clearInterval(appendTribblesInterval);
    };

    const $tribbles = $("<div>")
      .attr("class", randomTribble[getRandomTribble] + " characters-animation")
      .css({"--animation-time": animateTime + "s"})
      .animate({
        height: characterSize + 'vmin',
        width: characterSize + 'vmin',
        left: characterMoveLeft + 'vw',
      },);

    $("#characters-container").append($tribbles);

    $($tribbles).click((event) => {
      // play a sound
      tribbleClick.play();
      // add 1 to points
      points += 1;
      // update points display
      $statsPointsNumber.text(points);
      // remove clicked $tribbles from dom
      $tribbles.remove();
    });

    tribbles += 1;

  }, tribbleRandomTime);
};

// ########################################
// # player lost
// ########################################
//
const defeat = () => {
  // clear characters container
  bgmArray[arrIndex].pause();
  $charContainer.empty();

  $messagesContainer.css({"visibility": "visible"})
  .addClass("messages-in")
  .append($messages.text("ROUND " + gameRound[arrIndex] + " FAILED"));
  lose.play();

  setTimeout(() => {
    $messagesContainer.addClass("messages-out");
    disappear.play();
  }, 3000);

  setTimeout(() => {
    $messagesContainer
    .removeClass("messages-in")
    .removeClass("messages-out")
    .css({"visibility": "hidden"});
  }, 3800);

  setTimeout(() => {
    gameReset();
  }, 4000);
};

// ########################################
// # round passed
// ########################################
//
const roundPassed = () => {
  // clear #char-container each round
  $charContainer.empty();
  tribbles = 0;
  klingons = 0;
  // change $messagesContainer to visible
  $messagesContainer.css({"visibility": "visible"})
  // add .message-in animation
  .addClass("messages-in")
  // add round number as text
  .append($messages.text("ROUND " + gameRound[arrIndex] + " PASSED"));
  appear.play();
  // pause current game round music
  bgmArray[arrIndex].pause()
  // +1 to the arrayIndex value
  arrIndex++;

  setTimeout(() => {
    $messagesContainer.addClass("messages-out");
    disappear.play();
  }, 2000);

  setTimeout(() => {
    $messagesContainer
    .removeClass("messages-in")
    .removeClass("messages-out")
    .css({"visibility": "hidden"});
  }, 2800);

  setTimeout(() => {
    gameRoundCheck();
  }, 3000);
};

// ########################################
// # Updated round time displayed
// ########################################
//
const roundTime = () => {
  // seconds variable, start at 15
  let seconds = 15;
  // seconds interval function
  const interval = setInterval(() => {
    // if seconds === 0
    if (seconds === 0) {
      // stop counting
      clearInterval(interval);
    };
    // update round time display with seconds variable
    $statsTimerNumber.text(seconds);
    // subtract 1 from seconds
    // start interval again
    seconds -= 1;
  }, 1000);

  // check player score at end of round
  setTimeout(() => {
    // if arrIndex value if less than the available rounds
    if (arrIndex <= gameRound.length - 1) {
      // if points >= gameRoundMinScore[arrIndex]
      // start next round
      if (points >= gameRoundMinScore[arrIndex]) {
        roundPassed();
      // else player has lost
      } else {
        defeat();
      };
    } else if (arrIndex > gameRound.length) {
      // if points < 100, player lost game
      if (points < 0) {
        defeat();
      // else player had won the game
      // can now play, no time, infinite everything
      } else {
        unlock();
      };
    };
  }, 16000);
};

// ########################################
// # Add game characters to dom
// ########################################
//
const generateGameCharacters = () => {

  // generate random number between 500 - 250ms,
  // used to append klingons at random interval
  let klingonRandomTime = Math.floor(Math.random() * 900) + 400;
  // generate random number between 150 - 350ms,
  // used to append tribbles at random interval
  let tribbleRandomTime = Math.floor(Math.random() * 800) + 350;

  // ----------------------------------------
  // | append klingon timed function
  // ----------------------------------------
  // interval function to pause between appends of tribbles
  const appendKlingonInterval = setInterval(() => {
    // generate random number between 0 - 1
    // used to append random klingon
    let getRandomKlingon = Math.floor(Math.random() * 2);
    // css random animation-duration for .characters-animation
    // generates random number between 25 - 35, used as seconds
    let animateTime = Math.floor(Math.random() * 15) + 6;
    // generates random number between 7 - 17, used for height, width of tribbles
    let characterSize = Math.floor(Math.random() * 17) + 6;
    // generates random number between -3 - 95
    // used to determin how far left tribble will div will be
    let characterMoveLeft = Math.floor(Math.random() * 97) - 3;

    if (klingons >= ((gameRoundCharAmount[arrIndex]) / 3) * 2) {
      // stop appendKlingonInterval function
      clearInterval(appendKlingonInterval);
    };

    // assign $klingons to value div
    // get a random tribble and add as class, add class characters-animation
    // add css with random animateTime number
    // add animate with random height, size and move left
    const $klingons = $("<div>")
      .attr("class", randomKlingon[getRandomKlingon] + " characters-animation")
      .css({"--animation-time": animateTime + "s"})
      .animate({
        height: characterSize + 'vmin',
        width: characterSize + 'vmin',
        left: characterMoveLeft + 'vw',
      },);

    // append $klingons
    $("#characters-container").append($klingons);

    // listen for $klingons click
    $($klingons).click((event) => {
      // play a sound
      klingonClick.play();
      // subtract 1 from points
      points -= 1;
      // update points display
      $statsPointsNumber.text(points);
      // remove clicked $klingons from dom
      $klingons.remove();
    });

    // update appended klingons counter
    klingons += 1;

  // use random interval from tribbleRandomTime
  // to run appendKlingonInterval function
  }, klingonRandomTime);

  // ----------------------------------------
  // | append tribbles timed function
  // ----------------------------------------
  // interval function to pause between appends of tribbles
  const appendTribblesInterval = setInterval(() => {
    // generate random number between 0 - 5
    // used to append random tribble
    let getRandomTribble = Math.floor(Math.random() * 5);
    // css random animation-duration for .characters-animation
    // generates random number between 23 - 30, used as seconds
    let animateTime = Math.floor(Math.random() * 16) + 6;
    // generates random number between 7 - 17, used for height, width of tribbles
    let characterSize = Math.floor(Math.random() * 12) + 6;
    // generates random number between -3 - 95
    // used to determin how far left tribble will div will be
    let characterMoveLeft = Math.floor(Math.random() * 97) - 3;

    // if appendTribbles >= gameRoundCharAmount[arrIndex] -1
    if (tribbles >= gameRoundCharAmount[arrIndex] - 1) {
      // stop appendTribblesInterval function
      clearInterval(appendTribblesInterval);
    };

    // assign $tribbles to value div
    // get a random tribble and add as class, add class characters-animation
    // add css with random animateTime number
    // add animate with random height, size and move left
    const $tribbles = $("<div>")
      .attr("class", randomTribble[getRandomTribble] + " characters-animation")
      .css({"--animation-time": animateTime + "s"})
      .animate({
        height: characterSize + 'vmin',
        width: characterSize + 'vmin',
        left: characterMoveLeft + 'vw',
      },);

    // append $tribbles
    $("#characters-container").append($tribbles);

    // listen for $tribbles click
    $($tribbles).click((event) => {
      // play a sound
      tribbleClick.play();
      // add 1 to points
      points += 1;
      // update points display
      $statsPointsNumber.text(points);
      // remove clicked $tribbles from dom
      $tribbles.remove();
    });

    // update appended tribbles counter
    tribbles += 1;

  // use random interval from tribbleRandomTime
  // to run appendTribblesInterval function
  }, tribbleRandomTime);

  // wait 1200ms before running inner command
  setTimeout(() => {
    roundTime();
  }, 1100);
};

// ########################################
// # Start current game round
// ########################################
//
const startGameRound = () => {
  // wait 1s, play background music
  setTimeout(() => {
    bgmArray[arrIndex].play();
  }, 1000);
  // display message to player
  $messagesContainer.css({"visibility": "visible"})
  .addClass("messages-in")
  .append($messages.text("ROUND " + gameRound[arrIndex]));
  appear.play();
  //
  // wait 2 seconds before running inner command
  // but go to next command...
  setTimeout(() => {
    $messagesContainer.addClass("messages-out");
    disappear.play();
  }, 2000);
  //
  // ...next command
  setTimeout(() => {
    $messagesContainer
    .removeClass("messages-in")
    .removeClass("messages-out")
    .css({"visibility": "hidden"});
  }, 3000);
  //
  setTimeout(() => {
    generateGameCharacters();
  }, 2000);
}

// ########################################
// # Check for current game round number
// ########################################
//
const gameRoundCheck = () => {
  // if this is the first round
  if (gameRound[arrIndex] === 1) {
    // display round 15
    $statsTimerNumber.text("15");
    // display current round number
    $statsRoundNumber.text(gameRound[arrIndex]);
    // display current player points
    $statsPointsNumber.text(points);
    // go to round start
    startGameRound();
  // else if, not first round or < 6, start next round
} else if (gameRound[arrIndex] >= 1 || gameRound[arrIndex] <= 5) {
    $statsRoundNumber.text(gameRound[arrIndex]);
    startGameRound();
    // else player has unlocked infinite round
  } else {
    unlock();
  };
};

// ########################################
// # reset game
// ########################################
//
const gameReset = () => {
  arrIndex = 0;
  points = 0;
  tribbles = 0;
  klingons = 0;
  $statsRoundNumber.text("00");
  $statsTimerNumber.text("00");
  $statsPointsNumber.text("00");
  $charContainer.empty();
  $startButton.css({"visibility": "visible"});
  $titleContainer.css({"visibility": "visible"});
  bgmArray[arrIndex].pause();
  bgmMenu.pause();
  bgmMenu.play();
};

// ########################################
// # click event listeners
// ########################################
//
// start button
$($startButton).click((event) => {
  // pause background music
  bgmMenu.pause();
  // hide $startButton, $titleContainer
  $startButton.css({"visibility": "hidden"});
  $titleContainer.css({"visibility": "hidden"});
  gameRoundCheck();
});

// info button
$($infoButton).click((event) => {
  $infoContainer.css({"visibility": "visible"})
  .addClass("messages-in");
  appear.play();
});

// close button
$($closeButton).click((event) => {
  $infoContainer.addClass("messages-out");
  disappear.play();
  setTimeout(() => {
    $infoContainer
    .removeClass("messages-in")
    .removeClass("messages-out")
    .css({"visibility": "hidden"});
  }, 300);
});
