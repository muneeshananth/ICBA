$(document).on('ready', function() {
    $(".regular").slick({
        dots: true,
        arrow: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        arrows: false,
        speed: 6000,
        initialSlide: 1
    });
    $(".service_slide").slick({
        dots: true,
        arrow: false,
        autoplay: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            }
        ]
    });
    $(".tes_t").slick({
        dots: true,
        arrow: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            }
        ]
    });
    $(".testimonial_s").slick({
        dots: true,
        arrow: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            }
        ]
    });
    $(".testimonial_ss").slick({
        dots: true,
        arrow: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            }
        ]
    });
    $('.slider').slick({
        autoplay: true,
        infinite: true,
        arrows: false,
        dots: false,
        autoplaySpeed: 4000,
        speed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
    }).slickAnimation();
});


$(document).ready(function() {
    $("#c_lose").click(function() {
        $(".collapse").removeClass("show");
    });
});

$(window).on("scroll touchmove", function() {
    $('#header_nav').toggleClass('top_header', $(document).scrollTop() > $(window).height() * 0.2);
});