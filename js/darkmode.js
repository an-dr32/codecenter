const html = document.querySelector('html');
const check = document.querySelector('#checkbox')

console.log(check)

check.addEventListener('change', function() {
    html.classList.toggle('dark')
} )