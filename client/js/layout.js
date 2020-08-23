// Runs on scroll
window.onscroll = function() {
    scrollFunction()
};

// Change navbar when scrolling
function scrollFunction() {
    let navbarBtn = $("#download-button");
    let navbarBtnHover = $("#download-button:hover");

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        // What the navbar changes too.
        $(".navbar").css("background-color", "#f8f9fa");
        $("#webpage-links *").css("color", "#343a40");
        $(".navbar-brand").css("color", "#343a40");
        $("#social-icons *").css("color", "#343a40");

        navbarBtn.css("color", "#343a40");
        navbarBtn.css("border-color", "#343a40");
        navbarBtnHover.css("color", "#f8f9fa");
        navbarBtnHover.css("background-color", "#343a40");
        navbarBtnHover.css("border-color", "#343a40");
    } else {
        // When the navbar is at the top
        $(".navbar").css("background-color", "#343a40");
        $("#webpage-links *").css("color", "#f8f9fa");
        $(".navbar-brand").css("color", "#f8f9fa");
        $("#social-icons *").css("color", "#f8f9fa");

        navbarBtn.css("color", "#f8f9fa");
        navbarBtn.css("border-color", "#f8f9fa");
        navbarBtnHover.css("color", "#343a40");
        navbarBtnHover.css("background-color", "#f8f9fa");
        navbarBtnHover.css("border-color", "#f8f9fa");
    }
}