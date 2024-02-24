let user = document.getElementById('user');
let btn = document.getElementById('btn');
let output = document.getElementById('output');

function foo () {
    output.textContent = user.value;
}

btn.addEventListener('click', foo);