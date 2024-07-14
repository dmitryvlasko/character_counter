const btn = document.getElementById('select-lang-btn');
const dropdown = document.getElementById('dropdown');
const navbar_left = document.querySelector('.navbar-left');


btn.addEventListener('click', function() {
    dropdown.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    const click = e.composedPath().includes(navbar_left);
    if ( !click ) {
        dropdown.classList.remove('active');
    }
});





/* navbar_left.addEventListener('click', function(event) {
    event._isClick = true
});

document.body.addEventListener('click', function(event) {
    if (event._isClick == true) return
}); */





/* btn.addEventListener('click', () => {
    if (dropdown.classList.contains('active') == true) {
        dropdown.classList.remove('active');
    } else {
        dropdown.classList.add('active');
    }
    
}); */