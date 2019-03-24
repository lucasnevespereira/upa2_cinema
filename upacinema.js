// SLIDER 
let currentSlide = 0;
let slides = document.getElementsByClassName('slide');

function slideRight() {
    console.log('onclick marche');
    // SI current slide = 3(nombre de slides) - 1 alors on incremente (+1)
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    for (let i = 0; i < slides.length; i++) {
        if (i === currentSlide) {
            slides[i].classList.remove('hidden');
        } else {
            slides[i].classList.add('hidden');
        }
    }
}

function slideLeft() {
    console.log('onclick marche');
    // SI current slide = 0 alors on décremente (+1)
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    for (let i = 0; i < slides.length; i++) {
        if (i === currentSlide) {
            slides[i].classList.remove('hidden');
        } else {
            slides[i].classList.add('hidden');
        }
    }
}

function view(classdesc) {
    console.log('on click marche');
    let elements = document.getElementsByClassName(classdesc);
    elements[0].classList.toggle('hidden');
}

function closeReservation() {
    console.log('close marche');
    let reservation = document.getElementsByClassName('reservation');
    let blurTitle = document.getElementsByClassName('films-title');
    let blurFilms = document.getElementsByClassName('films');

    reservation[0].classList.add('hidden');

    blurFilms[0].classList.remove('blur');

    blurTitle[0].classList.remove('blur');

}

function show() {
    let reservation = document.getElementsByClassName('reservation');
    let blurFilms = document.getElementsByClassName('films');
    let blurTitle = document.getElementsByClassName('films-title');

    blurTitle[0].classList.toggle('blur');

    blurFilms[0].classList.toggle('blur');

    reservation[0].classList.toggle('hidden');
}

function prix() {
    let places = document.getElementById('places');
    let total = document.getElementById('total');

    total.innerHTML = places.value * 10;
}

function validation() {
    let message = document.getElementsByClassName('message');
    message[0].classList.remove('hidden');
}