function CheckMood(mood, goodCallback, badCallback) {
  if (mood === "good") {
    goodCallback();
  } else {
    badCallback();
  }
}

function love() {
  console.log("😍");
}

function cry() {
  console.log("😂");
}

function dance() {
  console.log("👯‍♀️");
}

CheckMood("sad", love, cry);
