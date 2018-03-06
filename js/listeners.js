// ########################################
// # container and stats variables
// ########################################
//
// assign $charContainer to value #char-container
const $charContainer = $("#char-container");
// assign $gameContainer to value #game-container
const $gameContainer = $("#game-container");
// assign $messagesContainer to value #messages-container
const $messagesContainer = $("#messages-container");
// assign $messages to value #messages
const $messages = $("#messages");
// assign $titleContainer to value #title-container
const $titleContainer = $("#title-container");
// assign $socialMediaContainer to value #social-media-container
const $socialMediaContainer = $("#social-media-container");
// assign $startButton to value #start-button>h1
const $startButton = $("#start-button");
// assign $statsRoundNumber to #round-number
const $statsRoundNumber = $("#round-number");
// assign $statsTimerNumber to #timer-number
const $statsTimerNumber = $("#timer-number");
// assign $statsPointsNumber to #points-number
const $statsPointsNumber = $("#points-number");



// ########################################
// # ## STEP 1 ##
// # START ROUND MESSAGE
// ########################################
//
const gameRoundStart = () => {
  // update round timer text as 15
  $statsTimerNumber.text("15");
  // update #round-number display with gameRounds[arrayIndex]
  $statsRoundNumber.text(gameRounds[arrayIndex]);
  // update points display
  $statsPointsNumber.text(points);
  // change $messagesContainer to visible
  $messagesContainer.css({"visibility": "visible"})
  // add .message-in animation
  .addClass("messages-in")
  // add round number as text
  .append($messages.text("ROUND " + gameRounds[arrayIndex]));
  //
  // wait 2 seconds before running inner command
  // but go to next command...
  setTimeout(() => {
    // add m.message-out animation
    $messagesContainer.addClass("messages-out");
  }, 2000);
  //
  // ...next command
  // wait 2 seconds before running inner command
  // but go to next command...
  setTimeout(() => {
    // go to ## step 2 ##
    // run function renderGameChars();
    renderGameChars();
  }, 1800);
  //
  // ...next command
  // wait 2.8 seconds before running inner command
  setTimeout(() => {
    // hide $messagesContainer
    // and remove classes
    $messagesContainer
    .removeClass("messages-in")
    .removeClass("messages-out")
    .css({"visibility": "hidden"});
  }, 2800);
// end gameRoundStart function
};

// ########################################
// # PASS ROUND MESSAGE
// ########################################
//
const roundPassed = () => {
  // clear #char-container each round
  $charContainer.empty();
  // change $messagesContainer to visible
  $messagesContainer.css({"visibility": "visible"})
  // add .message-in animation
  .addClass("messages-in")
  // add round number as text
  .append($messages.text("ROUND " + gameRounds[arrayIndex] + " PASSED"));
  // +1 to the arrayIndex value
  arrayIndex++;
  //
  // wait 2 seconds before running inner command
  // but go to next command...
  setTimeout(() => {
    // add m.message-out animation
    $messagesContainer.addClass("messages-out");
  }, 2000);
  //
  // ...next command
  // wait 2.8 seconds before running inner command
  // but go to next command...
  setTimeout(() => {
    // hide $messagesContainer
    // and remove classes
    $messagesContainer
    .removeClass("messages-in")
    .removeClass("messages-out")
    .css({"visibility": "hidden"});
  }, 2800);
  //
  // ...next command
  // wait 3 seconds before running inner command
  setTimeout(() => {
    // go to startNextRoundCheck();
    // located in /js/main.js
    startNextRoundCheck();
  }, 3000);
// end roundPassed function
};

// ########################################
// # FAIL ROUND MESSAGE
// ########################################
//
const roundFailed = () => {
  // clear #char-container each round
  $charContainer.empty();
  // change $messagesContainer to visible
  $messagesContainer.css({"visibility": "visible"})
  // add .message-in animation
  .addClass("messages-in")
  // add round number as text
  .append($messages.text("ROUND " + gameRounds[arrayIndex] + " FAILED"));
  //
  // wait 2 seconds before running inner command
  // but go to next command...
  setTimeout(() => {
    // add m.message-out animation
    $messagesContainer.addClass("messages-out");
  }, 2000);
  //
  // ...next command
  // wait 2.8 seconds before running inner command
  // but go to next command...
  setTimeout(() => {
    // hide $messagesContainer
    // and remove classes
    $messagesContainer
    .removeClass("messages-in")
    .removeClass("messages-out")
    .css({"visibility": "hidden"});
  }, 2800);
  //
  // ...next command
  // wait 3 seconds before running inner command
  setTimeout(() => {
    // go to gameReset();
    gameReset();
  }, 3200);
// end gameRoundStart function
};

