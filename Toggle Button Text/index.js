let button = document.querySelector('#button');

function foo() {
    if (button.textContent === 'Hello') {
        button.textContent = 'Goodbye';
    } else {
        button.textContent = 'Hello';
    }
}
button.addEventListener('click', foo);