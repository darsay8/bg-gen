var css = document.querySelector('h3');
var colorOne = document.querySelector('.color-one');
var colorTwo = document.querySelector('.color-two');
var body = document.getElementById('gradient');


//body.style.background = 'red';

//console.log(css);
//console.log(colorOne);
//console.log(colorTwo);


function setGradient() {
    body.style.background = 'linear-gradient(to right,'
        + colorOne.value + ', ' + colorTwo.value + ')';

    css.textContent = body.style.background + ';';
}


colorOne.addEventListener('input', setGradient);

colorTwo.addEventListener('input', setGradient);