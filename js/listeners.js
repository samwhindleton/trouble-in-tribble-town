// console.log("jQuery loaded: " + $);

// ########################################
// # variables
// ########################################
//
// containers
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
  // start the game
  startGame();
// end $startButton click event listener function
});

// ########################################
// # game round start listener
// ########################################
//
// ## step 3 ##
// append
const renderGameChars = () => {
  console.log("Appending Tribbles");
  // for loop to render $tribbles and $klingons
  // on startRound
  for (let i = 0; i < 5; i++) {
    console.log("Adding div: " + i);
    // game charaters variables
    // assign $tribbles to value div.tribble
    const $tribbles = $("<div>").addClass("tribbles");
    // assign $klingons to value .klingons
    const $klingons = $("<div>").addClass("klingons");;
    //

    $("#char-container").append($tribbles);
    $("#char-container").append($klingons);

    // listen for $tribbles click
    $($tribbles).click((event) => {
      // console log if clicked
      console.log("I clicked a tribble");
      points += 1;
      console.log(points);
    // end $tribbles click event listener function
    });
    // listen for $klingons click
    $($klingons).click((event) => {
      // console log if clicked
      console.log("I clicked a klingons");
      points -= 1;
      console.log(points);
    // end $klingons click event listener function
    });
  // end for loop
  };
  // go to step 4
  gameRoundTimer();
}
