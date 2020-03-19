// Initialize ALL global variables here
// allTheWords = []
// This code here selects a random word
const wordList = [
  "vis",
  "toeter",
  "developer",
  "telefoon",
  "moeder",
  "snoer",
  "geeuw"
];
const maxAmount = 5;

const wordPicker = function (list) {
  const index = Math.floor(Math.random() * list.length);
  const x = list;
  return x[index];
};

const wordGuessed = function (word) {
  const remaining = word.filter(function (letter) {
    return !inputs.includes(letter);
  });
  return remaining.length === 0;
};

const clean = function () {
  document.querySelector("input").value = "";
};


const winTheGame = function () {
  document.querySelector(".win").style.display = "block";
  result = true;
};

const lose4 = function () {
  document.querySelector(".lose").style.display = "block";
  result = true;
};

const showCorrectWord = function (word) {
  document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
};

let tries = 0;
const updateTriesDisplay = function (tries) {
  document.querySelector(".lives span").innerHTML = 5 - tries;
};

const letters = function (word, inputs) {
  let wrongLetters = inputs.filter(function (letter) {
    // If the letter is in the word return.... false/true (we want to remove that then)
    return !word.includes(letter);
  });
  document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
};

const theWord = function (word, inputLetterWords) {
  let display = word.map(function (letter) {
    if (inputLetterWords.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });
  document.querySelector(".the_word").innerHTML = display.join(" ");
};

const guessLetter = function () {
  if (result) {
    return;
  }
  const input1 = document.querySelector("input").value;
  document.querySelector("input").value = "";




  if (!word.includes(input1)) {
    tries++;
    document.querySelector(".lives span").innerHTML = 5 - tries;
  }

  inputs.push(input1);
  theWord(word, inputs);
  letters(word, inputs);

  if (wordGuessed(word, inputs)) {
    winTheGame();
  } else if (tries >= 5) {
    lose4();
  }
};

function getThePlayer() {
  let play = document.getElementById("player1");
  play = play + "We are about to start the game";
  return play;
}

function beginTheGameWithPlayer(player1) {
  getThePlayer(player1);
  result = false;
  document.querySelector(".win").style.display = "none";
  document.querySelector(".lose").style.display = "none";
  document.querySelector("input").value = "";

  word = wordPicker(wordList).split("");
  document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
  word;

  tries = 0;
  document.querySelector(".lives span").innerHTML = 5 - 0;

  inputs = [];
  theWord(word, inputs);
  letters(word, inputs);
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".guess").addEventListener("click", guessLetter);
  document.querySelector(".restart").addEventListener("click", beginTheGameWithPlayer);
  beginTheGameWithPlayer();
});