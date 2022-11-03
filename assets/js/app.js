$(function() {
    var header = $("#header"),
        introH = $("#intro").innerHeight()
        scrollOffSet = $(window).scrollTop();//в scrollOffset хранится текущий scroll

    /* Fixed Header */
    checkScroll(scrollOffSet);

    $(window).on("scroll", function() {
        scrollOffSet = $(this).scrollTop();

        checkScroll(scrollOffSet);
    });

    function checkScroll(scrollOffSet) {
        if(scrollOffSet >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smooth Scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault(); // отмена стандартного поведения ссылки

        var $this = $(this),
            blockId = $this.data('scroll');
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    })

    /* Collapse */
    $("[data-collapse").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');
        
        $this.toggleClass("active");
    });

});