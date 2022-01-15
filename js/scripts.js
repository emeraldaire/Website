$(function() {
    $(".carousel").carousel( { interval: 6000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });

    
    // RESERVE BUTTON 
    $("#reserveButton").click(function(){
        $('#reserveModal').modal("show");
    });
    
    // LOGIN BUTTON
    $("#loginButton").click(function(){
        $('#loginModal').modal("show");
    });

    // // REVEAL DROPDOWNS ON HOVER
    // const $dropdown = $(".dropdown");
    // const $dropdownToggle = $(".dropdown-toggle");
    // const $dropdownMenu = $(".dropdown-menu");
    // const showClass = "show";

    // $(window).on("load resize", function() {
    //     if (this.matchMedia("(min-width: 768px)").matches) {
    //     $dropdown.hover(
    //     function() {
    //     const $this = $(this);
    //     $this.addClass(showClass);
    //     $this.find($dropdownToggle).attr("aria-expanded", "true");
    //     $this.find($dropdownMenu).addClass(showClass);
    //     },
    //     function() {
    //     const $this = $(this);
    //     $this.removeClass(showClass);
    //     $this.find($dropdownToggle).attr("aria-expanded", "false");
    //     $this.find($dropdownMenu).removeClass(showClass);
    //     }
    //     );
    //     } else {
    //     $dropdown.off("mouseenter mouseleave");
    //     }
    // });




});