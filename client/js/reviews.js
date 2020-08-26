function Review(title, year, score, description) {
    this.title = title;
    this.year = year;
    this.score = score;
    this.description = description;

    this.scoreText = function() {
        return "&#11088;".repeat(this.score)
    }
}

function addReview() {
    let newReview = new Review("Thor: Ragnarok", 2017, 5, "The best of the Thor films, suitable for newcomers and MCU veterans. The CGI, story and acting have definitely improved, but most of all it has comedy. A perfect prologue to Infinity War.")

    $('.card-columns').append("<div class=\"card\">\n" +
        "                    <div class=\"card-body\">\n" +
        "                        <h5 class=\"card-title\">" + newReview.title + " (" + newReview.year + ")" + "</h5>\n" +
        "                        <h6>" + newReview.scoreText() + "</h6>\n" +
        "                        <p class=\"card-text\">" + newReview.description + "\n" +
        "                        </p>\n" +
        "                    </div>\n" +
        "                </div>");
}