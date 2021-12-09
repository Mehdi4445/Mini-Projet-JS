$(window).on('load', function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
});



$('.set-bg').each(function () {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
});


var hero_s = $(".hs-slider");
hero_s.owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: false
});

function getGoal() {
    var x = document.getElementById("goal").value;

    if (x == 0) {

        document.getElementById("choice_1").style.display = "none"
        document.getElementById("choice_2").style.display = "none"

    } else if (x == 1) {

        document.getElementById("choice_1").style.display = "block"
        document.getElementById("choice_2").style.display = "none"

    } else {

        document.getElementById("choice_1").style.display = "none"
        document.getElementById("choice_2").style.display = "block"
    }
}

function addAllergie(where) {
    var main = document.getElementById("allergies");
    var cntr = (main.datacntr || 0) + 1;
    main.datacntr = cntr;

    var clone = main.cloneNode(true);
    clone.id = "section" + cntr;
    where.parentNode.insertBefore(clone, where);
}