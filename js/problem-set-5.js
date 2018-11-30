/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  do {
    height = prompt("Please enter an integer from 1 to 23:");
  } while (height < 1 || height > 23 || height % 1 != 0);

  let marioResult = document.getElementById('mario-easy-output');
  let x = 1;
  let space1 = "";
  height = Number(height);

  while (x < height) {
    space1 = space1 + "&nbsp";
    x = x + 1;
  }

  let hashtag = "##";
  let result = space1 + hashtag + "<br/>";

  let y = 1;
  let z = 1;
  let zSub = 1;
  let space = "&nbsp";

  while (y < (height - 1)) {
    hashtag = hashtag + "#";
    while (z < (height - 2)) {
      space = space + "&nbsp";
      z = z + 1;
    }
    result = result + space + hashtag + "<br/>";
    space = "&nbsp";
    z = zSub + 1;
    zSub = zSub + 1;
    y = y + 1;
  }
  while (y < height) {
    hashtag = hashtag + "#";
    result = result + hashtag + "<br/>";
    y = y + 1;
  }

  marioResult.innerHTML = "<code>" + result + "</code>";

  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  do {
    height = prompt("Please enter an integer from 1 to 23:");
  } while (height < 1 || height > 23 || height % 1 != 0);

  let marioHardResult = document.getElementById('mario-hard-output');
  let x = 1;
  let space1 = "";
  height = Number(height);

  while (x < height) {
    space1 = space1 + "&nbsp";
    x = x + 1;
  }

  let hashtag = "##";
  let resultTwo = space1 + hashtag + "&nbsp&nbsp" + hashtag + "<br/>";

  let y = 1;
  let z = 1;
  let zSub = 1;
  let space = "&nbsp";

  while (y < (height - 1)) {
    hashtag = hashtag + "#";
    while (z < (height - 2)) {
      space = space + "&nbsp";
      z = z + 1;
    }
    resultTwo = resultTwo + space + hashtag + "&nbsp&nbsp" + hashtag + "<br/>";
    space = "&nbsp";
    z = zSub + 1;
    zSub = zSub + 1;
    y = y + 1;
  }
  while (y < height) {
    hashtag = hashtag + "#";
    resultTwo = resultTwo + hashtag + "&nbsp&nbsp" + hashtag + "<br/>";
    y = y + 1;
  }

  marioHardResult.innerHTML = "<code>" + resultTwo + "</code>";
  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  do {
    card = prompt("Please enter your credit card number:");
  } while ((card % 1) != 0);

  let cardTwo = card;
  let i = ((cardTwo.length) - 2);
  let value = "";
  let totalSum = "";
  let sum = "";

  while (i >= 0) {
    value = 2 * Number(cardTwo.charAt(i));
    if (value >= 10) {
      value = value.toString();
      sum = Number(value.charAt(0)) + Number(value.charAt(1));
    } else {
      sum = value;
    }
    totalSum = Number(totalSum) + sum;
    i = i - 2;
  }

  i = ((cardTwo.length) - 1);

  while (i >= 0) {
    value = Number(cardTwo.charAt(i));
    sum = value;
    totalSum = Number(totalSum) + sum;
    i = i - 2;
  }


  let creditResult = document.getElementById('credit-output');

  if ((totalSum % 10) == 0) {
    if ((cardTwo.length) == 15) {
      creditResult.innerHTML = "<img src ='images/amex.png'/>";
    } else if ((cardTwo.length) == 13) {
      creditResult.innerHTML = "<img src ='images/visa.png'/>";
    } else if ((cardTwo.length) == 16) {
      if (cardTwo.charAt(0) == "4") {
        creditResult.innerHTML = "<img src ='images/visa.png'/>";
      } else {
        creditResult.innerHTML = "<img src ='images/mastercard.png'/>";
      }
    }
  } else {
    creditResult.innerHTML = "<img src ='images/invalid.png'/>";
  }

  card = Number(card);
  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {

  let randomNumber = Math.floor((Math.random() * 1000) + 1);
  let userGuess = "";
  let numberOfGuesses = "";

  while (Number(userGuess) !== randomNumber) {
    do {
      userGuess = prompt("Please input an integer guess between 1 and 1000:");
    } while ((userGuess % 1) != 0);
    if (Number(userGuess) > randomNumber) {
      alert("Your guess was greater than the random number.")
    }
    if (Number(userGuess) < randomNumber) {
      alert("Your guess was less than the random number.")
    }
    numberOfGuesses = Number(numberOfGuesses) + 1;
  }

  let guessOutput = document.getElementById('guess-output');
  guessOutput.innerHTML = "Random number: " + randomNumber + "<br/>" + "Number of guesses: " + numberOfGuesses;
  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY
  do {
    windspeed = prompt("Please input an integer wind speed greater or equal to 0:")
  } while ((Number(windspeed) % 1) != 0 || Number(windspeed) <= 0);

  windspeed = Number(windspeed);
  let hurricaneOutput = document.getElementById('hurricane-output');

  if (windspeed >= 157) {
    hurricaneOutput.innerHTML = "Category 5 Hurricane.";
  } else if (windspeed >= 130 && windspeed < 157) {
    hurricaneOutput.innerHTML = "Category 4 Hurricane.";
  } else if (windspeed >= 111 && windspeed < 130) {
    hurricaneOutput.innerHTML = "Category 3 Hurricane.";
  } else if (windspeed >= 96 && windspeed < 111) {
    hurricaneOutput.innerHTML = "Category 2 Hurricane.";
  } else if (windspeed >= 74 && windspeed < 96) {
    hurricaneOutput.innerHTML = "Category 1 Hurricane.";
  } else if (windspeed >= 39 && windspeed < 74) {
    hurricaneOutput.innerHTML = "Tropical Storm.";
  } else if (windspeed < 39) {
    hurricaneOutput.innerHTML = "The skies are calm...";
  }


  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY

  let score = "";
  let numberOfScores = "";

  while (numberOfScores < 6) {
    do {
      score = prompt("Please input a score between 0.0 and 100.0:");
    } while ( Number(score) <= 0 || Number(score) >= 100 );
    scores.push(Number(score);
    numberOfScores = numberOfScores + 1;
  }

  scores.sort(function(a, b){return a - b});
  let min = scores[0];
  let max = scores[5];

  scores.splice(0, 1);
  scores.splice(5, 1);

  let average = (Number(scores[0]) + Number(scores[1]) + Number(scores[2]) + Number(scores[3])) / 4;
  let gymnasticsOutput = document.getElementById('gymnastics-output');
  gymnasticsOutput.innerHTML = "Discarded Values: " + min + ", " + max + "<br/>" + "Average Score: " + average;




  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */

  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */

  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}
