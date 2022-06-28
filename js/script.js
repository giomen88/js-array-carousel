// RECUPERO GALLERIA E THUMBNAILS DAL DOM
const gallery = document.querySelector('.gallery');
const thumbnails = document.querySelector('.thumbnails')

// CREO ARRAY RISORSE
const sources = ["img/0.jpg", "img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"];

// VARIABILE + CICLO FOR + MANIPOLAZIONE PER INSERIRE IMMAGINI NEL DOM
let galleryImages = '';
let thumbnailsImages = '';

for (let i = 0; i < sources.length; i++) {
    galleryImages += `<img src="${sources[i]}" alt="gallery-image${[i]}">`;
    thumbnailsImages += `<img src="${sources[i]}" alt="thumbnails-image${[i]}">`;
}

gallery.innerHTML = galleryImages;
thumbnails.innerHTML = thumbnailsImages;

// RECUPERO BOTTONI DAL DOM
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// RECUPERO IL TAG IMG NEL DOM
const galleryElements = document.querySelectorAll('.gallery img');
const thumbnailsElements = document.querySelectorAll('.thumbnails img');

// VARIABILE PER IMMAGINE ATTIVA
let currentActiveIndex = 0;

// AGGIUNGO CLASSE ACTIVE ALLA PRIMA IMMAGINE
galleryElements[currentActiveIndex].classList.add('active');
thumbnailsElements[currentActiveIndex].classList.add('active');

/////////////////////////// CLICK BOTTONE NEXT

// AGGIUNGO FUNZIONE AL BUTTON NEXT

nextButton.addEventListener('click', function () {

    galleryElements[currentActiveIndex].classList.remove('active');
    thumbnailsElements[currentActiveIndex].classList.remove('active');

    currentActiveIndex++;

    if (currentActiveIndex === galleryElements.length && thumbnailsElements.length) {
        currentActiveIndex = 0;
    }

    galleryElements[currentActiveIndex].classList.add('active');
    thumbnailsElements[currentActiveIndex].classList.add('active');
})

/////////////////////////// CLICK BOTTONE PREV

// AGGIUNGO FUNZIONE AL BUTTON PREV
prevButton.addEventListener('click', function () {

    galleryElements[currentActiveIndex].classList.remove('active');
    thumbnailsElements[currentActiveIndex].classList.remove('active');

    currentActiveIndex--;

    if (currentActiveIndex < 0) {
        currentActiveIndex = galleryElements.length - 1 && thumbnailsElements.length - 1;
    }

    galleryElements[currentActiveIndex].classList.add('active');
    thumbnailsElements[currentActiveIndex].classList.add('active');
})

