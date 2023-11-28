$('.services, #about, .projects, .skills, .contact-us, #menu, .cert-container').hide();

$('.a-logo').click(function(){
    $('.index-row, .services, .projects, .skills, .contact-us, .cert-container').hide();
    $('#about, #menu').fadeIn();
});

$('.s-logo').click(function(){
    $('.index-row, #about, .projects, .skills, .contact-us, .cert-container').hide();
    $('.services, #menu').fadeIn();
});

$('.p-logo').click(function(){
    $('.index-row, .services, #about, .skills, .contact-us, .cert-container').hide();
    $('.projects, #menu').fadeIn();
});

$('.skill-logo').click(function(){
    $('.index-row, .services, #about, .projects, .contact-us, .cert-container').hide();
    $('.skills, #menu').fadeIn();
});

$('.c-logo').click(function(){
    $('.index-row, .services, #about, .projects, .skills, .cert-container').hide();
    $('.contact-us, #menu').fadeIn();
});

$('.cert-logo').click(function(){
    $('.index-row, .services, #about, .projects, .skills, .cert-container').hide();
    $('.cert-container, #menu').fadeIn();
});

/****  About ****/

$('.about-experience, .about-education').hide();

$('.a-skill').click(function(){
    $('.about-experience, .about-education').hide();
    $('.about-skills').fadeIn();
});

$('.a-exp').click(function(){
    $('.about-skills, .about-education').hide();
    $('.about-experience').fadeIn();
});

$('.a-edu').click(function(){
    $('.about-skills, .about-experience').hide();
    $('.about-education').fadeIn();
});

document.addEventListener('DOMContentLoaded', function () {
    let menu = document.getElementById("menu");
    let hide = document.getElementById("hide-btns");

    menu.addEventListener('click', function () {
        if (hide.style.opacity === '0' || hide.style.opacity === '') {
            hide.style.opacity = '1';
            hide.style.visibility = 'visible';
        } else{
            hide.style.opacity = '0';
            hide.style.visibility = 'hidden';
        }
    });
});

if(window.matchMedia("(max-width: 768px)")){
    console.log("working... ")
    $('#burger').click(function(){
        $('#burger').hide();
    })
}

new WOW().init();