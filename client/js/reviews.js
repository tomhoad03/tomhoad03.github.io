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
    $.getJSON("./json/reviewsDB.json", function(data) {
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                for (let group in data[key]) {
                    if (data[key].hasOwnProperty(group)) {
                        let review = new Review(data[key][group].title, data[key][group].year, data[key][group].score, data[key][group].description);

                        $('.card-columns').append("<div class=\"card\">\n" +
                            "                    <div class=\"card-body\">\n" +
                            "                        <h5 class=\"card-title\">" + review.title + " (" + review.year + ")" + "</h5>\n" +
                            "                        <h6>" + review.scoreText() + "</h6>\n" +
                            "                        <p class=\"card-text\">" + review.description + "\n" +
                            "                        </p>\n" +
                            "                    </div>\n" +
                            "                </div>");
                    }
                }
            }
        }
    });
}