// ########################################
// # TAKEN OVER MESSAGE
// ########################################
//
const takenOverFailed = () => {
  // clear #char-container each round
  $charContainer.empty();
  // change $messagesContainer to visible
  $messagesContainer.css({"visibility": "visible"})
  // add .message-in animation
  .addClass("messages-in")
  // add round number as text
  .append($messages.text("Your ship has been taken over by Klingons!"));
  //
  // wait 2 seconds before running inner command
  // but go to next command...
  setTimeout(() => {
    // add m.message-out animation
    $messagesContainer.addClass("messages-out");
  }, 2000);
  //
  // ...next command
  // wait 2.8 seconds before running inner command
  // but go to next command...
  setTimeout(() => {
    // hide $messagesContainer
    // and remove classes
    $messagesContainer
    .removeClass("messages-in")
    .removeClass("messages-out")
    .css({"visibility": "hidden"});
  }, 2800);
  //
  // ...next command
  // wait 3 seconds before running inner command
  setTimeout(() => {
    // go to gameReset();
    gameReset();
  }, 3200);
// end gameRoundStart function
};

// ########################################
// # INFINITE GAME
// # APPEND GAME CHARACTERS INFINITE
// ########################################
//
// clear screen, append tribbles and $klingons.
// click event listeners for $tribbles and $klingons
const infiniteRenderGameChars = () => {
  //
  // ----------------------------------------
  // | append tribbles timed function
  // ----------------------------------------
  // appended tribbles counter
  let appendTribbles = 1;
  // generate random number between 800 - 1000ms,
  // used to append tribbles at random interval
  let appendTribblesRandomTime = Math.floor(Math.random() * 1000) + 800;
  // interval function to pause between appends of tribbles
  const appendTribblesInterval = setInterval(() => {
    // css random animation-duration for .char-animation
    // generates random number between 2.8 - 7, used as seconds
    let animateTime = Math.floor(Math.random() * 7) + 2.8;
    // generates random number between 7 - 17, used for height, width of tribbles
    let $tribbleSize = Math.floor(Math.random() * 17) + 7;
    // generates random number between -3 - 95
    // used to determin how far left tribble will div will be
    let $tribblesMoveLeft = Math.floor(Math.random() * 95) - 3;
    // if appendTribbles < 0...
    if (appendTribbles < 0) {
      // ...stop appendKlingonsInterval function
      clearInterval(appendKlingonsInterval);
    };
    // assign $tribbles to value div.tribble.char-animation
    // add css with random animateTime number
    // add animate with random height, size and move left
    const $tribbles = $("<div>")
      .addClass("tribbles char-animation")
      .css({"--animation-time": animateTime + 's'})
      .animate({
        height: $tribbleSize + 'vmin',
        width: $tribbleSize + 'vmin',
        left: $tribblesMoveLeft + 'vw',
      },);
    // append $tribbles
    $("#char-container").append($tribbles);
    // listen for $tribbles click
    $($tribbles).click((event) => {
      // add 1 to points
      points += 1;
      // update points display
      $statsPointsNumber.text(points);
      // change visibility to hidden when clicked
      // preserves spacing between $klingons
      $tribbles.css({"visibility": "hidden"}).delay(500).remove();
    });
    // update appended tribbles counter
    appendTribbles += 1;
  // use random interval from appendTribblesRandomTime
  // to run appendTribblesInterval function
  }, appendTribblesRandomTime);
  //
  // ----------------------------------------
  // | append klingons timed function
  // ----------------------------------------
  // appended klingons counter
  let appendKlingons = 1;
  // generate random number between 800 - 1000ms,
  // used to append klingons at random interval
  let appendKlingonsRandomTime = Math.floor(Math.random() * 1000) + 800;
  // interval function to pause between appends of klingons
  const appendKlingonsInterval = setInterval(() => {
    // css random animation-duration for .char-animation
    // generates random number between 2 - 7, used as seconds
    let animateTime = Math.floor(Math.random() * 7) + 2;
    // generates random number between 7 - 17, used for height, width of klingons
    let $tribbleSize = Math.floor(Math.random() * 17) + 7;
    // generates random number between 7 - 83
    // used to determin how far left tribble will div will be
    let $klingonsMoveLeft = Math.floor(Math.random() * 83) + 7;
    // if appendKlingons < 0)...
    if (appendKlingons < 0) {
      // ...stop appendKlingonsInterval function
      clearInterval(appendKlingonsInterval);
    };
    // assign $klingons to value div.tribble.char-animation
    // add css with random animateTime number
    // add animate with random height, size and move left
    const $klingons = $("<div>")
      .addClass("klingons char-animation")
      .css({"--animation-time": animateTime + 's'})
      .animate({
        height: $tribbleSize + 'vmin',
        width: $tribbleSize + 'vmin',
        left: $klingonsMoveLeft + 'vw',
      },);
    // append $klingons
    $("#char-container").append($klingons);
    // listen for $klingons click
    $($klingons).click((event) => {
      // subtract 1 to points
      points -= 1;
      // update points display
      $statsPointsNumber.text(points);
      // change visibility to hidden when clicked
      // preserves spacing between $klingons
      $klingons.css({"visibility": "hidden"}).delay(500).remove();
    });
    // update appended klingons counter
    appendKlingons += 1;
  // use random interval from appendKlingonsRandomTime
  // to run appendKlingonsInterval function
  }, appendKlingonsRandomTime);
// end infiniteRenderGameChars function
};

