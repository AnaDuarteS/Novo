$(document).ready(function() {
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        const activeIndexDisplay = document.getElementById('activeIndex');
        const nextButton = document.getElementById('nextButton');

        nextButton.addEventListener('click', () => {
            activeSectionIndex++;
            activeIndexDisplay.textContent = activeSectionIndex;
        });

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
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

