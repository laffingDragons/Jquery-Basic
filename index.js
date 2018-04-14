$(document).ready(() => {

    //Function to hide all <P> tags
    $("div p").slideUp();
    //function to open single p tag on click
    $("div h4").hover(function() {
        $(this).css("cursor", "pointer")
    }).click(function(e) {
        e.preventDefault();
        $("div p").slideUp();
        // console.log(">>>>", $(this).next("p").val())
        $(this).next("p").slideDown("fast");
    })

    // funciton for nav bar
    $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
    });

    // function for modal
    $(".myBtn").click(function() {
        $(".modal").css("display", "block")
    });

    $(".close").click(function() {
        $(".modal").css("display", "none")
    })
})