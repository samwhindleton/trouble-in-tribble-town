# General Assembly | Web Development Immersive

## Unit 1 | Project

### Trouble in Tribble Town - Game

---

### Game Concept

#### About

You've responded to a destress call from the Tribble homeworld, Iota Geminorum IV. The Tribble's are currently under attack by a Klingon armada that was sent by the Klingon Empire to destroy the Tribble homeworld. The Tribble's have no means of defense and you're the only ship around for lightyears in this star system. It's up to you to save the Tribbles from the Klingon's!

#### Objective

* Player needs to collect(by clicking) falling/moving tribbles before time runs out.

  * Successfully clicking on a Tribble will add a point to the scoreboard.

  * Successfully clicking on a Klingon will subtract a point from the scoreboard.

* 5(or more) round game

  * Each round requires a minimum score to successfully progress to the next round.

    * With each round progression the new round will require a higher minimum score

* Successfully pass each round to WIN the game! ^-^

---

#### Instructions

* Collect as many Tribbles as you can before time runs out.

* Tribble's = 1 point

* Klingon's = -1 point

---

### Technologies Used

* **HTML**

  * game layout

* **CSS**

  * characters/objects design

  * characters/objects animation

* **JavaScript**

  * game functions

  * game objects

  * game arrays

* **jQuery**

  * countdown timer

  * listener for click event

---

### Wireframe

Initial sketch/wireframe

![Game Wireframe](/images/wireframe/wireframe.png)

---

### Tasks To Complete

Tasks to complete list is not in order.

| Tasks To Do List |
| --- |
| game/webpage layout |
| basic element styling |
| animate game objects |
| game reset function |
| host on website/github pages |
| game win state |
| game lose state |
| falling/moving objects |
| remove object from dom when below x value |

### Tasks Completed

Tasks completed list is in order.

| # | Tasks Completed | Timeline |
| --- | --- | --- |
| 1. | Created required directories and files | 02 March 2018 |
| 2. | Created HTML boilerplate | 02 March 2018 |
| 3. | Added CSS Reset to style.css | 02 March 2018 |
| 4. | Checked CSS and JS files linked | 02 March 2018 |
| 5. | Added div/containers for gameplay area | 02 March 2018 |
| 6. | Added temporary styling to containers and game objects | 02 March 2018 |
| 7. | Created click event listeners for game objects | 02 March 2018 |
| 8. | Created variable to keep track of player points | 02 March 2018 |
| 9. | Created start button. Combined elements that are styled the same in css | 02 March 2018 |
| 10. | Created start button click event listener | 02 March 2018 |
| 1. | Added loop for game rounds when game starts | 03 March 2018 |
| 2. | Added function to append game chars onto char container div | 03 March 2018 |
| 3. | Now clears screen prior to next round start | 03 March 2018 |
| 4. | Added containers for rounds, timer, and points. Minimum css styling added. | 03 March 2018 |
| 5. | Characters are now removed from the dom when clicked | 03 March 2018 |
| 6. | Added display update to points and round containers | 03 March 2018 |
| 7. | Disabled text highlighting by player | 03 March 2018 |
| 1. | Added countdown timer function, updates round time remaining in time container | 04 March 2018 |
