const redButton = document.getElementById('redButton');
    let blueButton = document.getElementById('blueButton');
    let greenButton = document.getElementById('greenButton');
    let yellowButton = document.getElementById('yellowButton');
    let purpleButton = document.getElementById('purpleButton');

    redButton.addEventListener('click', function() {
      document.body.style.backgroundColor = 'red';
    });

    blueButton.addEventListener('click', function() {
      document.body.style.backgroundColor = 'blue';
    });

    greenButton.addEventListener('click', function() {
      document.body.style.backgroundColor = 'green';
    });

    yellowButton.addEventListener('click', function() {
      document.body.style.backgroundColor = 'yellow';
    });

    purpleButton.addEventListener('click', function() {
      document.body.style.backgroundColor = 'purple';
    });