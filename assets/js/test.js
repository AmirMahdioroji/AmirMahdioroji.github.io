
    /* inspiration
    https://dribbble.com/shots/6339493-Explorers-Layout-Exploration/attachments/1357544?mode=media
    */

    var swiper = new Swiper(".swiper", {
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: false,
    slidesPerView: 1,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
},
    keyboard: {
    enabled: true
},
    //
    mousewheel: {
    thresholdDelta: 70
},
    //
    breakpoints: {
    560: {
    slidesPerView: 2
},
    768: {
    slidesPerView: 3
},
    1024: {
    slidesPerView: 4
}
}
});
    let btns = document.querySelectorAll(".btn-more");
    let slides = document.querySelectorAll(".swiper-slide");
    let close = document.querySelectorAll(".close");

    for (let i = 0; i < slides.length; i++) {
    btns[i].addEventListener("click", function () {
        slides[i].classList.add("active");
    });
}

    for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function () {
        slides[i].classList.remove("active");
    });
}

