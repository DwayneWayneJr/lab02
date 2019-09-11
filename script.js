'use strict'

//prompt asks for name and says hello to the user
var name = prompt('What\'s your name? ');{
    alert('Check me out ' + name + '!!!');
}

var whereFrom = prompt('Am I from Washington? ').toLowerCase();

if (whereFrom === 'no'){
    alert('BINGO ' + name + '.')
} else{
    alert('That\'s a no-go at this station')
}

var kids = prompt('Do I have kids? ').toLowerCase();

if (kids === 'yes'){
    alert('Cha Chiiiiing' + '!!!')
} else{
    alert('Not quite the response I was hoping for.')
}

var pets = prompt('Do I have pets? ').toLowerCase();

if (pets === 'no'){
    alert('Studied hard you have' + '.')
} else{
    alert('Again you must try my young Padawan.')
}

var instrument = prompt('Do I play an instrument? ').toLowerCase();

if (instrument === 'yes'){
    alert('I\'d call that a touchdown friend.')
} else{
    alert('No, just no.')
}

var hunt = prompt('Do I hunt? ').toLowerCase();

if (hunt === 'yes'){
    alert('I knew you knew ' + name  + '.')
} else{
    alert('Please try again.')
}