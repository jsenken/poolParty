const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  // "mongodb://heroku_j1c90gv6:3iac0s6mlqnuca9mr8hifquvkj@ds237723.mlab.com:37723/heroku_j1c90gv6"
  "mongodb://localhost/testProject3"

);

const poolSeed = [
  {
    name: "53 Prop Bets For Super Bowl 53",
    ask1: "Will the national anthem be over 2 minutes long?",
    option1a: "Yes",
    option1b: "No",
    answer1: "",
    ask2: "Will any player be shown taking a knee during the anthem?",
    option2a: "Yes",
    option2b: "No",
    answer2: "",
    ask3: "Will Gladys Knight say the word Atlanta on mic?",
    option3a: "Yes",
    option3b: "No",
    answer3: "",
    ask4: "Will the Coin Toss be Heads or Tails?",
    option4a: "Heads",
    option4b: "Tails",
    answer4: "",
    ask5: "Which team will receive the first kickoff?",
    option5a: "Rams",
    option5b: "Patriots",
    answer5: "",
    ask6: "What color will Bill Belichick's hoodie be?",
    option6a: "Blue",
    option6b: "Gray",
    option6c: "Red",
    option6d: "White",
    option6e: "Black",
    option6f: "Field",
    answer6: "",
    ask7: "What will be the first play?",
    option7a: "Run",
    option7b: "Pass",
    answer7: "",
    ask8: "Which team will be penalized first?",
    option8a: "Patriots",
    option8b: "Rams",
    answer8: "",
    ask9: "What will the first score be?",
    option9a: "Touchdown",
    option9b: "Field Goal or Saftey",
    answer9: "",
    ask10: "Will the player's number who scores the first touchdown be over 50?",
    option10a: "Yes",
    option10b: "No",
    answer10: "",
    ask11: "How many yards will the first play be for?",
    option11a: "< 1 yards",
    option11b: "1-7 yards",
    option11c: "> 7 yards",
    answer11: "",
    ask12: "Which team will punt first in the 2nd quarter?",
    option12a: "Patriots",
    option12b: "Rams",
    answer12: "",
    ask13: "Which team will record the last sack of the 1st half?",
    option13a: "Patriots",
    option13b: "Rams",
    answer13: "",
    ask14: "Will there be a score in the final 2 minutes of the first half?",
    option14a: "Yes",
    option14b: "No",
    answer14: "",
    ask15: "Which team will lead at halftime?",
    option15a: "Patriots",
    option15b: "Rams",
    answer15: "",
    ask16: "What will the first song be?",
    option16a: "Girls like you",
    option16b: "What lovers do",
    option16c: "Moves like jagger",
    option16d: "Dont wanna know",
    option16e: "Field",
    answer16: "",
    ask17: "Who will be shown first during the half time show?",
    option17a: "Travis Scott",
    option17b: "Big Boi",
    answer17: "",
    ask18: "Will adam levine wear a hat at any point in the show?",
    option18a: "Yes",
    option18b: "No",
    answer18: "",
    ask19: "Will 'welcome to atlanta' be played during the halftime show?",
    option19a: "Yes",
    option19b: "No",
    answer19: "",
    ask20: "Which special guest will appear?",
    option20a: "Mick Jagger",
    option20b: "Christina Agulera",
    option20c: "Cardi B",
    option20d: "Future",
    option20e: "Andre 3000",
    option20f: "Blake Shelton",
    option20g: "Multiple of these",
    option20h: "None of these",
    answer20: "",
    ask21: "Will the first pass of 3rd quarter be?",
    option21a: "Caught",
    option21b: "Incomplete",
    option21c: "Interception",
    answer21: "",    
    ask22: "Who will score the first touchdown of the 2nd half?",
    option22a: "Running Back",
    option22b: "Wide Receiver",
    option22c: "Tight End",
    option22d: "QB sneak",
    option22e: "Field",
    answer22: "",
    ask23: "Which team will turn the ball over in the 3rd quarter?",
    option23a: "Patriots",
    option23b: "Rams",
    option23c: "Both",
    option23d: "Neither",
    answer23: "",
    ask24: "Which team will call a timeout in the 3rd quarter?",
    option24a: "Patriots",
    option24b: "Rams",
    option24c: "Both",
    option24d: "Neither",
    answer24: "",
    ask25: "Which will be higher?",
    option25a: "Number of travis scott songs performed at halftime",
    option25b: "Number of penalties in 3rd quarter",
    answer25: "",
    ask26: "Which coach will be shown first on TV in the quarter?",
    option26a: "Bill Belichek",
    option26b: "Sean McVay",
    answer26: "",
    ask27: "Which team will kick the first field goal of the quarter?",
    option27a: "Patriots",
    option27b: "Rams",
    answer27: "",
    ask28: "Will either team convert on a fourth down in the quarter?",
    option28a: "Yes",
    option28b: "No",
    answer28: "",    
    ask29: "Will there be more than 1 score after the two minute warning?",
    option29a: "Yes",
    option29b: "No",
    answer29: "",
    ask30: "What will the last score of the game be?",
    option30a: "Touchdown",
    option30b: "Field Goal",
    option30c: "Saftey",
    answer30: "",
    ask31: "Will more than 2 players throw a pass during the game?",
    option31a: "Yes",
    option31b: "No",
    answer31: "",
    ask32: "Will any team score a touchdown of less than 3 yards?",
    option32a: "Yes",
    option32b: "No",
    answer32: "",
    ask33: "Which will occur first?",
    option33a: "Fumble",
    option33b: "Interception",
    option33c: "Turnover on downs",
    answer33: "",
    ask34: "Will either team attempt an onside kick?",
    option34a: "Yes",
    option34b: "No",
    answer34: "",
    ask35: "Will any team score three times in a row?",
    option35a: "Yes",
    option35b: "No",
    answer35: "",
    ask36: "Who will win the game?",
    option36a: "Patriots",
    option36b: "Rams",
    answer36: "",
    ask37: "Will more than 53 points be scored in the game?",
    option37a: "Yes",
    option37b: "No",
    answer37: "",
    ask38: "Who will score in more quarters of the game?",
    option38a: "Patriots",
    option38b: "Rams",
    option38c: "Tie",
    answer38: "",
    ask39: "Who will run for more yards?",
    option39a: "Todd Gurley",
    option39b: "Sony Michel",
    answer39: "",
    ask40: "Who will throw for more yards?",
    option40a: "Jared Goff",
    option40b: "Tom Brady",
    answer40: "",
    ask41: "Which total will be higher?",
    option41a: "Donald Trump tweets on Feb 3rd",
    option41b: "Patriots TDs in game",
    answer41: "",
    ask42: "Which total will be higher?",
    option42a: "Warriors margin of victory over Lakers Feb 3rd",
    option42b: "Rams Total Score",
    answer42: "",
    ask43: "Which total will be higher?",
    option43a: "Kyrie Irving points against thunder Feb 3rd",
    option43b: "Patriots Total Score",
    answer43: "",
    ask44: "Which total will be higher?",
    option44a: "Number of artists to perform at halftime outside of maroon 5",
    option44b: "Turnovers in game",
    answer44: "",
    ask45: "Which total will be higher?",
    option45a: "Players ejeted during game",
    option45b: "Field Goal posts hit during game",
    answer45: "",
    ask46: "Will Giselle Bundchen be shown on TV?",
    option46a: "Yes",
    option46b: "No",
    answer46: "",
    ask47: "Will the announcers mention the Atlanta Falcons at any point during the game?",
    option47a: "Yes",
    option47b: "No",
    answer47: "",
    ask48: "Which car company's commerical will be shown on air first?",
    option48a: "Toyota",
    option48b: "Honda",
    option48c: "Ford",
    option48d: "Dodge",
    option48e: "Chevy",
    option48f: "Field",
    answer48: "",
    ask49: "Which beer company's commercial will be shown on air first?",
    option49a: "Budweiser",
    option49b: "Miller",
    option49c: "Coors",
    option49d: "Michelob Ultra",
    option49e: "Pabst Blue Ribbon",
    answer49: "",
    ask50: "Which soda company's commerical will be shown on air first?",
    option50a: "Coke",
    option50b: "Pepsi",
    option50c: "Dr. Pepper",
    answer50: "",
    ask51: "What color gatorade will be thrown on the winning coach?",
    option51a: "Lime/Green/Yellow",
    option51b: "Orange/Red",
    option51c: "Clear/Water",
    option51d: "Blue/Purple",
    answer51: "",
    ask52: "Who will win the Superbowl MVP?",
    option52a: "Tom Brady",
    option52b: "Jared Goff",
    option52c: "Todd Gurley",
    option52d: "James White",
    option52e: "Sony Michel",
    option52f: "Field",
    answer52: "",
    ask53: "Who will the superbowl MVP mention first?",
    option53a: "Team",
    option53b: "Coaches",
    option53c: "God",
    option53d: "Family",
    option53e: "Other",
    answer53: "",
    date: new Date(Date.now())
  },
  
];

db.Pool
  .remove({})
  .then(() => db.Pool.collection.insertMany(poolSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
