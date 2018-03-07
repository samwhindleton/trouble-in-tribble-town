// ########################################
// # sound variables:
// # effects, music
// ########################################
//
// ----------------------------------------
// | effects
// ----------------------------------------
//
const appear = new Audio("/sounds/effects/appear.ogg");

const disappear = new Audio("/sounds/effects/disappear.ogg");

const lose = new Audio("/sounds/effects/lose.ogg");

const klingonClick = new Audio("/sounds/effects/klingon_click.ogg");

const tribbleClick = new Audio("/sounds/effects/tribble_click.ogg");

// ----------------------------------------
// | music
// ----------------------------------------
//
// background music
const bgmMenu = new Audio("/sounds/music/bgm_menu.mp3");
// round 1 music
const bgmRound1 = new Audio("/sounds/music/bgm_round_1.mp3");
// round 2 music
const bgmRound2 = new Audio("/sounds/music/bgm_round_2.mp3");
// round 3 music
const bgmRound3 = new Audio("/sounds/music/bgm_round_3.mp3");
// round 4 music
const bgmRound4 = new Audio("/sounds/music/bgm_round_4.mp3");
// round 5 music
const bgmRound5 = new Audio("/sounds/music/bgm_round_5.mp3");
//
// music array
const bgmArray = [bgmRound1, bgmRound2, bgmRound3, bgmRound4, bgmRound5, bgmMenu];
//
// loop background music
bgmMenu.loop = true;
// auto play background music
bgmMenu.play();

// ########################################
// # game variables:
// # characters, player points, arrayIndex,
// # game round, game round char amount,
// # game round min score
// ########################################
//
// game characters
const randomKlingon = ["klingons1", "klingons2"];
const randomTribble = ["tribbles1", "tribbles2", "tribbles3", "tribbles4", "tribbles5"];

// player starting points
let points = 0;
// number of tribbles
let tribbles = 0;
// number of klingons
let klingons = 0;

// number used to determine game round,
// characters generated in round,
// and min score to play next round
let arrIndex = 0;

// number of game rounds
const gameRound = [1, 2, 3, 4, 5];

// number of $tribbles and $klingons per round array
const gameRoundCharAmount = [20, 40, 60, 80, 100];

// number of min score to pass each round
const gameRoundMinScore = [5, 10, 15, 20, 25];
