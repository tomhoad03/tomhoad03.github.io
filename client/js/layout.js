function loadHeader(webpage) {
    let header = '<!-- Displays a navbar at the top of the page -->\n' +
        '            <nav class="navbar navbar-expand fixed-top scrolling-navbar shadow">\n' +
        '                <div id="navbar" class="container">\n' +
        '                    <a class="navbar-brand" href="index.html">Tom Hoad</a>\n' +
        '\n' +
        '                    <!-- Displays links to other webpages -->\n' +
        '                    <div class="collapse navbar-collapse justify-content-between">\n' +
        '                        <div id="webpage-links" class="navbar-nav">\n' +
        '                            <a id="link-programming" class="nav-item nav-link" href="programming.html">Programming</a>\n' +
        '                            <a id="link-reviews" class="nav-item nav-link" href="reviews.html">Film Reviews</a>\n' +
        '                            <a id="link-youtube" class="nav-item nav-link" href="youtube.html">YouTube</a>\n' +
        '                            <a id="link-spotify" class="nav-item nav-link" href="spotify.html">Spotify</a>\n' +
        '                            <a id="link-gaming" class="nav-item nav-link disabled" href="#">Gaming</a>\n' +
        '                        </div>\n' +
        '\n' +
        '                        <!-- Displays links to other platforms -->\n' +
        '                        <div id="social-icons" class="navbar-nav">\n' +
        '                            <a class="nav-item nav-link" href="https://github.com/tomhoad03">\n' +
        '                                <i class="fa fa-github mr-1"></i>\n' +
        '                            </a>\n' +
        '                            <a class="nav-item nav-link" href="https://www.linkedin.com/in/tom-hoad-a99b42194/">\n' +
        '                                <i class="fa fa-linkedin mr-1"></i>\n' +
        '                            </a>\n' +
        '                            <a class="nav-item nav-link" href="https://twitter.com/tom_hoad03">\n' +
        '                                <i class="fa fa-twitter mr-1"></i>\n' +
        '                            </a>\n' +
        '                            <a class="nav-item nav-link" href="https://www.youtube.com/channel/UC9GUBApYcTEs_Auzwp2ja6Q">\n' +
        '                                <i class="fa fa-youtube-play mr-1"></i>\n' +
        '                            </a>\n' +
        '                            <a class="nav-item nav-link" href="https://open.spotify.com/user/11153837184?si=dpGKiog9T4eKVrg1K94D6A">\n' +
        '                                <i class="fa fa-spotify mr-1"></i>\n' +
        '                            </a>\n' +
        '\n' +
        '                            <button id="download-button" class="btn btn-outline-light ml-3">Download</button>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </nav>';

    $('#header').append(header);

    if (webpage != null) {
        $('#link-' + webpage).addClass(' active');
    }
}