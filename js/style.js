const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slides = document.querySelectorAll('.slide');

prev.addEventListener('click', prevChange);
next.addEventListener('click', nextChange);

function hello() {
    slides.forEach(slide => {
        slide.style.display = 'none'
       }) 
    
       slides[x].style.display = 'flex'
}

let x = 0;
function prevChange() {
    x++
    if(x > slides.length - 1){
        x = 0;
    }

    hello()
 
}


function nextChange() {
    x--
    if( x < 0){
        x = slides.length - 1
    }
    hello()
  
}


