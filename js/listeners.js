// ########################################
// # container variables
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
//
// stats variables
//
const $statsRoundNumber = $("#round-number");
//
const $statsTimerNumber = $("#timer-number");
//
const $statsPointsNumber = $("#points-number");

// ########################################
// # click event listeners
// ########################################
//
// listen for $startButton click
$($startButton).click((event) => {
  // detach $startButton, $socialMediaContainer, $titleContainer
  $startButton.detach();
  $socialMediaContainer.detach();
  $titleContainer.detach();
  // change height of $gameContainer and $charContainer
  $gameContainer.css({
    height:"100vh",
  });
  $charContainer.css({
    height:"100vh",
  });;
  // go to ## step 1 ##
  // located in: /js/main.js
  startGame();
// end $startButton click event listener function
});

// ########################################
// # game round start listener
// ########################################
//
// ## step 4 ##
// clear screen, append $tribbles and $klingons.
// click event listeners for $tribbles and $klingons
const renderGameChars = () => {
  // update #round-number display with gameRound[arrayIndex]
  $statsRoundNumber.text(gameRound[arrayIndex]);
  // clear #char-container each round
  $charContainer.empty();
  // for loop to render $tribbles and $klingons each round
  // check gameRoundCharAmount array, amount of $tribbles and $klingons
  for (let i = 0; i < gameRoundCharAmount[arrayIndex]; i++) {
    // game charaters variables
    // assign $tribbles to value div.tribble.char-animation
    // add css with random animateTime number
    const $tribbles = $("<div>").addClass("tribbles char-animation")
    .css({"--animation-time": animateTime + 's'});
    // assign $klingons to value .klingons.char-animation
    const $klingons = $("<div>").addClass("klingons char-animation")
    .css({"--animation-time": animateTime + 's'});
    // append $tribbles and $klingons
    $("#char-container").append($tribbles);
    $("#char-container").append($klingons);
    // click event listeners
    // listen for $tribbles click
    $($tribbles).click((event) => {
      // add 1 to points
      points += 1;
      // update points display
      $statsPointsNumber.text(points);
      // change visibility to hidden
      // preserves spacing between $klingons
      $tribbles.css({"visibility": "hidden"});
    });
    // listen for $klingons click
    $($klingons).click((event) => {
      // subtract 1 from points
      points -= 1;
      // update points display
      $statsPointsNumber.text(points);
      // change visibility to hidden
      // preserves spacing between $klingons
      $klingons.css({"visibility": "hidden"});
    });
  // end of for loop
  };
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
  let seconds = 10;
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
