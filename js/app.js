//variable for the point system
var points = 0;

// variable asking the users name and returns a greeting
function firstName() {
  var userName = prompt('What\'s your name? ');
  alert('Check me out ' + userName + '!');
  return userName;
}

// //QUESTION #1
function wash(userName) {
  var fromWA = prompt('Am I from Washington? ');
  fromWA = fromWA.toLowerCase();

  if (fromWA === 'no' || fromWA === 'n') {
    console.log('This answer should be no or n.');
    alert('That answer is correct ' + userName + '.');
    points++;
  } else if (fromWA === 'yes' || fromWA === 'y') {
    alert('That is incorrect.');
  } else {
    alert('That answer is not acceptable');
  }
}

// //QUESTION #2
function kid(userName) {
  var gotKid = prompt('Do I have kids? ');
  gotKid = gotKid.toLowerCase();

  if (gotKid === 'yes' || gotKid === 'y') {
    console.log('This answer should be yes or y.');
    alert('That answer is correct ' + userName + '.');
    points++;
  } else if (gotKid === 'no' || gotKid === 'n') {
    alert('That is incorrect.');
  } else {
    alert('That answer is not acceptable');
  }
}

// // //QUESTION #3
function pets(userName) {
  var gotPets = prompt('Do I have pets? ');
  gotPets = gotPets.toLowerCase();

  if (gotPets === 'no' || gotPets === 'n') {
    console.log('This answer should be no or n.');
    alert('That answer is correct ' + userName + '.');
    points++;
  } else if (gotPets === 'yes' || gotPets === 'y') {
    alert('That is incorrect.');
  } else {
    alert('That answer is not acceptable');
  }
}

// //QUESTION #4
function instrument(userName) {
  var playInstrument = prompt('Do I play an instrument? ');
  playInstrument = playInstrument.toLowerCase();

  if (playInstrument === 'yes' || playInstrument === 'y') {
    console.log('This answer should be yes or y.');
    alert('That answer is correct ' + userName + '.');
    points++;
  } else if (playInstrument === 'no' || playInstrument === 'n') {
    alert('That is incorrect.');
  } else {
    alert('That answer is not acceptable');
  }
}

// //QUESTION #5
function deer(userName) {
  var huntDeer = prompt('Do I hunt? ');
  huntDeer = huntDeer.toLowerCase();

  if (huntDeer === 'yes' || huntDeer === 'y') {
    console.log('This answer should be yes or y.');
    alert('That answer is correct ' + userName + '.');
    points++;
  } else if (huntDeer === 'no' || huntDeer === 'n') {
    alert('That is incorrect.');
  } else {
    alert('That answer is not acceptable');
  }
}

// //QUESTION #6
function number(userName) {
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

alert('You answered ' + points + ' questions correctly');

var name = firstName();
wash(name);
kid(name);
pets(name);
instrument(name);
deer(name);
number(name);
