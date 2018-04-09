$(document).ready(() => {

    //Function to hide all <P> tags
    $("div p").slideUp();
    //function to open single p tag on click
    $("div h4").hover(function() {
        $(this).css("cursor", "pointer")
    }).click(function(e) {
        e.preventDefault();
        $("div p").slideUp();
        $(this).next("p").slideDown("fast");
    })

})