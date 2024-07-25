
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500 );
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)

        }

    }
})

const pages = document.querySelectorAll('.book-page.page-right');

//Create reverse index function
let totalPages = pages.length;
let pageNumber = 0;

console.log('totalPages:', totalPages);
function reverseIndex() {
    console.log('ReverseIndex called. Current pageNumber:', pageNumber);
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
    console.log('Updated pageNumber:', pageNumber);
}


//Opening animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');
// Verificar si coverRight y pageLeft están definidos
console.log('coverRight:', coverRight);
console.log('pageLeft:', pageLeft);
console.log('pages:', pages, pages[pageNumber].classList);

//opening animation (cover right animation)
setTimeout(() => {
    coverRight.classList.add('turn');
    console.log('Cover right: class "turn" added');
}, 2200) //cubierta

setTimeout(() => {
    coverRight.style.zIndex = -1;
    console.log('Cover right: zIndex set to -1');
}, 2900) //pagina de contacto tiempo en el que aparece

//opening animation (page left or profile page animation)
setTimeout(() => {
    pageLeft.style.zIndex = 20;
    console.log('Page left: zIndex set to 20'); //pagina cero
}, 3300)


//opening animation (all page animation)
pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        console.log(`Before removing turn: pageNumber is ${pageNumber}`);
        pages[pageNumber].classList.remove('turn');
        console.log(`After removing turn: pageNumber is ${pageNumber}, zIndex will be set to ${10 + index}`);
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
            console.log(`After setting zIndex: pageNumber is ${pageNumber}, zIndex set to ${10 + index}`);
          
        }, 550) //tiempo en el que va a empezar las animación hacia atrás, 
    }, (index + 1) * 90 + 2200 )
})