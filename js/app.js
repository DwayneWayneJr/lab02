//variable for the point system
var points = 0;
var name;

// variable asking the users name and returns a greeting
function firstName() {
  name = prompt('What\'s your name? ');
  alert('Check me out ' + name + '!');
  //Call next function here in each preceeding code block to trigger the next function and tally up the correct answers
  wash();
}

// //QUESTION #1
function wash() {
  var fromWA = prompt('Am I from Washington? ');
  fromWA = fromWA.toLowerCase();

  if (fromWA === 'no' || fromWA === 'n') {
    console.log('This answer should be no or n.');firstName();
    alert('That answer is correct ' + name + '.');
    points++;
  } else if (fromWA === 'yes' || fromWA === 'y') {
    alert('That is incorrect.');
  } else {
    alert('That answer is not acceptable');
  }
  kid();
}

// //QUESTION #2
function kid() {
  var gotKid = prompt('Do I have kids? ');
  gotKid = gotKid.toLowerCase();

  if (gotKid === 'yes' || gotKid === 'y') {
    console.log('This answer should be yes or y.');
    alert('That answer is correct ' + name + '.');
    points++;
  } else if (gotKid === 'no' || gotKid === 'n') {
    alert('That is incorrect.');
  } else {
    alert('That answer is not acceptable');
  }
  pets();
}

// // //QUESTION #3
function pets() {
  var gotPets = prompt('Do I have pets? ');
  gotPets = gotPets.toLowerCase();

  if (gotPets === 'no' || gotPets === 'n') {
    console.log('This answer should be no or n.');
    alert('That answer is correct ' + name + '.');
    points++;
  } else if (gotPets === 'yes' || gotPets === 'y') {
    alert('That is incorrect.');
  } else {
    alert('That answer is not acceptable');
  }
  instrument();
}

// //QUESTION #4
function instrument() {
  var playInstrument = prompt('Do I play an instrument? ');
  playInstrument = playInstrument.toLowerCase();

  if (playInstrument === 'yes' || playInstrument === 'y') {
    console.log('This answer should be yes or y.');
    alert('That answer is correct ' + name + '.');
    points++;
  } else if (playInstrument === 'no' || playInstrument === 'n') {
    alert('That is incorrect.');
  } else {
    alert('That answer is not acceptable');
  }
  deer();
}

// //QUESTION #5
function deer() {
  var huntDeer = prompt('Do I hunt? ');
  huntDeer = huntDeer.toLowerCase();

  if (huntDeer === 'yes' || huntDeer === 'y') {
    console.log('This answer should be yes or y.');
    alert('That answer is correct ' + name + '.');
    points++;
  } else if (huntDeer === 'no' || huntDeer === 'n') {
    alert('That is incorrect.');
  } else {
    alert('That answer is not acceptable');
  }
  number();
}

// //QUESTION #6
function number() {
  var highNumber = 5;
  var favNumber = 3;

  for (var i = 0; i < 4; i++) {
    console.log('highNumber: ' + highNumber);
    while (highNumber !== favNumber) {
      highNumber = prompt('My Favorite number is less than 6, can you guess in 4 tries?');

      highNumber = parseInt(highNumber);

      if (highNumber > favNumber) {
        alert('You are too high');
        break;

      } else if (highNumber < favNumber) {
        alert('You are too low');
        break;

      } else if (highNumber === favNumber) {
        alert('You are correct');
        points++;
        break;

      } else {
        alert('Not a valid input');
        break;
      }
    }
  }
  alert('The correct answer is ' + favNumber);
}
// //QUESTION #7
// var guess = 0;
// var stateAns = ['Texas','Oklahoma'];
// while (guess <= 5 && !isCorrect) {
//   var stateGuess = prompt('Can you guess one of the four states I have lived in')
//   stateGuess = stateGuess.toLowerCase();
// }
// for ( var i = 0; i < 5; i++) {
//   console.log('guess: ' + guess);
//   if (stateGuess === stateAns[i]) {
//     alert('You are correct');
//     points++;
//     break;

//   } else{
//     alert('')
//   }
// }

//Call first function here
firstName();

alert('You answered ' + points + ' questions correctly');


