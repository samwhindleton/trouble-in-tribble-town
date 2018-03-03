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
//
// game charaters
// assign $tribble to value .tribble
const $tribbles = $(".tribbles");
// assign $klingons to value .klingons
const $klingons = $(".klingons");

// ########################################
// # click event listeners
// ########################################
//
// listen for $startButton click
$($startButton).click((event) => {
  // reset points variable
  points = 0;
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
// end $startButton click event listener function
});
//
// listen for $tribble click
$($tribbles).click((event) => {
  // console log if clicked
  console.log("I clicked a tribble");
  points += 1;
  console.log(points);
// end $tribble click event listener function
});
//
// listen for $klingons click
$($klingons).click((event) => {
  // console log if clicked
  console.log("I clicked a klingons");
  points -= 1;
  console.log(points);
// end $klingons click event listener function
});