// ########################################
// # INFINITE GAME RESET
// ########################################
//
const infiniteGameReset = () => {
  // clear #char-container each round
  $charContainer.empty();
  // update round timer with ∞
  $statsTimerNumber.text("∞");
  // update #round-number display with ∞
  $statsRoundNumber.text("∞");
  //
  $messagesContainer.css({"visibility": "visible"})
  // add .message-in animation
  .addClass("messages-in")
  // add round number as text
  .append($messages.text("READY?!?"));
  //
  // wait 5 seconds before running inner command
  // but go to next command...
  setTimeout(() => {
    // add m.message-out animation
    $messagesContainer.addClass("messages-out");
  }, 5000);
  //
  // ...next command
  // wait 2.8 seconds before running inner command
  // but go to next command...
  setTimeout(() => {
    // hide $messagesContainer
    // and remove classes
    $messagesContainer
    .removeClass("messages-in")
    .removeClass("messages-out")
    .css({"visibility": "hidden"});
  }, 5800);
  //
  // wait 6.8 seconds before running inner command
  setTimeout(() => {
    // run game untill player refresh page
    infiniteRenderGameChars();
  }, 6800);
// end infiniteGameReset function
};

// ########################################
// # WON GAME!
// # UNLOCK ∞ ROUNDS
// ########################################
//
const infiniteRounds = () => {
  // clear #char-container each round
  $charContainer.empty();
  // change $messagesContainer to visible
  $messagesContainer.css({"visibility": "visible"})
  // add .message-in animation
  .addClass("messages-in")
  // add round number as text
  .append($messages.text("Play for ∞!"));
  //
  // wait 2 seconds before running inner command
  // but go to next command...
  setTimeout(() => {
    // add m.message-out animation
    $messagesContainer.addClass("messages-out");
  }, 2000);
  //
  // ...next command
  // wait 2.8 seconds before running inner command
  // but go to next command...
  setTimeout(() => {
    // hide $messagesContainer
    // and remove classes
    $messagesContainer
    .removeClass("messages-in")
    .removeClass("messages-out")
    .css({"visibility": "hidden"});
  }, 2800);
  //
  // ...next command
  // wait 3 seconds before running inner command
  setTimeout(() => {
    // go to gameReset();
    infiniteGameReset();
  }, 3200);
// end infiniteRounds function
};

// ########################################
// # click event listener
// # START BUTTON
// ########################################
//
$($startButton).click((event) => {
  // reset arrayIndex and points variables
  arrayIndex = 0;
  points = 0;
  // hide $startButton, $socialMediaContainer, $titleContainer
  $startButton.css({"visibility": "hidden"});
  $socialMediaContainer.css({"visibility": "hidden"});
  $titleContainer.css({"visibility": "hidden"});
  //
  // go to ## step 1 ##
  gameRoundStart();
// end $startButton click event listener function
});

// ########################################
// # GAME RESET
// ########################################
//
const gameReset = () => {
  // clear #char-container each round
  $charContainer.empty();
  //
  // show $startButton, $socialMediaContainer, $titleContainer
  $startButton.css({"visibility": "visible"});
  $socialMediaContainer.css({"visibility": "visible"});
  $titleContainer.css({"visibility": "visible"});
// end gameReset function
};

