// Object for modelling a review
function Review(title, year, score, description) {
    this.title = title;
    this.year = year;
    this.score = score;
    this.description = description;

    this.scoreText = function() {
        return "&#11088;".repeat(this.score)
    }
}

/* Ways to expand in the future:
1. Sort function (by year, by rating)
2. Give films id and link to imdb
3. Colour based on genre
4. Twitter API, future reviews get added here
5. Search function - find films easier
 */
function addReview() {
    // Reads the JSON database storing reviews
    $.getJSON("client/json/reviewsDB.json", function (json) {
        // 1 = left, 2 = mid, 3 = right
        let count = 0;

        for (let outer in json) {
            if (json.hasOwnProperty(outer)) {
                for (let inner in json[outer]) {
                    if (json[outer].hasOwnProperty(inner)) {
                        // Displays the review on the webpage
                        let review = new Review(json[outer][inner].title, json[outer][inner].year, json[outer][inner].score, json[outer][inner].description);

                        if (count === 3) {
                            count = 1;
                        } else {
                            count++;
                        }

                        $("#col-" + count).append("<div class=\"card shadow mb-3\">\n" +
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
};

