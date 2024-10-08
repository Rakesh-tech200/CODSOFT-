
const display = document.getElementById('display');


function appendCharacter(character) {
  display.value += character;
}


function clearDisplay() {
  display.value = '';
}


function deleteLast() {
  display.value = display.value.slice(0, -1);
}


function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}


document.getElementById('clear').addEventListener('click', clearDisplay);
document.getElementById('delete').addEventListener('click', deleteLast);
document.getElementById('equals').addEventListener('click', calculate);

document.querySelectorAll('.buttons button[data-value]').forEach(button => {
  button.addEventListener('click', function() {
    appendCharacter(this.getAttribute('data-value'));
  });
});
