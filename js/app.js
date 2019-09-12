//variable for the point system
var points = 0;

//variable asking the users name and returns a greeting
var userName = prompt('What\'s your name? ');{
  alert('Check me out ' + userName + '!');
}

//QUESTION #1
var fromWA = prompt('Am I from Washington? ');
fromWA = fromWA.toLowerCase();

if (fromWA === 'no' || fromWA === 'n'){
  console.log('This answer should be no or n.');
  alert('That answer is correct ' + userName + '.');
  points++;
} else if (fromWA === 'yes' || fromWA === 'y'){
  alert('That is incorrect.');
}else{
  alert('That answer is not acceptable');
}

//QUESTION #2
var gotKid = prompt('Do I have kids? ');
gotKid = gotKid.toLowerCase();

if (gotKid === 'yes' || gotKid === 'y'){
  console.log('This answer should be yes or y.');
  alert('That answer is correct ' + userName + '.');
  points++;
} else if (gotKid === 'no' || gotKid === 'n'){
  alert('That is incorrect.');
}else{
  alert('That answer is not acceptable');
}

//QUESTION #3
var gotPets = prompt('Do I have pets? ');
gotPets = gotPets.toLowerCase();

if (gotPets === 'no' || gotPets === 'n'){
  console.log('This answer should be no or n.');
  alert('That answer is correct ' + userName + '.');
  points++;
} else if (gotPets === 'yes' || gotPets === 'y'){
  alert('That is incorrect.');
}else{
  alert('That answer is not acceptable');
}

//QUESTION #4
var playInstrument = prompt('Do I play an instrument? ');
playInstrument = playInstrument.toLowerCase();

if (playInstrument === 'yes' || playInstrument === 'y'){
  console.log('This answer should be yes or y.');
  alert('That answer is correct ' + userName + '.');
  points++;
} else if (playInstrument === 'no' || playInstrument === 'n'){
  alert('That is incorrect.');
}else{
  alert('That answer is not acceptable');
}

//QUESTION #5
var huntDeer = prompt('Do I hunt? ');
huntDeer = huntDeer.toLowerCase();

if (huntDeer === 'yes' || huntDeer === 'y'){
  console.log('This answer should be yes or y.');
  alert('That answer is correct ' + userName + '.');
  points++;
} else if (huntDeer === 'no' || huntDeer === 'n'){
  alert('That is incorrect.');
}else{
  alert('That answer is not acceptable');
}

alert('You answered ' + points + ' questions correctly');
