// JQuary Video Code Start

$(".js-modal-btn").modalVideo();

// JQuary Video Code End

// Progress Bar Satrt
$(window).on('scroll', function () {
    let scroll = $(window).scrollTop();
    let oTop = $('.progress-bar').offset().top - window.innerHeight;
    if (scroll > oTop) {
        $(".progress-bar").addClass("progressbar-active");
    }
    else {
        $(".progress-bar").removeClass("progressbar-active");
    }
});
// Progress Bar End


// --AOS Animation Start --//
AOS.init();
// --AOS Animation End--//



// <-------free loader start---->

$(window).on('load', function () {
    setTimeout(function () {
        $(".loader-wrapper").fadeOut("slow");
    }, 2000);
});
// <-------free loader ENd---->

// Window Header Start
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $('.site-navigation').addClass("active")
    } else {
        $('.site-navigation').removeClass("active")
    };
});

//  scroll code
function openSection(sectionId) {
    const sectionToScroll = document.getElementById(sectionId);
    if (sectionToScroll) {
        sectionToScroll.scrollIntoView({ behavior: 'smooth' });
    }
}

