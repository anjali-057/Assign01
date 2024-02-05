// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables

-------------------------------------------------- */
// Constants for main button query selectors

const noun1Btn = document.getElementById("noun1");
const verbBtn = document.getElementById("verb");
const adjectiveBtn = document.getElementById("adjective");
const noun2Btn = document.getElementById("noun2");
const settingBtn = document.getElementById("setting");

// Constants for p tag to display query selectors
const choosenNoun1Para = document.getElementById("choosenNoun1");
const choosenVerbPara = document.getElementById("choosenVerb");
const choosenAdjectivePara = document.getElementById("choosenAdjective");
const choosenNoun2Para = document.getElementById("choosenNoun2");
const choosenSettingPara = document.getElementById("choosenSetting");

// Constants for final Btns and p tags

const playbackBtn = document.getElementById("playback");
const randomBtn = document.getElementById("random");

// Array of nouns 1
const nouns1 = [
  "The Turkey",
  "Mom",
  "Dad",
  "The Dog",
  "My Teacher",
  "The Elephant",
  "The Cat",
];
// Array for verbs
const verbs = ["sat on", "ate", "danced with", "saw", "dosen't like", "kissed"];
// Array of adjectives
const adjectives = [
  "a funny",
  "a scary",
  "a goofy",
  "a slimy",
  "a barking",
  "a fat",
];
// Array of nouns2
const nouns2 = ["goat", "monkey", "fish", "cowfrog", "bug", "worm"];
// Array of settings
const settings = [
  "on the moon",
  "on the chair",
  "in my spaghetti",
  "in my soup",
  "on the grass",
  "in my shoes",
];

let count = 0;

// variables for the story ,studentid and student name
const story = document.getElementById("story");
const studentId = 200556508;
const studentName = "Anjali Sharma";
/* Functions
-------------------------------------------------- */
function noun1_on_click() {
  // variable to get array element and displaying it
  choosenNoun1Para.textContent = nouns1[count % nouns1.length];
  count++;
}

function verb_on_click() {
  choosenVerbPara.textContent = verbs[count % verbs.length];
  count++;
}

function adjective_on_click() {
  choosenAdjectivePara.textContent = adjectives[count % adjectives.length];
  count++;
}

function noun2_on_click() {
  choosenNoun2Para.textContent = nouns2[count % nouns2.length];
  count++;
}

function setting_on_click() {
  choosenSettingPara.textContent = settings[count % settings.length];
  count++;
}

function playback_on_click() {
  const userStory = `${choosenNoun1Para.textContent} ${choosenVerbPara.textContent} ${choosenAdjectivePara.textContent} ${choosenNoun2Para.textContent} ${choosenSettingPara.textContent}`;
  story.textContent = userStory;
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Grabbing random elements from arrays and calling the function to display
function random_on_click() {
  choosenNoun1Para.textContent = getRandomElement(nouns1);
  choosenVerbPara.textContent = getRandomElement(verbs);
  choosenAdjectivePara.textContent = getRandomElement(adjectives);
  choosenNoun2Para.textContent = getRandomElement(nouns2);
  choosenSettingPara.textContent = getRandomElement(settings);
  playback_on_click();
}

/* Event Listeners
-------------------------------------------------- */

noun1Btn.addEventListener("click", noun1_on_click);
verbBtn.addEventListener("click", verb_on_click);
adjectiveBtn.addEventListener("click", adjective_on_click);
noun2Btn.addEventListener("click", noun2_on_click);
settingBtn.addEventListener("click", setting_on_click);

playbackBtn.addEventListener("click", playback_on_click);
randomBtn.addEventListener("click", random_on_click);

function addStudentId() {
  document.getElementById(
    "studentId"
  ).innerHTML = `Student ID: ${studentId} <br> Name: ${studentName}`;
}

// Event listener for the h1 element
document.getElementById("storymakerH1").addEventListener("click", addStudentId);