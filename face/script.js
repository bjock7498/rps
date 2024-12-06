function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}
const buttonContainer = document.getElementById('buttonContainer');
const originalColors = [];

for (let i = 0; i < 10; i++) {
    const button = document.createElement('button');
    const randomColor = getRandomColor();
    button.style.backgroundColor = randomColor;
    button.textContent = `Button ${i + 1}`;
    originalColors.push(randomColor);
    buttonContainer.appendChild(button);
}

function changeColors() {
    const selectedColor = document.getElementById('colorSelect').value;
    const buttons = buttonContainer.getElementsByTagName('button');

    for (let i = 0; i < buttons.length; i++) {
        if (selectedColor === 'random') {
            buttons[i].style.backgroundColor = getRandomColor();
        } else if (selectedColor === 'reset') {
            buttons[i].style.backgroundColor = originalColors[i];
        } else {
            buttons[i].style.backgroundColor = selectedColor;
        }
    }
}