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
const $startButton = $("#start-button>h1");

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
// ## step 3 ##
// clear screen, append $tribbles and $klingons.
// click event listeners for $tribbles and $klingons
const renderGameChars = () => {
  // clear #char-container each round
  $charContainer.empty();
  // for loop to render $tribbles and $klingons each round
  // check gameRoundCharAmount array, amount of $tribbles and $klingons
  for (let i = 0; i < gameRoundCharAmount[arrayIndex]; i++) {
    // game charaters variables
    // assign $tribbles to value div.tribble
    const $tribbles = $("<div>").addClass("tribbles");
    // assign $klingons to value .klingons
    const $klingons = $("<div>").addClass("klingons");;
    // append $tribbles and $klingons
    $("#char-container").append($tribbles);
    $("#char-container").append($klingons);
    // click event listeners
    // listen for $tribbles click
    $($tribbles).click((event) => {
      // add 1 to points
      points += 1;
    });
    // listen for $klingons click
    $($klingons).click((event) => {
      // subtract 1 from points
      points -= 1;
    });
  // end of for loop
  };
  // go to ## step 4 ##
  // located in: /js/main.js
  gameRoundTimer();
};
