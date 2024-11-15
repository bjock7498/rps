
var rpsDB = {
    'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
    'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
    'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
};

const values = Object.values(rpsDB);
function shoot(choice) {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * 3)];

    var result = rpsDB[choice][computerChoice];
    console.log(result)
    var message;

    if (result === 1) {
        message = `You Win! ${choice} beats ${computerChoice}.`;
    }
    else if (result === .5) { 
        message = `Tie! You both pulled ${(choice)}`;
    }
    else {
        message = `You lost :( ${(computerChoice)} beats ${(choice)}`
    }
    document.getElementById('result').innerHTML = `
    <p>${message}</
    `
}