function loadHeader() {
    let header = '<!-- Displays a navbar at the top of the page -->\n' +
        '            <nav class="navbar navbar-expand fixed-top scrolling-navbar navbar-light bg-light shadow">\n' +
        '                <div id="navbar" class="container">\n' +
        '                    <a class="navbar-brand">Tom Hoad</a>\n' +
        '\n' +
        '                    <!-- Displays links to other webpages -->\n' +
        '                    <div class="collapse navbar-collapse justify-content-between">\n' +
        '                        <div class="navbar-nav">\n' +
        '                            <a class="nav-item nav-link" href="index.html">Homepage</a>\n' +
        '                            <a class="nav-item nav-link" href="#">Programming</a>\n' +
        '                            <a class="nav-item nav-link" href="#">Film Reviews</a>\n' +
        '                            <a class="nav-item nav-link" href="youtube.html">YouTube</a>\n' +
        '                            <a class="nav-item nav-link" href="#">Spotify</a>\n' +
        '                            <a class="nav-item nav-link disabled" href="#">Gaming</a>\n' +
        '                        </div>\n' +
        '\n' +
        '                        <!-- Displays links to other platforms -->\n' +
        '                        <div class="navbar-nav">\n' +
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
        '                            <button class="btn btn-outline-secondary ml-3">Download</button>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </nav>';

    $('#header').append(header);
}