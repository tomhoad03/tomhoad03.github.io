/*
// Runs on scroll
window.onscroll = function() {
    scrollFunction()
};

// Change navbar when scrolling
function scrollFunction() {
    let bgColor = "#4285F4";
    let accentColor = "#F8F9FA";

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        // What the navbar changes too.
        $(".navbar").css("background-color", accentColor);
        $("#webpage-links *").css("color", bgColor);
        $(".navbar-brand").css("color", bgColor);
        $("#social-icons *").css("color", bgColor);
    } else {
        // When the navbar is at the top
        $(".navbar").css("background-color", bgColor);
        $("#webpage-links *").css("color", accentColor);
        $(".navbar-brand").css("color", accentColor);
        $("#social-icons *").css("color", accentColor);
    }
}
*/