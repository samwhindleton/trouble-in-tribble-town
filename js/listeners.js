// console.log("jQuery loaded: " + $);

// assign $tribble to value .tribble
const $tribbles = $(".tribbles");
// assign $tribble to value .klingons
const $klingons = $(".klingons");

// click event listeners
// listen for $tribble click
$($tribbles).click((event) => {
  // console log if clicked
  console.log("I clicked a tribble");
  points += 1;
  console.log(points);
// end $tribble click event listener function
});

// listen for $klingons click
$($klingons).click((event) => {
  // console log if clicked
  console.log("I clicked a klingons");
  points -= 1;
  console.log(points);
// end $klingons click event listener function
});
