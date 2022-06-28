// RECUPERO GALLERIA DAL DOM
const gallery = document.querySelector('.gallery');

// CREO ARRAY RISORSE
const images = ["img/0.jpg", "img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"];

// VARIABILE + CICLO FOR + MANIPOLAZIONE PER INSERIRE IMMAGINI NEL DOM
let image = '';

for (let i = 0; i < images.length; i++) {
    image += `<img src="${images[i]}" alt="image${[i]}">`;
}

gallery.innerHTML = image;

// RECUPERO BOTTONI DAL DOM
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// RECUPERO IL TAG IMG NEL DOM
const element = document.getElementsByTagName('img');

// VARIABILE PER IMMAGINE ATTIVA
let currentActiveIndex = 0;

// AGGIUNGO CLASSE ACTIVE ALLA PRIMA IMMAGINE
element[currentActiveIndex].classList.add('active');

/////////////////////////// CLICK BOTTONE NEXT

// AGGIUNGO FUNZIONE AL BUTTON NEXT

nextButton.addEventListener('click', function () {

    element[currentActiveIndex].classList.remove('active');

    currentActiveIndex++;

    if (currentActiveIndex === element.length) {
        currentActiveIndex = 0;
    }

    element[currentActiveIndex].classList.add('active');
})

/////////////////////////// CLICK BOTTONE PREV

// AGGIUNGO FUNZIONE AL BUTTON PREV
prevButton.addEventListener('click', function () {

    element[currentActiveIndex].classList.remove('active');

    currentActiveIndex--;

    if (currentActiveIndex < 0) {
        currentActiveIndex = element.length - 1;
    }

    element[currentActiveIndex].classList.add('active');
})