// ########################################
// # ## STEP 2 ##
// # APPEND GAME CHARACTERS ON ROUND START
// ########################################
//
// clear screen, append tribbles and $klingons.
// click event listeners for $tribbles and $klingons
const renderGameChars = () => {
  //
  // ----------------------------------------
  // | append tribbles timed function
  // ----------------------------------------
  // appended tribbles counter
  let appendTribbles = 0;
  // generate random number between 800 - 1000ms,
  // used to append tribbles at random interval
  let appendTribblesRandomTime = Math.floor(Math.random() * 1000) + 800;
  // interval function to pause between appends of tribbles
  const appendTribblesInterval = setInterval(() => {
    // css random animation-duration for .char-animation
    // generates random number between 2.8 - 7, used as seconds
    let animateTime = Math.floor(Math.random() * 7) + 2.8;
    // generates random number between 7 - 17, used for height, width of tribbles
    let $tribbleSize = Math.floor(Math.random() * 17) + 7;
    // generates random number between -3 - 95
    // used to determin how far left tribble will div will be
    let $tribblesMoveLeft = Math.floor(Math.random() * 95) - 3;
    // if appendTribbles >= gameRoundsCharAmount[arrayIndex] -1...
    if (appendTribbles >= gameRoundsCharAmount[arrayIndex] - 1) {
      // ...stop appendTribblesInterval function
      clearInterval(appendTribblesInterval);
    };
    // assign $tribbles to value div.tribble.char-animation
    // add css with random animateTime number
    // add animate with random height, size and move left
    const $tribbles = $("<div>")
      .addClass("tribbles char-animation")
      .css({"--animation-time": animateTime + 's'})
      .animate({
        height: $tribbleSize + 'vmin',
        width: $tribbleSize + 'vmin',
        left: $tribblesMoveLeft + 'vw',
      },);
    // append $tribbles
    $("#char-container").append($tribbles);
    // listen for $tribbles click
    $($tribbles).click((event) => {
      // add 1 to points
      points += 1;
      // update points display
      $statsPointsNumber.text(points);
      // change visibility to hidden when clicked
      // preserves spacing between $klingons
      $tribbles.css({"visibility": "hidden"});
    });
    // update appended tribbles counter
    appendTribbles += 1;
  // use random interval from appendTribblesRandomTime
  // to run appendTribblesInterval function
  }, appendTribblesRandomTime);
  //
  // ----------------------------------------
  // | append klingons timed function
  // ----------------------------------------
  // appended klingons counter
  let appendKlingons = 0;
  // generate random number between 800 - 1000ms,
  // used to append klingons at random interval
  let appendKlingonsRandomTime = Math.floor(Math.random() * 1000) + 800;
  // interval function to pause between appends of klingons
  const appendKlingonsInterval = setInterval(() => {
    // css random animation-duration for .char-animation
    // generates random number between 2 - 7, used as seconds
    let animateTime = Math.floor(Math.random() * 7) + 2;
    // generates random number between 7 - 17, used for height, width of klingons
    let $tribbleSize = Math.floor(Math.random() * 17) + 7;
    // generates random number between 7 - 83
    // used to determin how far left tribble will div will be
    let $klingonsMoveLeft = Math.floor(Math.random() * 83) + 7;
    // if appendKlingons >= ((gameRoundsCharAmount[arrayIndex]) / 2) - 1)...
    if (appendKlingons >= ((gameRoundsCharAmount[arrayIndex]) / 2) - 2) {
      // ...stop appendKlingonsInterval function
      clearInterval(appendKlingonsInterval);
    };
    // assign $klingons to value div.tribble.char-animation
    // add css with random animateTime number
    // add animate with random height, size and move left
    const $klingons = $("<div>")
      .addClass("klingons char-animation")
      .css({"--animation-time": animateTime + 's'})
      .animate({
        height: $tribbleSize + 'vmin',
        width: $tribbleSize + 'vmin',
        left: $klingonsMoveLeft + 'vw',
      },);
    // append $klingons
    $("#char-container").append($klingons);
    // listen for $klingons click
    $($klingons).click((event) => {
      // subtract 1 to points
      points -= 1;
      // update points display
      $statsPointsNumber.text(points);
      // change visibility to hidden when clicked
      // preserves spacing between $klingons
      $klingons.css({"visibility": "hidden"});
    });
    // update appended klingons counter
    appendKlingons += 1;
  // use random interval from appendKlingonsRandomTime
  // to run appendKlingonsInterval function
  }, appendKlingonsRandomTime);
  //
  // go to ## step 3 ##
  // wait 400ms before running inner command
  setTimeout(() => {
    // run countdownTimer();
    countdownTimer();
  }, 400);
};

// ########################################
// # ## STEP 3 ##
// # ROUND COUNTDOWN TIME DISPLAY
// ########################################
//
// countdown timer for round display time
const countdownTimer = () => {
  // seconds variable, start at 15
  let seconds = 15;
  // seconds interval function
  const interval = setInterval(() => {
    // if seconds === 0
    if (seconds === 0) {
      // stop counting
      clearInterval(interval);
    };
    // update round timer with seconds variable
    $statsTimerNumber.text(seconds);
    // subtract 1 from seconds
    // start interval again
    seconds -= 1;
  }, 1000);
  // go to ## step 4 ##
  // located in /js/main.js
  checkPlayerScore();
// end countdownTimer function
};
