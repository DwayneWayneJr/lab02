//prompt asks for name and says hello to the user
var userName = prompt('What\'s your name? ');{
  alert('Check me out ' + userName + '!!!');
}

var whereFrom = prompt('Am I from Washington? ').toLowerCase();

if (whereFrom === 'no'){
  console.log('This answer is a no.'); alert('BINGO ' + name + '.');
} else{
  alert('That\'s a no-go at this station');
}

var kids = prompt('Do I have kids? ').toLowerCase();

if (kids === 'yes'){
  console.log('This answer is a yes.'); alert('Cha Chiiiiing' + '!!!');
} else{
  alert('Not quite the response I was hoping for.');
}

var pets = prompt('Do I have pets? ').toLowerCase();

if (pets === 'no'){
  console.log('This answer is a no.'); alert('Studied hard you have' + '.');
} else{
  alert('Again you must try my young Padawan.');
}

var instrument = prompt('Do I play an instrument? ').toLowerCase();

if (instrument === 'yes'){
  console.log('This answer is a yes.'); alert('I\'d call that a touchdown friend.');
} else{
  alert('No, just no.');
}

var hunt = prompt('Do I hunt? ').toLowerCase();

if (hunt === 'yes'){
  console.log('This answer is a yes.'); alert('I knew you knew ' + name + '.');
} else{
  alert('Please try again.');
}

var ansKey = confirm('Click okay to see the answers?');
if (ansKey === true){
    alert('The answers are, I am not from Washington, I do have a kid, I do not have pets, I do play an instrument, and I do hunt.')
}