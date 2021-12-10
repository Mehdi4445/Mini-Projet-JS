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

function valid()
{
      var letters = /^[A-Za-z]+$/;

      if(document.getElementById("name").value.match(letters) || document.getElementById("lastname").value.match(letters))
      {
      return true;
      }
      else
      {
        const para = document.createElement("p");
        const node = document.createTextNode("Name ans last name must have letters only");
        para.appendChild(node);
        const element = document.getElementById("div1");
        element.appendChild(para);
        return false;
      
      }
    }

    function validAge (){
        
        if (document.getElementById("age").value <=17 ){
        const para = document.createElement("p");
        const node = document.createTextNode("This gym is only for 18+");
        para.appendChild(node);
        const element = document.getElementById("div2");
        element.appendChild(para);
        return false;
    
           }
    }

    function validNum(){
        var numbers = [0-9];
        if( isNaN(document.getElementById("tel").value) || document.getElementById("tel").value.length < 8){
        const para = document.createElement("p");
        const node = document.createTextNode("Please provide a valide phone number");
        para.appendChild(node);
        const element = document.getElementById("div3");
        element.appendChild(para);
        return false;
        }
    }

    function validHig(){
        if (document.getElementById("height").value.length != 3 || document.getElementById("height").value < 100 || document.getElementById("height").value > 200){
            const para = document.createElement("p");
            const node = document.createTextNode("Please provide a valide hight");
            para.appendChild(node);
            const element = document.getElementById("div4");
            element.appendChild(para);
            return false;
        }
    }