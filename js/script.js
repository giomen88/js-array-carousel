const gallery = document.querySelector('.gallery');

const images = ["img/0.jpg", "img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"]

let imgList = '';

for (let i = 0; i < images.length; i++) {
    imgList += `<img src="${images[i]}">`
}

gallery.innerHTML = imgList
