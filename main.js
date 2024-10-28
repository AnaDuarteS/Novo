$(document).ready(function() {
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
    });
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".content-right", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".content-left", {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".content-left .buttonEntre", {
    ...scrollRevealOption,
    delay: 1500,
});