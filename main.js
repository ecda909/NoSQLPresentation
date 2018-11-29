function pagetwo() {
    $('.SlideOne').hide();
    $('.SlideTwo').fadeIn('slow');
}

function pagethree() {
    $('.SlideTwo').hide();
    $('.SlideThree').fadeIn('slow');
}

function pagefour() {
    $('.SlideThree').hide();
    $('.SlideFour').fadeIn('slow');
}

function pagefive() {
    $('.SlideFour').hide();
    $('.SlideFive').fadeIn('slow');
}

function pagesix() {
    $('.SlideFive').hide()
    $('.SlideSix').fadeIn('slow');
}

function pageSeven() {
    $('.SlideSix').hide();
    $('.SlideSeven').fadeIn('slow');
}

function pageEight() {
    $('.SlideSeven').hide();
    $('.SlideEight').fadeIn('slow');
}

function pageNine() {
    $('.SlideEight').hide();
    $('.SlideNine').fadeIn('slow');
}

function pageTen() {
    $('.SlideNine').hide();
    $('.SlideTen').fadeIn("slow");
}

function pageEleven() {
    $('.SlideTen').hide();
    $('.SlideEleven').fadeIn("slow");
}

var count = 0;
(function movenum() {
    setTimeout(function() {
        if (count !== 8) {
            var t = $('.number')
            t.text(Number(t.text()) + 1);
            count++;
            movenum()
        } else {
            var t = $('.number')
            t.text(Number(t.text()) - 8)
            count = 0
            movenum()
        }
    }, 1300);
})();

//Slide Three Functions
function year2000() {
    $('.RowThreeYear').show();
    $('.RowFourYear').show();
}

function year2007() {
    $('.RowThreeYear').hide();
    $('.RowFourYear').hide();
    $('.RowFiveYear').show();
}

function year2009() {
    $('.RowFiveYear').hide();
    $('.RowSixYear').show();
}

function year2014() {
    $('.RowSixYear').hide();
    $('.RowSevenYear').show();
}

function year2018() {
    $('.RowSevenYear').hide();
    $('.RowEightYear').show();
}

//Slide Seven Functions

function sss1() {
    $('.sss1img').hide();
    $('.sss2img').fadeIn();
}

function sss2() {
    $('.sss2img').hide();
    $('.sss3img').fadeIn();
}

function sss3() {
    $('.sss1img').hide();
    $('.sss3img').hide();
    $('.sss4img').fadeIn();
    $('.sssnextreact').hide();
    $('.sssnext').fadeIn();
}

//Slide Eight Functions

function sep1f() {
    $('.sep2').slideToggle();
}

function sep2f() {
    $('.sep3').slideToggle();
}