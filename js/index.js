'use strict';

function handleInputName() {
  document.getElementById('name').addEventListener('blur', () => {
    document.getElementById('name').style.filter = 'blur(4px)';
  });
}

function handleInputDate() {
  document.getElementById('date').addEventListener('blur', () => {
    document.getElementById('date').style.filter = 'blur(4px)';
  });
}

document.getElementById('name').addEventListener('focusout', () => {
  const inputContent = document.getElementById('name').value;

  document.getElementById('nameWithoutVocals').value = removeVocalsAndSpaces(inputContent);

  handleInputName();
});

document.getElementById('date').addEventListener('focusout', () => {
  const input = document.getElementById('date').value;

  const parts = input.split('-');
  const fromDate = parts[2] + '/' + parts[1] + '/' + parts[0];
  console.log(fromDate);

  document.getElementById('days').value = calculateIntervalDays(fromDate);

  handleInputDate();
});
