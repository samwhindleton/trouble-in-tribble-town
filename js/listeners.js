// ########################################
// # container and stats variables
// ########################################
//
// assign $charContainer to value #char-container
const $charContainer = $("#char-container");
// assign $gameContainer to value #game-container
const $gameContainer = $("#game-container");
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
// # click event listeners
// # START BUTTON
// ########################################
//
$($startButton).click((event) => {
  // detach $startButton, $socialMediaContainer, $titleContainer
  $startButton.detach();
  $socialMediaContainer.detach();
  $titleContainer.detach();
  // go to ## step 1 ##
  // located in: /js/main.js
  startGame();
// end $startButton click event listener function
});

// ########################################
// # appends game chars on game round start
// ########################################
//
// ## step 4 ##
// clear screen, append tribbles and $klingons.
// click event listeners for $tribbles and $klingons
const renderGameChars = () => {
  // clear #char-container each round
  $charContainer.empty();
  // update #round-number display with gameRound[arrayIndex]
  $statsRoundNumber.text(gameRound[arrayIndex]);
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
    // generates random number between 2 - 7, used as seconds
    let animateTime = Math.floor(Math.random() * 7) + 2;
    // generates random number between 7 - 17, used for height, width of tribbles
    let $tribbleSize = Math.floor(Math.random() * 17) + 7;
    // generates random number between 7 - 83
    // used to determin how far left tribble will div will be
    let $tribblesMoveLeft = Math.floor(Math.random() * 83) + 7;
    // if appendTribbles >= gameRoundCharAmount[arrayIndex] -1...
    if (appendTribbles >= gameRoundCharAmount[arrayIndex] - 1) {
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
    console.log("Appended Tribbles: " + appendTribbles);
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
    // if appendKlingons >= ((gameRoundCharAmount[arrayIndex]) / 2) - 1)...
    if (appendKlingons >= ((gameRoundCharAmount[arrayIndex]) / 2) - 2) {
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
      // add 1 to points
      points += 1;
      // update points display
      $statsPointsNumber.text(points);
      // change visibility to hidden when clicked
      // preserves spacing between $klingons
      $klingons.css({"visibility": "hidden"});
    });
    console.log("Appended Klingons: " + appendKlingons);
    // update appended klingons counter
    appendKlingons += 1;
  // use random interval from appendKlingonsRandomTime
  // to run appendKlingonsInterval function
  }, appendKlingonsRandomTime);
  // go to ## step 5 ##
  // located in: /js/main.js
  gameRoundTimer();
};

// ########################################
// # round countdown timer
// ########################################
//
// ## step 3 ##
// countdown timer for round time display
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
  renderGameChars();
};
