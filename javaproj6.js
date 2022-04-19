$('body').on('click', '.header', function(e) {
    $('.firstC').find('.kolekcija').stop().slideUp();
    $(this).closest('.firstC').find('.kolekcija').stop().slideToggle();
});
$('body').on('click', '.header2', function(e) {
    $('.secondC').find('.kolekcija').stop().slideUp();
    $(this).closest('.secondC').find('.kolekcija').stop().slideToggle();
});
$('body').on('click', '.header3', function(e) {
    $('.thirdC').find('.kolekcija').stop().slideUp();
    $(this).closest('.thirdC').find('.kolekcija').stop().slideToggle();
});
$('body').on('click', '.header4', function(e) {
    $('.fourth').find('.kolekcija').stop().slideUp();
    $(this).closest('.fourth').find('.kolekcija').stop().slideToggle();
});
$('body').on('click', '.header5', function(e) {
    $('.fifth').find('.kolekcija').stop().slideUp();
    $(this).closest('.fifth').find('.kolekcija').stop().slideToggle();
});
$('body').on('click', '.header6', function(e) {
    $('.sixth').find('.kolekcija').stop().slideUp();
    $(this).closest('.sixth').find('.kolekcija').stop().slideToggle();
});
$('body').on('click', '.header7', function(e) {
    $('.seventh').find('.kolekcija').stop().slideUp();
    $(this).closest('.seventh').find('.kolekcija').stop().slideToggle();
});


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("broj");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

var sIndex = 1;
showSlid(sIndex);

function plusSlide(n) {
    showSlid(sIndex += n);
}

function currentSlid(n) {
    showSlid(sIndex = n);
}

function showSlid(n) {
    var i;
    var slides = document.getElementsByClassName("brojdva");
    var dots = document.getElementsByClassName("dotdva");
    if (n > slides.length) { sIndex = 1 }
    if (n < 1) { sIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[sIndex - 1].style.display = "block";
    dots[sIndex - 1].className += " active";
}
var tri = 1;
showSli(tri);

function plusSlid(n) {
    showSli(tri += n);
}

function currentSli(n) {
    showSli(tri = n);
}

function showSli(n) {
    var i;
    var slides = document.getElementsByClassName("brojtri");
    var dots = document.getElementsByClassName("dott");
    if (n > slides.length) { tri = 1 }
    if (n < 1) { tri = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[tri - 1].style.display = "block";
    dots[tri - 1].className += " active";
}


var cetiri = 1;
showSl(cetiri);

function plusSli(n) {
    showSl(cetiri += n);
}

function currentSl(n) {
    showSl(cetiri = n);
}

function showSl(n) {
    var i;
    var slides = document.getElementsByClassName("brojcetiri");
    var dots = document.getElementsByClassName("dottc");
    if (n > slides.length) { cetiri = 1 }
    if (n < 1) { cetiri = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[cetiri - 1].style.display = "block";
    dots[cetiri - 1].className += " active";
}

var pet = 1;
showS(pet);

function plusSl(n) {
    showS(pet += n);
}

function currentS(n) {
    showS(pet = n);
}

function showS(n) {
    var i;
    var slides = document.getElementsByClassName("brojpet");
    var dots = document.getElementsByClassName("dotp");
    if (n > slides.length) { pet = 1 }
    if (n < 1) { pet = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[pet - 1].style.display = "block";
    dots[pet - 1].className += " active";
}

var sest = 1;
show(sest);

function plusS(n) {
    show(sest += n);
}

function current(n) {
    show(sest = n);
}

function show(n) {
    var i;
    var slides = document.getElementsByClassName("brojsest");
    var dots = document.getElementsByClassName("dotts");
    if (n > slides.length) { sest = 1 }
    if (n < 1) { sest = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[sest - 1].style.display = "block";
    dots[sest - 1].className += " active";
}

var sedam = 1;
sshow(sedam);

function plus(n) {
    sshow(sedam += n);
}

function scurrent(n) {
    sshow(sedam = n);
}

function sshow(n) {
    var i;
    var slides = document.getElementsByClassName("brojsedam");
    var dots = document.getElementsByClassName("d");
    if (n > slides.length) { sedam = 1 }
    if (n < 1) { sedam = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[sedam - 1].style.display = "block";
    dots[sedam - 1].className += " active";
}